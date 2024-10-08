const questions_qpcr = [
    {
        question: "מהו ההבדל העיקרי בין qPCR לבין PCR מסורתי?",
        answers: ["qPCR איטי יותר אך מדויק יותר", "qPCR מאפשר מעקב בזמן אמת אחר הגברת DNA", "qPCR אינו דורש אנזימים", "qPCR משתמש ב-RNA במקום DNA"],
        correct: 1
    },
    {
        question: "מה המשמעות של qPCR?",
        answers: ["Quick Polymerase Chain Reaction", "Quantitative Polymerase Chain Reaction", "Qualitative Polymerase Chain Reaction", "Quasi Polymerase Chain Reaction"],
        correct: 1
    },
    {
        question: "מהו יישום נפוץ של qPCR?",
        answers: ["זיהוי מוטציות ב-DNA", "מדידת רמות ביטוי גנים", "ריצוף גנומים שלמים", "יצירת טביעות אצבע גנטיות"],
        correct: 1
    },
    {
        question: "מהו תפקידו של הצבע SYBR Green ב-qPCR?",
        answers: ["מסמן את תחילת התגובה", "מעכב את התגובה", "נקשר ל-DNA דו-גדילי וזורח", "מגביר את ה-DNA"],
        correct: 2
    },
    {
        question: "כיצד TaqMan שונה מ-SYBR Green ב-qPCR?",
        answers: ["TaqMan משתמש בגלאי ספציפי לרצף ה-DNA המטרה", "TaqMan עובד רק עם RNA", "TaqMan דורש יותר מחזורים", "TaqMan משמש לאחר תגובת ה-PCR"],
        correct: 0
    },
    {
        question: "מהו ערך Ct ב-qPCR?",
        answers: ["סף המחזור שבו הפלואורסצנציה עוברת את רמת הרקע", "הריכוז ההתחלתי של ה-DNA המטרה", "מספר המחזורים שהושלמו בתגובה", "הזמן שלוקח להגיע לפלואורסצנציה מרבית"],
        correct: 0
    },
    {
        question: "מדוע משתמשים באנזים מתעתק במהופך ב-qPCR?",
        answers: ["להגביר DNA", "להמיר RNA ל-cDNA", "לעכב תגובות לא רצויות", "לפרק RNA"],
        correct: 1
    },
    {
        question: "מהי המשמעות של שימוש בגן מנרמל בניסויי qPCR?",
        answers: ["מאיץ את התגובה", "מנרמל נתונים כדי לחשב שינויים בכמות הדגימה ולהבטיח כימות מדויק", "מגביר את הפלואורסצנציה", "מזהה מזהמים"],
        correct: 1
    },
    {
        question: "איזה שלב ב-qPCR כולל הפרדת גדילי ה-DNA?",
        answers: ["דנטורציה", "היצמדות", "הארכה", "זיהוי פלואורסצנטי"],
        correct: 0
    },
    {
        question: "למה מתייחס המונח 'בזמן אמת' ב-qPCR?",
        answers: ["התגובה מתבצעת מידית", "הגברת ה-DNA ניתנת למעקב במהלך התגובה", "התוצאות מנותחות ידנית", "כל התהליך ממוכן"],
        correct: 1
    },
    {
        question: "איזה מהבאים אינו שימוש טיפוסי ב-qPCR?",
        answers: ["ריצוף גנום שלם", "כימות ביטוי גנים", "זיהוי פתוגנים", "מדידת וריאציות במספר העותקים של DNA"],
        correct: 0
    },
    {
        question: "מה קורה אם לא נמדדת פלואורסצנציה ב-qPCR?",
        answers: ["ה-DNA הוגבר במלואו", "ייתכן שהרצף המטרה אינו נוכח, או שהתוצאה נכשלה", "התגובה הושלמה", "הדגימה מכילה מעכבים"],
        correct: 1
    },
    {
        question: "מה מציין ערך Ct מוקדם יותר ב-qPCR?",
        answers: ["ריכוז התחלתי גבוה יותר של ה-DNA המטרה", "ריכוז התחלתי נמוך יותר של ה-DNA המטרה", "תגובה איטית יותר", "הגברה פחות יעילה"],
        correct: 0
    },
    {
        question: "מהי מטרת שלב ההיצמדות ב-qPCR?",
        answers: ["לקשור את הצבע הפלואורסצנטי ל-DNA", "להפריד את גדילי ה-DNA", "להשלים את סינתזת ה-DNA", "להצמיד תחלים לרצף ה-DNA המטרה"],
        correct: 3
    },
    {
        question: "מהו תפקידו של האנזים Taq פולימראז ב-qPCR?",
        answers: ["להפריד את גדילי ה-DNA", "לסנתז גדילי DNA חדשים", "לפרק RNA", "להקשר ל-DNA דו-גדילי"],
        correct: 1
    }
];

