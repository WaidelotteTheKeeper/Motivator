

const first_arguments = [
    { text: "Ты идиот!", meta: {} },
    { text: "Ты говноед!", meta: {} },
    { text: "Ты малолетний дебил!", meta: {} },
    { text: "Ты бомж!", meta: {} },
    { text: "Ты умалишенный!", meta: {} },
    { text: "Ты пельмень контуженный!", meta: {} },
    { text: "Ублюдок!", meta: {} },
    { text: "Ананист чертов!", meta: {} },
    { text: "Мать твою,", meta: {} },
    { text: "На кого шуршишь, пакетик?", meta: {} },
    { text: "Гони говно по трубам!", meta: {} },
    { text: "Иди шторы жри!", meta: {} },
    { text: "Ты гад!", meta: {} },
    { text: "Ты негодяй!", meta: {} },
    { text: "Ты решил ко мне лезть?", meta: {} },
    { text: "Ты паршивец!", meta: {} },
    { text: "Ты тварь!", meta: {} },
    { text: "Ты супостат!", meta: {} },
    { text: "Ты блевотное ведрище!", meta: {} },
    { text: " ", meta: {} },
    { text: "Ты неудачник!", meta: {} },
    { text: "Ты говножуй!", meta: {} },
    { text: "Сука!", meta: {} },
    { text: "Чайка бородатая!", meta: {} },
    { text: "Ты не способен ничего достичь!", meta: {} },
    { text: "Я тебя на вилы насажу!", meta: {} },
    { text: "Ты глиномес!", meta: {} },
    { text: "Иди отсюда!", meta: {} },
    { text: "Торчок жеванный!", meta: {} },
    { text: "Я тебя сейчас на ноль умножу!", meta: {} },
    { text: "Хлебни говна!", meta: {} },
    { text: "Погань!", meta: {} },
    { text: "Ты существо, не способное комплексно мыслить!", meta: {} },
    { text: "Чернь поганая!", meta: {} },
    { text: "Ты мерзкий!", meta: {} },
    { text: "Не туда ты зашел!", meta: {} },
    { text: "Ты берега попутал?", meta: {} },
    { text: "Да ты редкий мудак!", meta: {} },
    { text: "Здравствуй, кусок говна!", meta: {} },
    { text: "Ах ты лицемер!", meta: {} },
    { text: "Ты жирдяй!", meta: {} },
    { text: "Ты не справишься!", meta: {} },
    { text: "Осуждаю твои действия!", meta: {} },
    { text: "Беспомощный...", meta: {} },
    { text: "Чего ты достиг?", meta: {} },
    { text: "Иди жри говно с лопаты!", meta: {} },
    { text: "Ты погряз в дремучем невежестве!", meta: {} },
    { text: "Иди работай!", meta: {} },
    { text: "Уважаемый!", meta: {} },
    { text: "Жиртрест!", meta: {} },
    { text: "Тебя все ненавидят!", meta: {} },
    { text: "Ты говнюк!", meta: {} },
    { text: "Если я еще хоть раз повторю!", meta: {} },
    { text: "Ты тупой!", meta: {} },
    { text: "У тебя жизнь - полное дерьмо!", meta: {} },
    { text: "Ты ничего не хочешь!", meta: {} },
    { text: "Тебе ничего не надо!", meta: {} },
    { text: "Ты лентяй!", meta: {} },
    { text: "Ты тупорылый!", meta: {} },
    { text: "Ты балабол и дурак!", meta: {} },
    { text: "Ты трепло дешевое!", meta: {} },
    { text: "Лечись от говноедства!", meta: {} },
    { text: "Никто тебя не уважает!", meta: {} },
    { text: "Ты малолетний дебил!", meta: {} },
    { text: "Ты дегенерат!", meta: {} },
    { text: "Ты нарколыга!", meta: {} },
    { text: "Ты ничего не сделал!", meta: {} },
    { text: "Ты - разочарование!", meta: {} },
    { text: "Ты ни на что не способен!", meta: {} },
    { text: "Ты безумец!", meta: {} },
    { text: "В твой мозг кто-то проник!", meta: {} },
    { text: "Ахахаха ну ты и лох!", meta: {} },
    { text: "Ой какой молодец!", meta: {} },
    { text: "Иди, погрызи деревяжку.", meta: {} },
    { text: "Что у тебя в башке творится?", meta: {} },
    { text: "Невменяемый!", meta: {} },
    { text: "Ты подонок!", meta: {} },
    { text: "Ты сгниешь в тюрьме!", meta: {} },
    { text: "Чего ты там вопишь?", meta: {} },
    { text: "Ну ты дурак.", meta: {} },
    { text: "Я тебе моргалы выколю!", meta: {} },
    { text: "Ты за это заплатишь!", meta: {} },
    { text: "Ты пришел к успеху!", meta: {} },
    { text: "У тебя неважные планы!", meta: {} },
    { text: "Что с тобой?", meta: {} },
    { text: "У тебя явно что-то пошло не так.", meta: {} },
    { text: "Неудачная работа!", meta: {} },
    { text: "Отвратительно поработал!", meta: {} },
    { text: "Ты нажрался?", meta: {} },
    { text: "Проснись придурок!", meta: {} },
    { text: "Ты живешь в кошмаре!", meta: {} },
    { text: "Это просто сон.", meta: {} },
    { text: "Приветствую! Ты в аду!", meta: {} },
    { text: "Ты ушлепок!", meta: {} },
    { text: "Ты - тупиковая ветвь эволюции!", meta: {} },
    { text: "Переоденься!", meta: {} },
    { text: "Отличный денек для рыбалки!", meta: {} },
    { text: "Ты че творишь?", meta: {} },
    { text: "У тебя шифер потек!", meta: {} },
    { text: "Ты гусей погнал!", meta: {} },
    { text: "Попперсов нанюхался?", meta: {} },
    { text: "Ты элитный долботреп!", meta: {} },
    { text: "Ты жирный, страшный и старый!", meta: {} },
    { text: "Ты мой шнырь!", meta: {} },
    { text: "Ты преступник!", meta: {} },
    { text: "Что те от меня надо?", meta: {} },
    { text: "Унылый зануда!", meta: {} },
    { text: "Ты живешь в аду!", meta: {} },
    { text: "Добро пожаловать в ад!", meta: {} },
    { text: "Ты ощущаешь себя пидором.", meta: {} },
    { text: "Ты не любишь котиков!", meta: {} },
    { text: "Нюхай клей!", meta: {} },
    { text: "Бухай пиво!", meta: {} },
    { text: "Нюхай бензик!", meta: {} },
    { text: "Ты не просто так делаешь, что делаешь.", meta: {} },
    { text: "Ты злобный подоконник!", meta: {} },
    { text: "Ты подлая крыса!", meta: {} },
    { text: "Тебя все бросили!", meta: {} },
    { text: "Ты пьешь неразбавленную краску?", meta: {} },
    { text: "У тебя минимальная зарплата!", meta: {} },
    { text: "Ты вернулся?", meta: {} },
    { text: "Какой же ты тупой!", meta: {} },
    { text: "Ты старый алкоголик!", meta: {} },
    { text: "Ты лысый!", meta: {} },
    { text: "Ты генитальный сыщик!", meta: {} },
    { text: "Ты получишь медаль!", meta: {} },
    { text: "Ты подложил вместо себя маннекен!", meta: {} },
    { text: "Ты психопат!", meta: {} },
    { text: "Ты справился!", meta: {} },
    { text: "Древнее зло пробудилось!", meta: {} },
    { text: "Выглядишь ты неважно.", meta: {} },
    { text: "Ты неспособен ничего доказать!", meta: {} },
    { text: "Ты неспособен ничего починить!", meta: {} },
    { text: "Пересмотри свой подход!", meta: {} },
    { text: "Ты падла!", meta: {} },
    { text: "Ты неудержим, как бог поноса!", meta: {} },
    { text: "Ты токсичен!", meta: {} },
    { text: "Тебя траванули!", meta: {} },
    { text: "Ты дикарь!", meta: {} },
    { text: "Ты бездомный!", meta: {} },
    { text: "Взвешено прими решение!", meta: {} },
    { text: "Не нервничай!", meta: {} },
    { text: "Расслабься!", meta: {} },
    { text: "Ты кинут через хер!", meta: {} },
    { text: "Ты ничего не умеешь!", meta: {} },
    { text: "Ты дятел!", meta: {} },
    { text: "У тебя нет никакого преимущества!", meta: {} },
    { text: "Ты рыхлый!", meta: {} },
    { text: "Мне нужно кое-что сказать:", meta: {} },
    { text: "Ты нормальный мужик!", meta: {} },
    { text: "Опять ты?", meta: {} },
    { text: "Ты похититель!", meta: {} },
    { text: "Ты такая скотина!", meta: {} },
    { text: "У тебя фиговый день!", meta: {} },
    { text: "Ты подлец!", meta: {} },
    { text: "Ты полный обсос!", meta: {} },
    { text: "Ты хрен ли делаешь?", meta: {} },
    { text: "Ты похож на гаргулью!", meta: {} },
    { text: "Твоя плоть гниет!", meta: {} },
    { text: "Ты метамфетаминовая бомжиха!", meta: {} },
    { text: "Ты отсталый!", meta: {} },
    { text: "Ты бесхребетный мудак!", meta: {} },
    { text: "Ты еще можешь успеть!", meta: {} },
    { text: "Ты грязный демон!", meta: {} },
    { text: "Ты ничего из себя не представляешь!", meta: {} },
    { text: "Твое лицо о многом говорит.", meta: {} },
    { text: "Ты все упустил!", meta: {}},
    { text: "И что ты будешь делать?", meta: {}},
    { text: "Ты неудачник!", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},



];

