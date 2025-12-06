// ==================== DATOS DEL MENÚ CON IMÁGENES ACTUALIZADAS ====================
// NOTA: He reemplazado las URLs rotas con "placeholders" dinámicos que muestran el nombre.
// Cuando tengas tus fotos reales, reemplaza la URL por la ruta local, ej: "img/taco-pastor.jpg"

const menuData = {
    tacos: {
        title: "Tacos y Antojitos",
        tagline: "Tortillas hechas al momento, carnes al carbón y salsas molcajeteadas todos los días.",
        image: "img/taco-tradicional.JPG", 
        accent: "#f26d21",
        items: [
            {
                id: "taco-tradicional",
                name: "Taco Tradicional",
                price: "$15 c/u",
                priceNote: "Incluye cualquiera de nuestras proteínas clásicas.",
                description: "Doble tortilla de maíz nixtamalizado, cebolla blanca, cilantro y limón. El taco que nos dio fama en Veracruz.",
                image: "img/taco-tradicional.JPG",
                badges: ["Favorito de la casa"],
                highlights: ["Tortillas hechas a mano", "Salsas verde, roja y habanero"],
                options: [
                    {
                        label: "Proteína clásica",
                        description: "Todas al mismo precio, pide tu combinación favorita.",
                        type: "radio",
                        choices: [
                            { value: "Suadero" },
                            { value: "Pastor" },
                            { value: "Longaniza" },
                            { value: "Cabeza" },
                            { value: "Ojo" },
                            { value: "Cachete" },
                            { value: "Trompa" },
                            { value: "Maciza" },
                            { value: "Molleja" },
                            { value: "Surtida" }
                        ]
                    }
                ]
            },
            {
                id: "taco-tripa",
                name: "Taco de Tripa Dorada",
                price: "$20 c/u",
                description: "Tripa dorada al punto exacto, crujiente por fuera y jugosa por dentro, servida con cebolla cambray y limón.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Taco+de+Tripa",
                highlights: ["Se prepara al momento", "Incluye chile de árbol tatemado"]
            },
            {
                id: "taco-aguacate",
                name: "Taco con Aguacate",
                price: "$18 c/u",
                priceNote: "Precio especial con cualquiera de nuestras proteínas clásicas.",
                description: "Taco suave coronado con rebanadas de aguacate Hass y sal de mar. Ideal para equilibrar el picante.",
                image: "https://placehold.co/600x400/e8f5e9/2e7d32?text=Taco+con+Aguacate",
                options: [
                    {
                        label: "Proteína",
                        description: "Selecciona tu carne favorita, el aguacate va por nuestra cuenta.",
                        type: "radio",
                        choices: [
                            { value: "Suadero" },
                            { value: "Pastor" },
                            { value: "Longaniza" },
                            { value: "Cabeza" },
                            { value: "Maciza" },
                            { value: "Molleja" },
                            { value: "Surtida" }
                        ]
                    }
                ]
            },
            {
                id: "taco-lengua",
                name: "Taco de Lengua",
                price: "$30 c/u",
                description: "Lengua de res cocinada lentamente en su propio caldo, sellada a la plancha y terminada con perejil y cebolla.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Taco+de+Lengua",
                highlights: ["Disponible todos los días", "Servido con salsa tatemada"]
            },
            {
                id: "taco-sesos",
                name: "Taco de Sesos",
                price: "$45 c/u",
                description: "Sesos de res ligeramente capeados, bañados en mantequilla clarificada y cebolla caramelizada.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Taco+de+Sesos"
            },
            {
                id: "taco-trozo",
                name: "Taco en Trozo",
                price: "$45 c/u",
                description: "Cortes gruesos de carne marinada al carbón, servidos en tortilla dorada al comal con nopales asados.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Taco+en+Trozo",
                highlights: ["Hecho con bistec y costilla", "Ideal para compartir"]
            },
            {
                id: "volcan-suadero-pastor",
                name: "Volcán de Queso",
                price: "$45",
                priceNote: "Elige suadero o pastor.",
                description: "Tortilla dorada y crujiente con queso asadero gratinado. El volcán que siempre explota de sabor.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Volcan+de+Queso",
                options: [
                    {
                        label: "Proteína",
                        type: "radio",
                        choices: [
                            { value: "Suadero" },
                            { value: "Pastor" }
                        ]
                    }
                ]
            }
        ]
    },
    tortas: {
        title: "Tortas al Carbón",
        tagline: "Bolillo artesanal, frijoles refritos y carnes jugosas con queso manchego gratinado.",
        image: "img/tortas-gigantes.png",
        accent: "#d94f30",
        items: [
            {
                id: "torta-suadero",
                name: "Torta de Suadero",
                price: "$70",
                description: "Bolillo dorado con suadero caramelizado, cebolla salteada, queso Oaxaca y aguacate.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Torta+de+Suadero",
                highlights: ["Incluye papas en gajo"]
            },
            {
                id: "torta-pastor",
                name: "Torta de Pastor",
                price: "$70",
                description: "Pastor al trompo con piña rostizada, cebolla morada y queso manchego gratinado.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Torta+de+Pastor"
            },
            {
                id: "torta-campechana",
                name: "Torta Campechana",
                price: "$70",
                description: "Combinación de carnes a la plancha con salsa chipotle cremosa y verdura fresca.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Torta+Campechana"
            },
            {
                id: "torta-chuleta",
                name: "Torta de Chuleta",
                price: "$70",
                description: "Chuleta ahumada, queso panela sellado y frijoles refritos caseros.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Torta+de+Chuleta"
            },
            {
                id: "torta-con-queso",
                name: "Torta con Queso",
                price: "$80",
                priceNote: "Escoge tu carne favorita.",
                description: "Queso Oaxaca fundido con tu proteína preferida, bañado en nuestra salsa de jitomate tatemado.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Torta+con+Queso",
                options: [
                    {
                        label: "Carne",
                        type: "radio",
                        choices: [
                            { value: "Suadero" },
                            { value: "Pastor" },
                            { value: "Campechana" },
                            { value: "Chuleta" }
                        ]
                    }
                ]
            },
            {
                id: "torta-bistec-pollo-arrachera",
                name: "Torta Bistec, Pollo y Arrachera",
                price: "$90",
                description: "Nuestra torta más contundente: tres carnes premium con queso manchego, aguacate y tocino.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Torta+3+Carnes",
                highlights: ["Incluye papas fritas", "Ideal para compartir"]
            }
        ]
    },
    especialidades: {
        title: "Especialidades de la Casa",
        tagline: "Platos fuertes para sentarse con calma y disfrutar del sabor a brasas.",
        image: "img/costilla-asada.JPG",
        accent: "#b8342b",
        items: [
            {
                id: "pozole-rojo",
                name: "Pozole Rojo",
                price: "$80 - $100",
                priceNote: "Miércoles 3 x 2 en ambos tamaños.",
                description: "Caldo rojo con maíz cacahuazintle y carne de cerdo deshebrada. Servido con lechuga, rábano, cebolla y orégano.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Pozole+Rojo",
                highlights: ["Incluye tostadas y crema"],
                options: [
                    {
                        label: "Tamaño",
                        type: "radio",
                        choices: [
                            { value: "Chico", price: "$80" },
                            { value: "Grande", price: "$100" }
                        ]
                    }
                ]
            },
            {
                id: "arrachera-200",
                name: "Arrachera 200 g",
                price: "$200",
                description: "Corte premium marinado 24 horas, sellado a la parrilla y acompañado con aguacate, frijoles charros y nopal asado.",
                image: "https://placehold.co/600x400/e0f7fa/006064?text=Arrachera+Premium"
            },
            {
                id: "chilaquiles-carne-asada",
                name: "Chilaquiles con Carne Asada",
                price: "$160",
                description: "Totopos bañados en salsa verde cremosa, carne asada al carbón, queso fresco, crema y aguacate.",
                image: "https://placehold.co/600x400/e8f5e9/2e7d32?text=Chilaquiles+Verdes"
            },
            {
                id: "enfrijoladas",
                name: "Enfrijoladas",
                price: "$150",
                description: "Tortillas sumergidas en salsa de frijol negro, rellenas de pollo y cubiertas con crema, queso y cebolla.",
                image: "https://placehold.co/600x400/e0f7fa/006064?text=Enfrijoladas"
            },
            {
                id: "costilla-200",
                name: "Costilla 200 g",
                price: "$200",
                description: "Costilla de res ahumada lentamente, terminada a la parrilla y acompañada de nopales y guacamole.",
                image: "img/costilla-asada.JPG",
            },
            {
                id: "enchiladas-suizas",
                name: "Enchiladas Suizas",
                price: "$200",
                description: "Tortillas rellenas de pollo, bañadas en salsa verde cremosa y gratinadas con queso manchego.",
                image: "img/enchiladas-suizas.JPG",
            },
            {
                id: "pechuga-pollo",
                name: "Pechuga de Pollo Asada o Adobada",
                price: "$200",
                description: "Pechuga sellada a la plancha con tu adobo favorito, servida con ensalada de nopal y arroz rojo.",
                image: "img/pechuga-asada.JPG",
            },
            {
                id: "dorados-pastor",
                name: "Orden de Dorados de Pastor",
                price: "$120",
                description: "Cuatro tacos dorados rellenos de pastor, servidos con lechuga, crema, queso y salsa martajada.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Tacos+Dorados"
            },
            {
                id: "burritos",
                name: "Burritos del Castillo",
                price: "$110",
                priceNote: "Arrachera, bistec o pollo. Pastor +$20.",
                description: "Tortilla de harina rellena de arroz, frijoles refritos, queso y la proteína de tu elección.",
                image: "https://placehold.co/600x400/fff3e0/e65100?text=Burrito+Castillo",
                options: [
                    {
                        label: "Relleno",
                        type: "radio",
                        choices: [
                            { value: "Arrachera" },
                            { value: "Bistec" },
                            { value: "Pollo" },
                            { value: "Pastor", note: "+$20" }
                        ]
                    }
                ]
            },
            {
                id: "orden-pastor-kilo",
                name: "Orden de Pastor por Kilo",
                price: "$400",
                description: "1 kg de pastor al trompo con piña, cebolla, cilantro, nopal asado, cebollitas y tortillas.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=1KG+Pastor"
            },
            {
                id: "orden-suadero-kilo",
                name: "Orden de Suadero por Kilo",
                price: "$440",
                description: "1 kg de suadero suave con todos los complementos: nopales, cebollitas, tortillas y salsas.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=1KG+Suadero"
            }
        ]
    },
    parrilla: {
        title: "Parrilla y Alambres",
        tagline: "Carnes al carbón, queso fundido y verdura salteada servida al centro para compartir.",
        image: "img/alambre-bistec.JPG",
        accent: "#f2910a",
        items: [
            {
                id: "alambre-bistec",
                name: "Alambre de Bistec",
                price: "$220",
                description: "Bistec en tiras, pimientos, cebolla y queso gratinado servidos con tortillas de maíz.",
                image: "img/alambre-bistec.JPG",
            },
            {
                id: "alambre-pastor",
                name: "Alambre de Pastor",
                price: "$220",
                description: "Pastor al trompo, piña y queso fundido. Dulce, salado y ligeramente picante.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Alambre+Pastor"
            },
            {
                id: "alambre-chuleta",
                name: "Alambre de Chuleta",
                price: "$220",
                description: "Chuleta ahumada con pimiento verde, tocino y queso manchego.",
                image: "https://placehold.co/600x400/e0f2f1/004d40?text=Alambre+Chuleta"
            },
            {
                id: "alambre-hawaiano",
                name: "Alambre Hawaiano",
                price: "$220",
                description: "Pastor, piña caramelizada, tocino y queso derretido. El balance perfecto entre dulce y salado.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Alambre+Hawaiano"
            },
            {
                id: "alambre-campechano",
                name: "Alambre Campechano",
                price: "$250",
                description: "Bistec, longaniza y chorizo fundidos con queso Oaxaca y chile cuaresmeño.",
                image: "https://placehold.co/600x400/e0f2f1/004d40?text=Alambre+Campechano"
            },
            {
                id: "alambre-suadero",
                name: "Alambre de Suadero",
                price: "$250",
                description: "Suadero dorado con cebolla blanca, cilantro y queso asadero fundido.",
                image: "https://placehold.co/600x400/fff0e6/d94f30?text=Alambre+Suadero"
            },
            {
                id: "alambre-pollo",
                name: "Alambre de Pechuga",
                price: "$250",
                description: "Pechuga de pollo marinada en cítricos con verduras salteadas y queso manchego.",
                image: "https://placehold.co/600x400/fff3e0/e65100?text=Alambre+Pollo"
            },
            {
                id: "alambre-arrachera",
                name: "Alambre de Arrachera",
                price: "$280",
                description: "Arrachera premium en cubos, pimientos y queso fundido. El favorito para compartir.",
                image: "https://placehold.co/600x400/e0f2f1/004d40?text=Alambre+Arrachera"
            },
            {
                id: "alambre-especial",
                name: "Alambre Especial",
                price: "$300",
                description: "Bistec, pollo y arrachera en una sola orden con queso gratinado y tocino.",
                image: "https://placehold.co/600x400/e0f2f1/004d40?text=Alambre+Especial"
            },
            {
                id: "medio-alambre",
                name: "Medio Alambre",
                price: "$120",
                priceNote: "Porción individual con tortillas incluidas.",
                description: "La versión personal de nuestros alambres clásicos, ideal para antojo nocturno.",
                image: "https://placehold.co/600x400/e0f2f1/004d40?text=Medio+Alambre"
            },
            {
                id: "fajitas",
                name: "Fajitas de Pollo o Res",
                price: "$150",
                description: "Fajitas estilo norteño con champiñón, morrón y cebolla. Elige pollo o res.",
                image: "https://placehold.co/600x400/e0f2f1/004d40?text=Fajitas"
            },
            {
                id: "tacos-harina",
                name: "Tacos con Tortilla de Harina o Maíz",
                price: "$45 - $50",
                priceNote: "Con queso +$5.",
                description: "Nuestro alambre favorito dentro de tortilla grande. Perfecto para cenar.",
                image: "img/taco-harina.JPG",
            },
            {
                id: "sincronizada",
                name: "Sincronizada",
                price: "$65",
                description: "Dos tortillas de harina con jamón de pierna, queso manchego y pico de gallo.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Sincronizada"
            },
            {
                id: "gringa",
                name: "Gringa",
                price: "$80",
                description: "Tortilla de harina rellena de pastor y queso fundido, sellada a la plancha.",
                image: "img/gringa.JPG",
            },
            {
                id: "gringa-arrachera",
                name: "Gringa de Arrachera",
                price: "$100",
                description: "La versión premium con arrachera y queso manchego.",
                image: "https://placehold.co/600x400/fff3e0/e65100?text=Gringa+Arrachera"
            },
            {
                id: "costra-bistec",
                name: "Costra de Bistec",
                price: "$100",
                description: "Costra crujiente de queso con bistec al interior y tortillas de maíz.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Costra+Bistec"
            },
            {
                id: "costra-arrachera",
                name: "Costra de Arrachera",
                price: "$120",
                description: "Costra dorada rellena de arrachera y queso derretido.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Costra+Arrachera"
            }
        ]
    },
    quesos: {
        title: "Quesos y Entradas",
        tagline: "Para abrir apetito o compartir al centro de la mesa.",
        image: "img/choriqueso.JPG",
        accent: "#f2b035",
        items: [
            {
                id: "queso-fundido",
                name: "Queso Fundido",
                price: "$80",
                description: "Queso Oaxaca derretido con chiles toreados y tortillas de harina.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Queso+Fundido"
            },
            {
                id: "queshongo",
                name: "Queshongo",
                price: "$90",
                description: "Quesadilla enorme rellena de hongos silvestres y queso derretido.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Queshongo"
            },
            {
                id: "choriqueso",
                name: "Choriqueso",
                price: "$90",
                description: "Queso fundido con chorizo artesanal y toque de chile guajillo.",
                image: "img/choriqueso.JPG",
            },
            {
                id: "queso-argentino",
                name: "Queso Argentino",
                price: "$90",
                description: "Provoleta inspirada en la parrilla argentina con salsa chimichurri.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Queso+Argentino"
            },
            {
                id: "frijoles-charros",
                name: "Frijoles Charros",
                price: "$55",
                description: "Frijoles de la olla con tocino, chorizo y chile serrano.",
                image: "https://placehold.co/600x400/5d4037/ffffff?text=Frijoles+Charros"
            },
            {
                id: "molletes",
                name: "Orden de Molletes",
                price: "$90",
                description: "Bolillo al horno con frijol refrito, queso gratinado y pico de gallo.",
                image: "img/molletes.JPG",
            },
            {
                id: "croissant-jamon-queso",
                name: "Croissant Jamón y Queso",
                price: "$40",
                description: "Croissant caliente con jamón ahumado y queso manchego.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Croissant"
            },
            {
                id: "cebollitas",
                name: "Orden de Cebollitas",
                price: "$15",
                description: "Cebollitas cambray asadas con limón y sal de grano.",
                image: "https://placehold.co/600x400/e8f5e9/2e7d32?text=Cebollitas"
            },
            {
                id: "tortillas-extra",
                name: "Orden Extra de Tortillas",
                price: "$15",
                description: "Tortillas de maíz hechas a mano, recién salidas del comal.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Tortillas+Mano"
            }
        ]
    },
    bebidas: {
        title: "Bebidas y Antojitos Dulces",
        tagline: "Refresca el paladar o acompaña tu taquiza con algo especial.",
        image: "img/bebidas-frias.png",
        accent: "#0d3b66",
        items: [
            {
                id: "aguas-frescas",
                name: "Aguas Frescas",
                price: "$25 - $55",
                priceNote: "Jamaica, tamarindo y horchata.",
                description: "Aguas frescas preparadas al momento con fruta natural y piloncillo.",
                image: "https://placehold.co/600x400/fce4ec/c2185b?text=Agua+de+Jamaica"
            },
            {
                id: "cafe-olla",
                name: "Café de Olla",
                price: "$22",
                description: "Café veracruzano con canela, piloncillo y un toque de naranja.",
                image: "https://placehold.co/600x400/5d4037/ffffff?text=Cafe+de+Olla"
            },
            {
                id: "cafe-leche",
                name: "Café con Leche",
                price: "$27",
                description: "Café espresso con leche vaporizada y espuma ligera.",
                image: "https://placehold.co/600x400/d7ccc8/5d4037?text=Cafe+con+Leche"
            },
            {
                id: "pan-casa",
                name: "Pan de la Casa",
                price: "$25",
                description: "Pan dulce artesanal horneado todas las tardes.",
                image: "https://placehold.co/600x400/fff3e0/e65100?text=Pan+Dulce"
            },
            {
                id: "refresco-botella",
                name: "Refresco de Sabor / Coca Cola",
                price: "$27",
                description: "Refrescos embotellados bien fríos para acompañar tus tacos.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Refrescos"
            },
            {
                id: "del-valle",
                name: "Del Valle (Mango o Guayaba)",
                price: "$27",
                description: "Jugos Del Valle embotellados. Dulces, frescos y perfectos para los pequeños.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Jugo+Del+Valle"
            },
            {
                id: "agua-600",
                name: "Agua 600 ml",
                price: "$20",
                description: "Agua natural fría.",
                image: "https://placehold.co/600x400/e3f2fd/1565c0?text=Agua+Natural"
            },
            {
                id: "cervezas",
                name: "Cervezas",
                price: "$35 - $45",
                description: "Selección de cervezas heladas servidas en tarro escarchado.",
                image: "https://placehold.co/600x400/fff8e1/fbc02d?text=Cerveza+Fria"
            },
            {
                id: "michelada",
                name: "Michelada",
                price: "+$10",
                description: "Prepara tu cerveza con mezcla especial de limón, salsas y escarchado de chile.",
                image: "https://placehold.co/600x400/ffebee/c62828?text=Michelada"
            }
        ]
    }
};

