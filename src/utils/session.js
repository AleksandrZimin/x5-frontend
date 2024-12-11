const { chromium } = require('playwright');
const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

export const saveSession = async (browserContext, saveToServer = false) => {
  const storagePath = path.resolve(__dirname, 'browserContext.json');
  const state = await browserContext.storageState();

  // Локальное сохранение
  await fs.writeFile(storagePath, JSON.stringify(state));
  console.log('Сессия сохранена локально:', storagePath);

  if (saveToServer) {
    // Отправляем сессию на сервер через API
    const serverURL = 'https://example.com/api/browser-session';
    await axios.post(serverURL, state, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Сессия отправлена на сервер.');
  }
};

export const loadSession = async () => {
   const storagePath = path.resolve(__dirname, 'browserContext.json');
 
   try {
     const state = JSON.parse(await fs.readFile(storagePath, 'utf8'));
     const browser = await chromium.launch({ headless: false });
     const context = await browser.newContext({ storageState: state });
 
     console.log('Сессия загружена.');
     return context;
   } catch (error) {
     console.error('Ошибка при загрузке сессии:', error.message);
     return null;
   }
 };