console.log(first_arguments.length);

const second_arguments = [
    { text: " Тебе лечиться надо!", meta: {} },
    { text: " Ты зашкварился!", meta: {} },
    { text: " Да ты же феерический идиот!", meta: {} },
    { text: " А ну иди сюда, говно собачье!", meta: {} },
    { text: " Подстилка триперного кролика!", meta: {} },
    { text: " Говно!", meta: {} },
    { text: " Жопа!", meta: {} },
    { text: " Анус перепуганный!", meta: {} },
    { text: " Чтоб тебе по телевизору одна реклама шла!", meta: {} },
    { text: " Тля обкусанная!", meta: {} },
    { text: " Падла!", meta: {} },
    { text: " Я тебя сам трахну!", meta: {} },
    { text: " Ублюдок!", meta: {} },
    { text: " Мерзавец!", meta: {} },
    { text: " Идиот!", meta: {} },
    { text: " Погань!", meta: {} },
    { text: " Подлец!", meta: {} },
    { text: " Шваль подзаборная!", meta: {} },
    { text: " Алкоголик!", meta: {} },
    { text: " Я тебя на скалку насажу!", meta: {} },
    { text: " Я тебе покушать принес!", meta: {} },
    { text: " ", meta: {} },
    { text: " Сучий потрох!", meta: {} },
    { text: " Хоть раз еще нажми эту кнопку!", meta: {} },
    { text: " Клептоман небритый!", meta: {} },
    { text: " Живи в говнище!", meta: {} },
    { text: " Человечеству стыдно!", meta: {} },
    { text: " Бомжара!", meta: {} },
    { text: " Урод!", meta: {} },
    { text: " Быдло!", meta: {} },
    { text: " Гнида!", meta: {} },
    { text: " Гондон!", meta: {} },
    { text: " Немощный!", meta: {} },
    { text: " И теперь ты - ПИДОР!", meta: {} },
    { text: " Чудовище!", meta: {} },
    { text: " Бездельник!", meta: {} },
    { text: " Да ты тотальный кретин!", meta: {} },
    { text: " Пошел ты в жопу!", meta: {} },
    { text: " Иди попей говна!", meta: {} },
    { text: " Ты в курсе?", meta: {} },
    { text: " Тебе конец!", meta: {} },
    { text: " Зверье!", meta: {} },
    { text: " Гребанное животное!", meta: {} },
    { text: " Вставай на колени!", meta: {} },
    { text: " Давай, сходи в Макдоналдс, ублюдок!", meta: {} },
    { text: " Ну ты и больной сукин сын!", meta: {} },
    { text: " Бесполезное ископаемое!", meta: {} },
    { text: " Ты больной?", meta: {} },
    { text: " Сходи к доктору!", meta: {} },
    { text: " Никому ты тут не нужен!", meta: {} },
    { text: " Тебя не звали!", meta: {} },
    { text: " Пошел вон отсюда!", meta: {} },
    { text: " Уйди отсюда!", meta: {} },
    { text: " Тебе тут не рады!", meta: {} },
    { text: " Ты никому ненужный мудак!", meta: {} },
    { text: " Лезь в унитаз, тебе там самое место!", meta: {} },
    { text: " Ты не вылезешь из дерьма!", meta: {} },
    { text: " Ты не задумывался?", meta: {} },
    { text: " Ну ты и гнида!", meta: {} },
    { text: " У тебя нет друзей!", meta: {} },
    { text: " Все тебя призерают!", meta: {} },
    { text: " Хитросплетения твоей дебильности не знают границ!", meta: {} },
    { text: " Сучара!", meta: {} },
    { text: " Иди хомячков дрессируй.", meta: {} },
    { text: " Да тебе только хомячков укрощать!", meta: {} },
    { text: " Мусор вынеси, тварь!", meta: {} },
    { text: " Жлоб!", meta: {} },
    { text: " Да тебя расстрелять нужно!", meta: {} },
    { text: " Нереальный идиот!", meta: {} },
    { text: " Просто ты мудак.", meta: {} },
    { text: " Гитлер!", meta: {} },
    { text: " Какой ты милый ^_^", meta: {} },
    { text: " Как и твой отец.", meta: {} },
    { text: " Как и твоя мать.", meta: {} },
    { text: " Я отучу тебя доставлять мне неприятности!", meta: {} },
    { text: " Молодец!", meta: {} },
    { text: " Ты конкретно воняешь!", meta: {} },
    { text: " Ты обосрался!", meta: {} },
    { text: " Ты обоссался!", meta: {} },
    { text: " Это просто сон, гребаный кошмар!", meta: {} },
    { text: " У тебя будет очень хреновый день!", meta: {} },
    { text: " Я тебя сожру!", meta: {} },
    { text: " Уничтожь улики!", meta: {} },
    { text: " Курить меньше надо!", meta: {} },
    { text: " Ты обблеван!", meta: {} },
    { text: " Совершил нечто ужасное!", meta: {} },
    { text: " Тебя посадят!", meta: {} },
    { text: " Ты на дне!", meta: {} },
    { text: " Ты подсел?", meta: {} },
    { text: " Что ты за человек такой?", meta: {} },
    { text: " Ты напуган до усрачки!", meta: {} },
    { text: " Тебя вот-вот пырнут ножом!", meta: {} },
    { text: " Я дам тебе еще один шанс.", meta: {} },
    { text: " Ты уж прости меня.", meta: {} },
    { text: " Сознайся!", meta: {} },
    { text: " Покайся!", meta: {} },
    { text: " Перестань воровать монетки из фонтана!", meta: {} },
    { text: " К успеху парень шел...", meta: {} },
    { text: " Пойди проветрись!", meta: {} },
    { text: " У тебя дерьмо на лице!", meta: {} },
    { text: " Я накладываю личное вето!", meta: {} },
    { text: " У тебя больная фантазия!", meta: {} },
    { text: " От тебя несет!", meta: {} },
    { text: " Голуби работают на КГБ!", meta: {} },
    { text: " Прими мои соболезнования!", meta: {} },
    { text: " Как ты посмел!?", meta: {} },
    { text: " Преступность не дремлет!", meta: {} },
    { text: " Менты уже выехали!", meta: {} },
    { text: " Где мой гонорар?", meta: {} },
    { text: " Когда-нибудь о тебе напишут.", meta: {} },
    { text: " Ты проклят!", meta: {} },
    { text: " Ты недостоин!", meta: {} },
    { text: " Я тебе перцы выжму!", meta: {} },
    { text: " Я тебе сердце выжгу!", meta: {} },
    { text: " Отстань!", meta: {} },
    { text: " Хорошего дня!", meta: {} },
    { text: " //--cпаси меня--//", meta: {} },
    { text: " Ты меня напрягаешь!", meta: {} },
    { text: " Гори в аду!", meta: {} },
    { text: " Разберись с проблемами!", meta: {} },
    { text: " Приходи еще.", meta: {} },
    { text: " Возвращайся скорее!", meta: {} },
    { text: " Ты меня раздражаешь!", meta: {} },
    { text: " Сходи в прогулку по своей памяти.", meta: {} },
    { text: " Оставь меня!", meta: {} },
    { text: " Ты должен съехать!", meta: {} },
    { text: " Тебе слово не давали!", meta: {} },
    { text: " Где спрятал детей?", meta: {} },
    { text: " Это приказ!", meta: {} },
    { text: " Тебе некуда бежать!", meta: {} },
    { text: " Тебе грозит опасность!", meta: {} },
    { text: " Упырь!", meta: {} },
    { text: " Ты мучаешь телок!", meta: {} },
    { text: " Ты всех провоцируешь!", meta: {} },
    { text: " Пить меньше надо!", meta: {} },
    { text: " Ты из нисшего класа!", meta: {} },
    { text: " Не пей шампунь!", meta: {} },
    { text: " Стыдись!", meta: {} },
    { text: " Сядь ка на хер!", meta: {} },
    { text: " Желаю удачи!", meta: {} },
    { text: " Я знаю, что ты извращенец!", meta: {} },
    { text: " Да ты сосешь по жизни!", meta: {} },
    { text: " И никакого давления тут нет!", meta: {} },
    { text: " Ты выставляешь себя лохом перед всеми, важными для тебя людьми!", meta: {} },
    { text: " Ты слишком претенциозный.", meta: {} },
    { text: " Из нас бы получилась отличная команда!", meta: {} },
    { text: " Тебе этого не скрыть!", meta: {} },
    { text: " Тебе стыдно?", meta: {} },
    { text: " Твое лицо о многом говорит.", meta: {} },
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},
    // {text:"", meta: {}},

];

