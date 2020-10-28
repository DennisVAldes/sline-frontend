export const sexTypes = ['Hombre', 'Mujer', 'Otro', 'Prefiero no decirlo'];

export const violenceTypes = ['Violencia física', 'Violencia psicológica', 'Violencia sexual', 'Violencia económica', 'Violencia patrimonial', 'Violencia social', 'Violencia vicaria'];

export const violenceTypesDefinitions = {
    'Violencia física': 'Se considera violencia física a todo acto en el que se inflige un daño físico a la víctima. Dicho daño puede ser temporal o permanente. Dentro de este tipo de violencia se incluyen golpes, heridas, fracturas, arañazos. Si bien en ocasiones se pueden llegar a trivializar o considerar que pueden producirse durante una discusión, empujones y zarandeos también entran dentro de la categoría de violencia física. Se pueden producir una incapacitación física debido a las consecuencias de las agresiones, e incluso según el nivel de daños causados puede llevar a la muerte.',
    'Violencia psicológica': 'Este tipo de violencia se caracteriza porque, si bien a nivel físico puede no existir una agresión, la víctima se ve humillada, minusvalorada y atacada psicológicamente. Dicho ataque puede ser directo y realizado activamente en forma de insultos y vejaciones o bien llevado a cabo de un modo más pasivo, desvalorizando a la pareja sin que ésta considere que está sufriendo un ataque. La violencia psicológica incluye la presencia de humillaciones, amenazas y coacciones (utilizándose en algunos casos la amenaza de agresión física a la víctima o a allegados), desprecio y desvalorización. También hacer que la persona se sienta indefensa, obligada a hacer determinadas acciones y dependiente del agresor, culpable de la situación de abuso y merecedora de un castigo.',
    'Violencia sexual': 'La violencia sexual se refiere concretamente a aquel tipo de situaciones en que una persona es forzada o coaccionada para llevar a cabo actividades de índole sexual en contra de su voluntad, o bien en que la sexualidad es limitada o impuesta por otra persona. No es necesario que exista penetración ni que se produzca el acto sexual. Incluye la presencia de violaciones dentro de la pareja, la prostitución forzada, forzar la concepción o el aborto, mutilaciones genitales, acoso sexual o tocamientos indeseados entre otros.',
    'Violencia económica': 'Este tipo de violencia se basa en la reducción y privación de recursos económicos a la pareja o su prole como medida de coacción, manipulación o con la intención de dañar su integridad. También se considera como tal el hecho de obligar a depender económicamente del agresor, impidiendo el acceso de la víctima al mercado laboral mediante amenaza, coacción o restricción física.',
    'Violencia patrimonial': 'Se considera violencia patrimonial la usurpación o destrucción de objetos, bienes y propiedades de la persona víctima de violencia con intención de dominarla o producirle un daño psicológico. En muchos sentidos, estos bienes son el fruto de décadas de trabajo, y destruirlos es una manera de hacer ver que todos esos esfuerzos no han servido de nada.',
    'Violencia social': 'La violencia social se basa en la limitación, control y la inducción al aislamiento social de la persona. Se separa a la víctima de familia y amigos, privándola de apoyo social y alejándola de su entorno habitual. En ocasiones se pone a la víctima en contra de su entorno, produciendo que o víctima o entorno decidan desvincularse.',
    'Violencia vicaria': 'Un gran número de parejas en las que se produce violencia de género tienen hijos. En muchas ocasiones el agresor decide amenazar, agredir e incluso matar a dichos hijos con el propósito de dañar a su pareja o ex-pareja. Este tipo de violencia es denominada violencia vicaria, que también incluye el daño causado a los menores por la observación de malos tratos entre los progenitores. El impacto psicológico es lo que se busca, a través del control, el sometimiento y las agresiones a personas que no están directamente involucradas en el núcleo del conflicto.'
}

export const userProfile = (sexo: string) => {
    let out: string;

    if(sexo === 'Hombre'){
        out = 'https://res.cloudinary.com/sline-uy/image/upload/v1602080778/male-profile.png';
    } else if(sexo === 'Mujer'){
        out = 'https://res.cloudinary.com/sline-uy/image/upload/v1602080775/female-profile.png'
    } else if(sexo === 'Otro' || 'Prefiero no decirlo'){
        out = 'https://res.cloudinary.com/sline-uy/image/upload/v1602080775/general-profile.png';
    }

    return out;
}