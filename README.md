# Web_Hybrid_Mobiiliohjelmointi_MaterialDesignNavigointi

## 📱 React Native — Material Design & Navigation -harjoitus

**Tekijä:** Sara Vehviläinen  
**Oppilaitos:** Oulun ammattikorkeakoulu  
**Kurssi:** Web- ja hybriditeknologiat mobiiliohjelmoinnissa  
**Lukukausi:** Syksy 2025

---

## 🧩 Tehtävän kuvaus

Tämä sovellus demonstroi **Stack Navigation** ja **Material Design** -kirjastojen käyttöä React Native -sovelluksessa TypeScript-ympäristössä.

Sovelluksessa käyttäjä voi navigoida kahden ruudun välillä (HomeScreen ja SecondScreen) käyttäen custom Material Design -sovelluspalkissa olevia painikkeita.

Tehtävä on osa kurssia **Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)**.

---

## ✨ Toiminnallisuus

- **HomeScreen**: Pääruutu, jossa näkyy teksti "HomeScreen"
  - Sovelluspalkissa näkyy nuoli oikealle → navigoi SecondScreenille
- **SecondScreen**: Toinen ruutu, jossa näkyy teksti "SecondScreen"
  - Sovelluspalkissa näkyy takaisin-nuoli ← navigoi takaisin HomeScreenille
- **Custom AppBar**: Material Design -sovelluspalkki, joka näyttää ehdollisesti oikeat ikonit riippuen siitä, millä ruudulla ollaan
- **React Native Paper**: Material Design -tyyppinen ulkoasu
- **Stack Navigation**: Ruutujen välinen navigointi

---

## 🛠️ Käytetyt teknologiat ja kirjastot

- **React Native (Expo)**
- **TypeScript**
- **React Navigation:**
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
  - `react-native-screens`
  - `react-native-safe-area-context`
- **React Native Paper** - Material Design -komponentit
- **React Native Vector Icons** - Ikonit sovelluspalkissa

### React Hooks:
- Navigaatio TypeScript-tyypeillä

### Komponentit:
- `NavigationContainer` - Navigaation pääkontti
- `createNativeStackNavigator` - Stack-navigaattori
- `PaperProvider` - Material Design -teeman tarjoaja
- `Appbar` - Custom sovelluspalkki Material Design -tyylillä
- `View`, `Text`, `StyleSheet` - Perus React Native -komponentit

---

## 🚀 Asennus ja käynnistys

### Olemassa olevan projektin käynnistys:

```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npx expo start
```

### Sovelluksen testaaminen:

**📱 Mobiililaite:**
- Asenna **Expo Go** -sovellus (iOS App Store / Google Play)
- Skannaa QR-koodi Expo Go -sovelluksella

**💻 Emulaattori/Simulaattori:**
```bash
npm run android   # Android-emulaattori
npm run ios       # iOS-simulaattori  
npm run web       # Verkkoselain
```

---

## 📁 Projektikansio

```
Web_Hybrid_Mobiiliohjelmointi_MaterialDesignNavigointi/
├── README.md
└── Tehtava3/
    └── navigointi/
        ├── App.tsx                    # Sovelluksen pääkomponentti (Stack Navigator)
        ├── app.json                   # Expo-konfiguraatio  
        ├── index.ts                   # Sovelluksen käynnistyspiste
        ├── package.json               # Projektin riippuvuudet
        ├── package-lock.json          # Lukitut riippuvuusversiot
        ├── tsconfig.json              # TypeScript-asetukset
        ├── .gitignore                 # Git-ohitettavat tiedostot
        ├── components/
        │   └── AppBar.tsx             # Custom Material Design -sovelluspalkki
        ├── screens/
        │   ├── HomeScreen.tsx         # Pääruutu
        │   └── SecondScreen.tsx       # Toinen ruutu
        └── assets/                    # Kuvat ja resurssit
            ├── adaptive-icon.png
            ├── favicon.png
            ├── icon.png
            └── splash-icon.png
```

---

## 🎯 Oppimistavoitteet

- ✅ **Stack Navigation** -navigoinnin perusteet React Nativessa
- ✅ **Material Design** -kirjaston (React Native Paper) käyttö
- ✅ **Custom AppBar** -komponentin toteuttaminen
- ✅ **Ehdollinen näyttäminen** - ikonit vaihtuvat sen mukaan, millä sivulla ollaan
- ✅ **TypeScript** -tyyppien käyttö navigaatiossa (`RootStackParamList`)
- ✅ **NavigationContainer** ja **Stack.Navigator** -konfigurointi
- ✅ **React Native Paper** -komponenttien tyylittely
- ✅ **Koodin jakaminen osiin** - screens ja components -kansioihin

---

## 📝 Huomioita

- `PaperProvider` wrappaa koko sovelluksen Material Design -teemaa varten
- `screenOptions` määrittää custom AppBar:n kaikille ruuduille
- `back` -propsi AppBar-komponentissa kertoo, näytetäänkö takaisin-nuoli
- TypeScript-tyypit (`RootStackParamList`) varmistavat tyyppiturvallisuuden navigaatiossa
- Kaikki tiedostot käyttävät `.tsx` -päätettä (TypeScript + JSX)
- Sovellus käyttää React Native Paper -komponentteja Material Design -ulkoasua varten

---

## 📚 Oppimisresurssit

### React Navigation dokumentaatio:
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started) - Virallinen dokumentaatio
- [Stack Navigator](https://reactnavigation.org/docs/stack-navigator) - Stack-navigaattorin käyttö
- [TypeScript with React Navigation](https://reactnavigation.org/docs/typescript/) - TypeScript-tyypit navigaatiossa
- [Header customization](https://reactnavigation.org/docs/headers) - Custom header -komponentit

### React Native Paper dokumentaatio:
- [React Native Paper Documentation](https://callstack.github.io/react-native-paper/) - Virallinen dokumentaatio
- [Appbar Component](https://callstack.github.io/react-native-paper/docs/components/Appbar/) - Sovelluspalkki
- [Text Component](https://callstack.github.io/react-native-paper/docs/components/Text/) - Tekstikomponentti
- [Theming](https://callstack.github.io/react-native-paper/docs/guides/theming/) - Teemojen käyttö

### React Native dokumentaatio:
- [React Native Documentation](https://reactnative.dev/docs/getting-started) - Virallinen dokumentaatio
- [React Native View](https://reactnative.dev/docs/view) - Pohjakomponentti layoutille
- [React Native StyleSheet](https://reactnative.dev/docs/stylesheet) - Tyylien määrittely

### Expo dokumentaatio:
- [Expo Documentation](https://docs.expo.dev/) - Expo-alustan dokumentaatio
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) - Komentorivityökalut
- [Expo Go App](https://expo.dev/go) - Sovelluksen testaus mobiililaitteella

### TypeScript:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript-dokumentaatio
- [TypeScript with React Native](https://reactnative.dev/docs/typescript) - TypeScript React Native -sovelluksissa

### Työkalut ja ympäristöt:
- [VS Code React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) - Kehitystyökalut
- [Android Studio](https://developer.android.com/studio) - Android-emulaattori
- [Xcode](https://developer.apple.com/xcode/) - iOS-simulaattori