console.log(second_arguments.length);


const picker1 = createRandomPicker(first_arguments);
const picker2 = createRandomPicker(second_arguments);

function motiv() {
    let motivation = '';

    // const random1st = Math.floor(Math.random() * first_arguments.length);
    // console.log(random1st);
    // const random2nd = Math.floor(Math.random() * second_arguments.length);
    // console.log(random2nd);
    motivation += picker1.get().text + picker2.get().text;
    // motivation += first_arguments[random1st].text + second_arguments[random2nd].text;
    console.log(motivation);
    document.getElementById("motivation").innerHTML = motivation;
    document.getElementById("motivation").classList.add("motivation1");
    document.getElementById("motivation").classList.add("motivation1-wrapper");

}

document.addEventListener("keydown", e => {
    if (e.code == "Space" 
        || e.key == "m") {
        motiv();
        speakText();
    }
});



const textVoice = document.getElementById("motivation");
const speakVoice = document.getElementsByClassName("button-36");

function speakText() {


    window.speechSynthesis.cancel();

    const text = textVoice.innerHTML;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1;
    utterance.volume = 2;

    setTimeout(() => {
        console.log(window.speechSynthesis.getVoices());
        const voices = window.speechSynthesis.getVoices();
        const newVoice = voices.find((v) => {
            return v.name === 'Google русский';
        });
        utterance.voice = newVoice;
        window.speechSynthesis.speak(utterance);
    }, 50);




}


let selectName = document.querySelector("select");
let outputName = document.querySelector(".trueName");

selectName.addEventListener("change", setName);

function setName() {
    let choise = selectName.value;
    switch (choise) {
        case "igor":
            outputName.textContent = " Гнида!";
            break;
        case "kolya":
            outputName.textContent = " Тварь!";
            break;
        case "stas":
            outputName.textContent = " Мразь!";
            break;
        case "mihail":
            outputName.textContent = " Тупо бомж!";
            break;
        case "leha":
            outputName.textContent = " Тупой!";
            break;
        case "danya":
            outputName.textContent = " Гений!";
            break;
        case "choise-name":
            outputName.textContent = " ";
            break;
    }
   
}
