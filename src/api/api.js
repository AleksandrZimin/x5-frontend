class api {
   constructor(baseUrl, header) {
       this.baseUrl = baseUrl;
       this.header = header;
   }

   getFeedback() {
       return fetch(`${this.baseUrl}/feedback`, {
           headers: this.header,
       }).then((res) => this._checkResponse(res));
   }

   newFeedback(name, phone, text, stars) {
       return fetch(`${this.baseUrl}/feedback`, {
           method: "POST",
           headers: this.header,
           body: JSON.stringify({name, phone, text, stars}),
       }).then((res) =>
           this._checkResponse(res)
       );
   }

   updateFeedback(id, feedback) {
      return fetch(`${this.baseUrl}/feedback/${id}`, {  // добавляем слэш перед id
          method: "PATCH",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(feedback),
      }).then((res) => this._checkResponse(res));
   }

   deleteFeedback(id) {
      return fetch(`${this.baseUrl}/feedback/${id}`, {
          method: "DELETE",
          headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
              "content-type": "application/json",
          },
      }).then((res) => this._checkResponse(res));
  }

   // _checkResponse(res) {
   //     if (res.ok) {
   //         return res.json();
   //     }
   //     return Promise.reject(res.status);
   // }

   _checkResponse(res) {
      if (res.ok) {
          // Если ответ успешный, возвращаем JSON
          return res.json();
      }
      
      // Если ответ не успешный, получаем текст ошибки
      return res.text().then((text) => {
          // Создаем и выбрасываем ошибку с статусом и текстом
          throw new Error(`Ошибка сервера: ${res.status} ${text}`);
      });
  }
  
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new api("http://localhost:3001", {
   "Content-Type": "application/json",
});