const questions_ner = [
            {
                question: "מהו המנגנון העיקרי להסרת נזקים נפחיים ב-DNA?",
                answers: ["BER", "NER", "MMR", "NHEJ"],
                correct: 1
            },
            {
                question: "מהם שני תתי המסלולים העיקריים של מנגנון התיקון NER?",
                answers: ["תיקון תלוי תעתוק ותיקון גלובלי של הגנום", "תיקון תלוי שכפול ותיקון מקומי", "תיקון ישיר ותיקון עקיף", "תיקון מהיר ותיקון איטי"],
                correct: 0
            },
            {
                question: "איזה חלבון מזהה את הנזק במסלול GG-NER?",
                answers: ["CSB", "UVSSA", "XPC", "RNA פולימראז"],
                correct: 2
            },
            {
                question: "מהו השם של הקומפלקס הגדול שמגויס לאחר זיהוי הנזק בשני תתי המסלולים?",
                answers: ["NER", "TFIIH", "XPC", "RPA"],
                correct: 1
            },
            {
                question: "אילו חלבונים מבצעים את החיתוך הכפול בצדדי הנזק?",
                answers: ["XPA ו-RPA", "XPC ו-DDB", "XPG ו-XPF", "CSB ו-UVSSA"],
                correct: 2
            },
            {
                question: "מהי המחלה הקשורה למוטציות בחלבוני התיקון בתת המסלול GG-NER?",
                answers: ["תסמונת על שם קוקיין", "קסרודרמה פיגמנטוזום", "סינדרום רגישות ל-UV", "אנמיה חרמשית"],
                correct: 1
            },
            {
                question: "מהם התסמינים העיקריים של חולים בתסמונת על שם קוקיין (CS)?",
                answers: ["רגישות גבוהה לקרינת שמש וסיכון מוגבר לסרטן", "עיכוב התפתחותי ומחלת פרוגריה", "רגישות מוגברת אך בינונית לאור שמש", "אין תסמינים מיוחדים"],
                correct: 1
            },
            {
                question: "מה מפריע לגישה של אנזימי תיקון אל הנזק ב-DNA?",
                answers: ["נוקלאוזומים", "רנ\"א פולימראזות", "דנ\"א פולימראזות", "חלבוני TFIIH"],
                correct: 0
            },
            {
                question: "באילו אזורים בגנום נמדד תיקון מוגבר ויעיל יותר?",
                answers: ["אזורים לא מתועתקים", "אזורים פעילים בהם מתרחש תעתוק", "אזורים עם ריכוז גבוה של נוקלאוזומים", "אזורים טלומריים"],
                correct: 1
            },
            {
                question: "מה קורה כאשר נזקים ב-DNA לא מתוקנים?",
                answers: ["הם נעלמים מעצמם", "הם גורמים להיווצרות מוטציות", "הם מגבירים את קצב התעתוק", "הם מעכבים את חלוקת התא"],
                correct: 1
            },
            {
                question: "מהו המנגנון של תיקון תלוי תעתוק (TC-NER)?",
                answers: ["זיהוי נזקים על ידי XPC", "זיהוי נזקים כאשר רנ\"א פולימראז נתקע בהם", "תיקון נזקים רק בגנים מתועתקים", "תיקון נזקים רק בזמן חלוקת התא"],
                correct: 1
            },
            {
                question: "אילו חלבונים מעורבים בזיהוי הנזק במסלול ה-TC-NER?",
                answers: ["XPC ו-DDB", "XPG ו-XPF", "CSB, CSA ו-UVSSA", "TFIIH ו-RPA"],
                correct: 2
            },
            {
                question: "מה הוא אורך המקטע שמוסר מה-DNA במהלך תיקון NER בתאי אדם?",
                answers: ["12-13 נוקלאוטידים", "20-22 נוקלאוטידים", "27-30 נוקלאוטידים", "40-50 נוקלאוטידים"],
                correct: 2
            },
            {
                question: "מהו ההבדל העיקרי בין מנגנון ה-NER בחיידקים ובבני אדם?",
                answers: ["אין הבדל משמעותי", "בחיידקים יש רק GG-NER", "בבני אדם יש יותר חלבונים מעורבים", "בחיידקים התיקון מהיר יותר"],
                correct: 2
            },
            {
                question: "מה מהבאים הוא תפקיד חשוב של מנגנוני תיקון DNA?",
                answers: ["הגברת קצב המוטציות", "שמירה על יציבות הגנום", "האצת הזדקנות התאים", "עיכוב חלוקת תאים"],
                correct: 1
            }
];

       