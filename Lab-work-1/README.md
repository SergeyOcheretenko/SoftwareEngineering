# Лабораторна робота 1

### Context

Проект для автоматизації вирішення математичних рівнянь різного типу.  
Створений для **полегшення процесу взаємодії** користувача з обчислювальною програмою.

### Goals

Консольний додаток надає змогу розв'язувати такі рівняння, як:
+ квадратні рівняння будь-якого вигляду;
+ лінійні рівняння будь-якого вигляду.

Проект полегшує взаємодію користувача з програмою, даючи змогу працювати в двох режимах:
+ режим передачі шляху до текстового файлу з потрібними даними;
+ режим консольного вводу потрібних даних.

### Installation
Проект створено з використаннях технологій **Node.js** та **NPM**.

Встановлення Node.js та NPM на локальний пристрій:
```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

Програма використовує Node.js версії v17.3.1. 
Щоб її встановити, використаємо **NVM**.

**Встановлюємо NVM:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
```

Можемо отримати список усіх доступних для встановлення версій Node.js:
```bash
nvm list-remote
```

**Встановлюємо потрібну версію Node.js:**
```bash
nvm install v17.3.1
```

### Run Locally

Склонуємо репозиторій на локальний пристрій:
```bash
git clone https://github.com/SergeyOcheretenko/SoftwareEngineering.git
cd SoftwareEngineering
```

Переходимо в робочу директорію та завантадуємо потрібні модулі::
```bash
cd Lab-work-1/src
npm install
```

Запускаємо програму за допомогою технології NPM:
```bash
npm start [arguments]
```

### Usage/Examples

**Revert commit usage example:** [commit 48d2715](https://github.com/SergeyOcheretenko/SoftwareEngineering/commit/48d271557b82354fe49d2ec5688319e92ee1ed1a).

### Support

**Telegram**: [@OcheretenkoS](https://t.me/OcheretenkoS).  
**Gmail**: [ocheretenko.s@gmail.com](mailto:ocheretenko.s@gmail.com).

### Authors 
+ [Sergey Ocheretenko](https://github.com/SergeyOcheretenko)
