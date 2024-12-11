import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

export class BrowserManager {

  constructor() {
    this.profileCounter = 1; // Счётчик профилей
  }

  // Метод для создания браузера с новым профилем
  async createBrowser() {
    const profilePath = path.resolve(`./profiles/profile-${this.profileCounter}`);
    this.profileCounter += 1; // Увеличиваем счётчик для следующего профиля

    // Убедимся, что папка профиля существует или создаём её
    if (!fs.existsSync(profilePath)) {
      fs.mkdirSync(profilePath, { recursive: true });
    }

    // Создаём браузер с новым профилем
    const context = await chromium.launchPersistentContext(profilePath, {
      headless: false, // Включить видимый режим
      channel: 'chrome', // Используем Google Chrome
      args: [
        '--proxy-bypass-list=<-loopback>',
        '--disable-blink-features=AutomationControlled',
      ],
    });

    console.log(`Создан новый профиль: ${profilePath}`);
    return context; // Возвращаем контекст для работы
  }
}