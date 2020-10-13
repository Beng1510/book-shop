var gTrans = {
    'main-title': {
        en: 'Ben\'s Book Store',
        rs: 'Бена Книжный магазин',
        he: 'חנות הספרים של בן'
    },
    'subtitle': {
        en: 'Welcome',
        rs: 'Добро пожаловать',
        he: 'ברוכים הבאים'
    },
    'select-lang': {
        en: 'Select your Language',
        rs: 'Выберите ваш язык',
        he: 'בחר שפה'
    },
    'add-book': {
        en: 'Add Book',
        rs: 'Добавить книгу',
        he: 'הוסף ספר'
    },
    'add-book-title': {
        en: 'Book Title',
        rs: 'Заголовок книги',
        he: 'שם כותר ',
    },
    'add-book-price': {
        en: 'Price?',
        rs: 'Цена',
        he: 'מחיר?',
    },
    'add-object': {
        en: 'Add',
        rs: 'добавлять',
        he: 'הוסף'
    },
    'Id': {
        en: 'ID',
        rs: 'Я бы',
        he: 'מספר סידורי',
    },
    'Title': {
        en: 'Title',
        rs: 'заглавие',
        he: 'שם כותר',
    },
    'Price': {
        en: 'Price',
        rs: 'Цена',
        he: 'מחיר',
    },
    'Rating': {
        en: 'Rating',
        rs: 'Рейтинг',
        he: 'דירוג',
    },
    'Actions': {
        en: 'Actions',
        rs: 'Действия',
        he: 'פעולות',
    },
    'Read': {
        en: 'Read',
        rs: 'Читать',
        he: 'עוד פרטים',
    },
    'Update': {
        en: 'Update',
        rs: 'Обновить',
        he: 'עדכן',
    },
    'Delete': {
        en: 'Delete',
        rs: 'удалять',
        he: 'מחק',
    },
    'Book Rating': {
        en: 'Book Rating',
        rs: 'Estas Seguru?',
        he: 'דירוג?',
    },
    // 'Actions': {
    //     en: 'Actions',
    //     rs: 'Estas Seguru?',
    //     he: 'פעולות?',
    // },
    // 'Actions': {
    //     en: 'Actions',
    //     rs: 'Estas Seguru?',
    //     he: 'פעולות?',
    // },
    // 'Actions': {
    //     en: 'Actions',
    //     rs: 'Estas Seguru?',
    //     he: 'פעולות?',
    // },
    // 'Actions': {
    //     en: 'Actions',
    //     rs: 'Estas Seguru?',
    //     he: 'פעולות?',
    // },
    // 'add-todo-placeholder': {
    //     en: 'What needs to be done?',
    //     rs: 'Que te tienes que hacer?',
    //     he: 'מה יש לעשות?'
    // }
}

var gCurrLang = 'en';

function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN';

    var trans = transMap[gCurrLang]
    if (!trans) trans = transMap['en'];
    return trans;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    els.forEach(function(el){
        const transKey = el.dataset.trans;
        if (el.placeholder) el.placeholder = getTrans(transKey)
        else el.innerText = getTrans(transKey)
    })
}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('rs')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL',{ style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang,options).format(time);
}

function kmToMiles(km) {
    return km / 1.609;
}