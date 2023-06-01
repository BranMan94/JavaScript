let signoZodiacal = prompt("Ingresa tu signo Zodiacal");

switch(signoZodiacal) {

    //para jugar con nuestros casos, el tipo de dato debe coincidir para que se ejecute correctamente
    case "Aries":
        console.log("Aries (21 de marzo - 19 de abril): Aries es conocido por ser un signo lleno de energía y entusiasmo. Son líderes naturales y están llenos de determinación. Les gusta asumir desafíos y son valientes en la búsqueda de sus metas.");
        break;

    case "Tauro":
        console.log("Tauro (20 de abril - 20 de mayo): Los tauro son personas estables y prácticas. Son conocidos por su paciencia y su capacidad para mantenerse firmes en sus convicciones. Los tauro también tienen un gran aprecio por el placer y disfrutan de los placeres sensoriales de la vida.");
        break;
    
    case "Geminis":
        console.log("Géminis (21 de mayo - 20 de junio): Géminis es un signo muy versátil y adaptable. Son conocidos por su habilidad para comunicarse y su curiosidad innata. Los geminianos tienen una mente ágil y pueden adaptarse rápidamente a diversas situaciones.");
        break;

    case "Cancer":
        console.log("Cáncer (21 de junio - 22 de julio): Los cáncer son emocionales y sensibles. Tienen una fuerte intuición y un profundo sentido de la empatía. Los cáncer también son conocidos por su lealtad y su fuerte conexión con la familia y el hogar.");
        break;

    case "Leo":
        console.log("Leo (23 de julio - 22 de agosto): Los leones son líderes carismáticos y seguros de sí mismos. Son conocidos por su creatividad y su fuerte personalidad. Los leos también tienen una gran generosidad y son leales a quienes les importan.");
        break;

    case "Virgo":
        console.log("Virgo (23 de agosto - 22 de septiembre): Los virgo son perfeccionistas y analíticos. Son detallistas y metódicos en su enfoque hacia la vida. Los virgo también tienen una mente práctica y son expertos en resolver problemas.");
            break;
    
    case "Libra":
        console.log("Libra (23 de septiembre - 22 de octubre): Los libra son amantes de la paz y la armonía. Son conocidos por su naturaleza equilibrada y su sentido de la justicia. Los libra valoran las relaciones y buscan el equilibrio en todas las áreas de su vida.");
            break;
        
    case "Escorpio":
        console.log("Escorpio (23 de octubre - 21 de noviembre): Los escorpio son apasionados e intensos. Son conocidos por su determinación y su capacidad para enfrentar desafíos. Los escorpio también tienen una gran intuición y una profunda necesidad de conectar emocionalmente con los demás.");
            break;
    
    case "Sagitario":
        console.log("Sagitario (22 de noviembre - 21 de diciembre): Los sagitario son aventureros y optimistas. Les encanta la libertad y explorar nuevos horizontes. Los sagitario también son conocidos por su sinceridad y su sentido del humor.");
        break;
    
    case "Capricornio":
        console.log("Capricornio (22 de diciembre - 19 de enero): Los capricornio son ambiciosos y disciplinados. Son conocidos por su enfoque en el logro de metas a largo plazo. Los capricornio también tienen una gran resistencia y son excelentes para superar obstáculos.");
            break;

    case "Acuario":
        console.log("Acuario (20 de enero - 18 de febrero): Los acuario son originales y visionarios. Son conocidos por su pensamiento innovador y su espíritu humanitario. Los acuario también valoran la independencia y la igualdad.");
            break;
    
    case "Piscis":
        console.log("Piscis (19 de febrero - 20 de marzo): Los piscis son emocionales y compasivos. Son conocidos por su imaginación y su sensibilidad. Los piscis también tienen una gran intuición y una conexión profunda con el mundo espiritual.");
            break;

    default:
        console.log("Que? Eres de otro dimension o que?");
}