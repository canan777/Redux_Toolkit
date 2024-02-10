/*
* Hem reducer'ları,
* Hem aksiyon'ları
* farklı dosyalarda oluşturmak yerine 
* slice yapısı oluşturarak ikisini de tek noktada tanımlayabiliyoruz.
*/
//? slice oluşturma
/*
1 ) import createSlice
2 ) gerekli parametreleri tanımla
- - name:slice ismi "string"
- - initialState: başlangıç state'i
- - reducers: aksiyonların görevini tanımladığımız fonksiyonlardır
*/
import { createSlice } from "@reduxjs/toolkit";

const counterSlice=  createSlice({
    name: 'counter', // slice ismi
    initialState : { count: 0, is_dark_theme: true },
    // state'in nasıl değişeceğine karar veren fonksiyonlar
    // reducer/aksiyon fonksiyonları
    // bütün aksiyon fonksiyonları iki parametre alır
    // 1- state'in son hali
    // 2- aksiyon objesi
    // aksiyon fonksiyonların redux'taki reducer'larda tanımladığımız case'lerden temel farkı state'i doğrudan güncellemeleri
    reducers:{
        increase: (state) => {
            state.count++;
        },

        decrease: (state) => {
           state.count !== 0 &&  state.count--;
        },
// payloadı kullanacaksak ikinci parametreye aksiyonu alırız
        set_count:(state,action) => {
           state.count = action.payload;
        },

    changeTheme: (state) => {
        state.is_dark_theme = !state.is_dark_theme;
    },  
  },
});

// createSlice methodu bizim için klasik redux'ta switc case'lerle
// tanımladığımız reducer fonksiyonunu kendisi oluşturur
export default counterSlice.reducer;

// create slice methodu bizim oluşturduğumuz aksiyon oluşturan fonksiyonları
// kendisi otomatik oluşturur biz ise sadece export edip istediğimiz 
// bileşenlerde kullanırız.
export const { increase, decrease, set_count, changeTheme } = counterSlice.actions;
