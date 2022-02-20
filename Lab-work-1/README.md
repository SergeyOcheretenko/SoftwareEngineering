# Лабораторна робота 1

### Context

Проект для автоматизації вирішення математичних рівнянь різного типу.  
Створений для **полегшення процесу взаємодії** користувача з обчислювальною програмою.

### Goals

Консольний додаток надає змогу розв'язувати такі рівняння, як:
+ квадратні рівняння будь-якого вигляду;
+ лінійні рівняння будь-якого вигляду.

У випадку, коли коефіцієнт a = 0, програма переходить в режим розв'язання лінійного рівняння.

Проект полегшує взаємодію користувача з програмою, даючи змогу працювати в двох режимах:
+ режим передачі шляху до текстового файлу з потрібними даними;
+ режим консольного вводу потрібних даних.

Програма читає файли з розширенням ```.txt```, дані в який записані у форматі ```a b c\n```, де ```\n``` - перехід на наступний рядок.

Щоб скористатися варіантом з передачею шляху до текстового файлу, його потрібно передати в якості аргументу під час запуску програми:
```bash
npm start your_path
```

Якщо буде передано більше 1-го аргументу, **автоматично буде використано перший аргумент**.

Якщо аргумент не буде переданий, програма **автоматично перейде в режим консольного вводу потрібних даних**.

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

Переходимо в робочу директорію та завантажуємо потрібні модулі:
```bash
cd Lab-work-1/src
npm install
```

Запускаємо програму за допомогою технології NPM:
```bash
npm start [arguments]
```

Щоб скористатися варінтом користування з передачею шляху до текстового файлу, по
трібно запустити програму, передавши їй відносний або абсолютний шлях, починаючи з кореня файлової системи.

Наприклад:
```bash
npm start /home/ocheretenko/Documents/my_file.txt
```

### Usage/Examples

**Приклад використання Revert Commit:** [commit 48d2715](https://github.com/SergeyOcheretenko/SoftwareEngineering/commit/48d271557b82354fe49d2ec5688319e92ee1ed1a).

**Приклади використання програми:**

|**FILE CONTENT**  | **INPUT**                | **OUTPUT**                         |
|------------------|--------------------------|------------------------------------|
| ```2 -9.5 4.3``` | ```npm start test.txt``` |This is a quadratic equation!       |
|                  |                          | (2) * x^2 + (-9.5) * x + (4.3) = 0 |
|                  |                          | There are 2 roots.                 |
|                  |                          | x1 = 4.243321439153338             |
|                  |                          | x2 = 0.506678560846662             |

|**FILE CONTENT** | **INPUT**                                     | **OUTPUT**                |
|-----------------|-----------------------------------------------|---------------------------|
|```0 -5 4```     | ```npm start /home/ocheretenko/numbers.txt``` |This is a linear equation! |
|                 |                                               | (-5) * x + (4) = 0        |
|                 |                                               | One solution.             |
|                 |                                               | x = 0.8                   |

| **FILE CONTENT** | **INPUT**                                            | **OUTPUT**                         |
|------------------|------------------------------------------------------|------------------------------------|
|```Test```        | ```npm start /home/ocheretenko/Documents/test.txt``` | The file does not contain numbers. |

| **FILE CONTENT**     | **INPUT**                                      | **OUTPUT**              |
|----------------------|------------------------------------------------|-------------------------|
| ```Doesnt exists.``` | ```npm start /home/ocheretenko/new_test.txt``` |This file doesnt exists. |

| **INPUT**                                      | **OUTPUT**                      |
|------------------------------------------------|---------------------------------|
| ```npm start /home/ocheretenko/new_test.txt``` |  This is a quadratic equation!  |
| ```a = 1 ```                                   |  (1) * x^2 + (4) * x + (-5) = 0 |
| ```b = 4```                                    |  There are 2 roots.             |
| ```c = -5```                                   |  x1 = 1                         |
|                                                | x2 = -5                         |

| **INPUT**                              | **OUTPUT**                        |
|----------------------------------------|-----------------------------------|
| ```npm start```                        |  This is a quadratic equation!    |
| ```a = 1 ```                           |  (1) * x^2 + (3) * x + (2.25) = 0 |
| ```b = invalid```                      |  Only one root.                   |
| ```It's not a number. Repeat please``` |  x = -1.5                         |
| ```b = repeat invalid```               |                                   |
| ```It's not a number. Repeat please``` |                                   |
| ```b = 3 ```                           |                                   |
| ```c = 2oops```                        |                                   |
| ```It's not a number. Repeat please``` |                                   |
| ```c = 2.25```                         |                                   |

| **INPUT**       | **OUTPUT**                    |
|-----------------|-------------------------------|
| ```npm start``` | This is a quadratic equation! |
| ```a = 1 ```    | (1) * x^2 + (2) * x + (3) = 0 |
| ```b = 2```     | Discriminant < 0. No roots.   |
| ```c = 3```     |                               |

| **INPUT**       | **OUTPUT**                  |
|-----------------|-----------------------------|
| ```npm start``` |  This is a linear equation! |
| ```a = 0 ```    |  (2) * x + (7) = 0          |
| ```b = 2```     |  One solution.              |
| ```c = 7```     |  x = -3.5                   |

| **INPUT**       | **OUTPUT**                 |
|-----------------|----------------------------|
| ```npm start``` | This is a linear equation! |
| ```a = 0 ```    | (0) * x + (4) = 0          |
| ```b = 0```     | No roots                   |
| ```c = 4```     |                            |

| **INPUT**       | **OUTPUT**                  |
|-----------------|-----------------------------|
| ```npm start``` |  This is a linear equation! |
| ```a = 0 ```    |  (3) * x + (0) = 0          |
| ```b = 3```     |  One root.                  |
| ```c = 0```     |  x = 0                      |

| **INPUT**       | **OUTPUT**                    |
|-----------------|-------------------------------|
| ```npm start``` |  This is a linear equation!   |
| ```a = 0 ```    |  (0) * x + (0) = 0            |
| ```b = 0```     |  Infinite number of solutions |
| ```c = 0```     |                               |

### Support

**Telegram**: [@OcheretenkoS](https://t.me/OcheretenkoS).  
**Gmail**: [ocheretenko.s@gmail.com](mailto:ocheretenko.s@gmail.com).

### Authors 
+ [Sergey Ocheretenko](https://github.com/SergeyOcheretenko)