// Iconos para cada categoría (usando FontAwesome 6)
const categoryIcons = {
    tacos: 'fa-utensils',
    tortas: 'fa-hamburger',
    especialidades: 'fa-star',
    parrilla: 'fa-fire',
    quesos: 'fa-cheese',
    bebidas: 'fa-glass-cheers'
};

// ==================== ESTADO GLOBAL ====================
let currentCategory = 'tacos';
let currentSlide = 0;

// ==================== RENDER DE TARJETAS ====================
function createMenuCard(categoryKey, item) {
    const badges = item.badges && item.badges.length
        ? `<span class="menu-card-badge">${item.badges[0]}</span>`
        : '';

    const priceNote = item.priceNote
        ? `<p class="menu-card-note">${item.priceNote}</p>`
        : '';

    return `
        <article class="menu-card" data-category="${categoryKey}" data-item="${item.id}">
            <div class="menu-card-image">
                <img src="${item.image}" 
                     onerror="this.src='https://placehold.co/600x400/eee/333?text=Sin+Foto'" 
                     alt="${item.name}">
                ${badges}
            </div>
            <div class="menu-card-body">
                <div class="menu-card-header">
                    <h3>${item.name}</h3>
                    <span class="menu-card-price">${item.price}</span>
                </div>
                <p class="menu-card-description">${item.description}</p>
                ${priceNote}
                <button class="menu-card-button" data-category="${categoryKey}" data-item="${item.id}">
                    Ver detalle
                </button>
            </div>
        </article>
    `;
}

// ==================== CARRUSEL ====================
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.getElementById('carouselDots');

    track.innerHTML = '';
    dots.innerHTML = '';

    Object.keys(menuData).forEach((key, index) => {
        const category = menuData[key];

        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${category.image}" alt="${category.title}">
            <div class="carousel-overlay">
                <h3>${category.title}</h3>
                ${category.tagline ? `<p>${category.tagline}</p>` : ''}
            </div>
        `;
        slide.addEventListener('click', () => {
            currentCategory = key;
            renderNavigation();
            renderMenu();
            const nav = document.querySelector('nav');
            if(nav) {
               window.scrollTo({ top: nav.offsetTop, behavior: 'smooth' });
            }
        });
        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    updateCarouselPosition();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const track = document.getElementById('carouselTrack');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });
}

// ==================== NAVEGACIÓN (Píldoras con Iconos) ====================
function renderNavigation() {
    const navContainer = document.getElementById('navContainer');
    navContainer.innerHTML = '';

    Object.keys(menuData).forEach(key => {
        const category = menuData[key];
        const button = document.createElement('button');
        const isActive = key === currentCategory;
        
        button.className = `nav-btn ${isActive ? 'active' : ''}`;
        
        const iconClass = categoryIcons[key] || 'fa-utensils';
        
        button.innerHTML = `
            <i class="fas ${iconClass}"></i>
            <span class="nav-btn-title">${category.title.split(" ")[0]}</span> 
        `;
        
        button.addEventListener('click', () => {
            currentCategory = key;
            renderNavigation();
            renderMenu();
            
            button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
        navContainer.appendChild(button);
    });
}

// ==================== LISTADO DE MENÚ ====================
function renderMenu() {
    const menuContent = document.getElementById('menuContent');
    const category = menuData[currentCategory];

    const cardsHtml = category.items.map(item => createMenuCard(currentCategory, item)).join('');

    menuContent.innerHTML = `
        <section class="category-header" style="--category-accent: ${category.accent || '#ff8c00'}">
            <div>
                <h2>${category.title}</h2>
                ${category.tagline ? `<p style="margin-top:0.5rem; opacity:0.8;">${category.tagline}</p>` : ''}
            </div>
        </section>
        <div class="menu-grid">
            ${cardsHtml}
        </div>
    `;
}

// ==================== MODAL DE PRODUCTO ====================
function openProductModal(categoryKey, itemId) {
    const category = menuData[categoryKey];
    if (!category) return;

    const item = category.items.find(menuItem => menuItem.id === itemId);
    if (!item) return;

    const priceEl = document.getElementById('modalProductPrice');
    const priceNoteEl = document.getElementById('modalProductPriceNote');
    const optionsWrapper = document.getElementById('productOptions');
    const optionsTitle = document.getElementById('productOptionsTitle');
    const optionsContainer = document.getElementById('complementosContainer');
    const highlightsList = document.getElementById('modalHighlights');

    document.getElementById('modalProductName').textContent = category.title;
    document.getElementById('modalProductTitle').textContent = item.name;
    document.getElementById('modalProductDescription').textContent = item.description;
    document.getElementById('modalProductImage').src = item.image;
    priceEl.textContent = item.price || '';

    if (item.priceNote) {
        priceNoteEl.textContent = item.priceNote;
        priceNoteEl.style.display = 'block';
    } else {
        priceNoteEl.textContent = '';
        priceNoteEl.style.display = 'none';
    }

    if (item.highlights && item.highlights.length) {
        highlightsList.innerHTML = item.highlights.map(line => `<li>${line}</li>`).join('');
        highlightsList.style.display = 'block';
    } else {
        highlightsList.innerHTML = '';
        highlightsList.style.display = 'none';
    }

    if (item.options && item.options.length) {
        optionsWrapper.style.display = 'block';
        optionsTitle.textContent = item.options.length > 1 ? 'Personaliza tu orden' : item.options[0].label;

        const groupsHtml = item.options.map((option, optionIndex) => {
            const inputType = option.type === 'checkbox' ? 'checkbox' : 'radio';
            const groupName = `${item.id}-${optionIndex}`;

            const choicesHtml = option.choices.map(choice => {
                const priceInfo = choice.price ? `<span class="choice-price">${choice.price}</span>` : '';
                const noteInfo = choice.note ? `<span class="choice-note">${choice.note}</span>` : '';
                return `
                    <label class="option-choice">
                        <input type="${inputType}" name="${groupName}" value="${choice.value}">
                        <span class="choice-label">${choice.value}${priceInfo ? ` ${priceInfo}` : ''}${noteInfo ? ` ${noteInfo}` : ''}</span>
                    </label>
                `;
            }).join('');

            return `
                <div class="option-block">
                    <h6 style="font-weight:700; margin-bottom:5px;">${option.label}</h6>
                    ${option.description ? `<p class="option-description" style="font-size:0.85rem; margin-bottom:5px; color:#666;">${option.description}</p>` : ''}
                    ${choicesHtml}
                </div>
            `;
        }).join('');

        optionsContainer.innerHTML = groupsHtml;
    } else {
        optionsWrapper.style.display = 'none';
        optionsContainer.innerHTML = '';
    }

    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// ==================== PROMOCIONES ====================
function showDailyPromotion() {
    const promotionBanner = document.getElementById('promotionBanner');
    const promotionText = document.getElementById('promotionText');
    const dayOfWeek = new Date().getDay();

    if (dayOfWeek === 1) { // Lunes
        promotionText.textContent = 'Lunes de trompo: Tacos al pastor 2 x 1 a partir de las 7:00 p.m.';
        promotionBanner.classList.add('active');
    } else if (dayOfWeek === 3) { // Miércoles
        promotionText.textContent = 'Miércoles de pozole: Chico $80 · Grande $100 · Promo 3 x 2.';
        promotionBanner.classList.add('active');
    } else {
        promotionBanner.classList.remove('active');
    }
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderNavigation();
    renderMenu();
    showDailyPromotion();

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const menuContent = document.getElementById('menuContent');
    const modal = document.getElementById('productModal');
    const closeModalBtn = document.getElementById('closeModal');

    prevBtn.addEventListener('click', () => {
        const total = Object.keys(menuData).length;
        currentSlide = (currentSlide - 1 + total) % total;
        updateCarouselPosition();
    });

    nextBtn.addEventListener('click', () => {
        const total = Object.keys(menuData).length;
        currentSlide = (currentSlide + 1) % total;
        updateCarouselPosition();
    });

    menuContent.addEventListener('click', (event) => {
        const button = event.target.closest('.menu-card-button');
        const card = event.target.closest('.menu-card');
        const target = button || card;

        if (!target) return;

        const { category, item } = target.dataset;
        if (category && item) {
            openProductModal(category, item);
        }
    });

    closeModalBtn.addEventListener('click', closeProductModal);

    modal.addEventListener('click', (event) => {
        if (event.target.id === 'productModal') {
            closeProductModal();
        }
    });
});