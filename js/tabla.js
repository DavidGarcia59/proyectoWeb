
const data = [
    {
      id: 1,
      imagen: './imagenesPlataformas/bogotasocaial-600x600.png',
      plataforma: "AprendeFácil",
      cursos: ["Programación Básica", "Diseño Gráfico", "Inglés Intermedio"],
      formato: "Videos, cuestionarios, proyectos",
      profesor: ["Expertos en la materia"],
      calificacion: 4.6,
      usuariosSuscritos: 3000000,
      idiomas: ["Español"],
      costo: 50000, // ejemplo de costo en pesos colombianos
      url: "https://www.aprendefacil.com/"
    },
    {
      id: 2,
      imagen: './imagenesPlataformas/eCollege.png',
      plataforma: "EduTechGlobal",
      cursos: ["Inteligencia Artificial Avanzada", "Marketing Digital Estratégico", "Finanzas Personales"],
      formato: "Videos, debates en línea, tareas",
      profesor: ["Profesionales de la industria"],
      calificacion: 4.8,
      usuariosSuscritos: 800000,
      idiomas: ["Inglés", "Francés", "Español"],
      costo: 75000, // ejemplo de costo en pesos colombianos
      url: "https://www.edutechglobal.com/",
    },
    {
      id: 3,
      imagen: './imagenesPlataformas/educacionHoy.png',
      plataforma: "MasterMindCourses",
      cursos: ["Desarrollo Web Completo", "Gestión de Proyectos Ágiles", "Diseño de Experiencia de Usuario"],
      formato: "Videos, casos de estudio, exámenes",
      profesor: ["Instructores Certificados"],
      calificacion: 4.5,
      usuariosSuscritos: 1500000,
      idiomas: ["Inglés", "Español"],
      costo: 90000, // ejemplo de costo en pesos colombianos
      url: "https://www.mastermindcourses.com/",
    },
    {
      id: 4,
      imagen: './imagenesPlataformas/iebs.png',
      plataforma: "SkillHub",
      cursos: ["Desarrollo de Aplicaciones Móviles", "Marketing de Contenido", "Inglés para Negocios"],
      formato: "Videos, ejercicios prácticos, retroalimentación personalizada",
      profesor: ["Especialistas en el campo"],
      calificacion: 4.9,
      usuariosSuscritos: 2000000,
      idiomas: ["Inglés", "Chino", "Español"],
      costo: 120000, // ejemplo de costo en pesos colombianos
      url: "https://www.skillhub.com/",
    },
    {
      id: 5,
      imagen: './imagenesPlataformas/mineducDigital.jpg',
      plataforma: "CodeMasters Academy",
      cursos: ["Desarrollo de Videojuegos", "Introducción a la Ciberseguridad", "Diseño de Algoritmos"],
      formato: "Videos, proyectos prácticos, sesiones en vivo",
      profesor: ["Expertos en Codificación"],
      calificacion: 4.7,
      usuariosSuscritos: 1200000,
      idiomas: ["Inglés", "Español"],
      costo: 110000, // ejemplo de costo en pesos colombianos
      url: "https://www.codemastersacademy.com/",
    },
    {
      id: 6,
      imagen: './imagenesPlataformas/pc.jfif',
      plataforma: "LanguageMasters",
      cursos: ["Aprende Italiano", "Francés para Viajeros", "Chino Mandarín Básico"],
      formato: "Videos, prácticas orales, evaluaciones escritas",
      profesor: ["Nativos en el Idioma"],
      calificacion: 4.6,
      usuariosSuscritos: 500000,
      idiomas: ["Italiano", "Francés", "Chino", "Español"],
      costo: 60000, // ejemplo de costo en pesos colombianos
      url: "https://www.languagemasters.com/",
    },
    {
      id: 7,
      imagen: './imagenesPlataformas/WebCt.png',
      plataforma: "DataSciencePro",
      cursos: ["Análisis de Datos Avanzado", "Machine Learning", "Visualización de Datos"],
      formato: "Videos, proyectos prácticos, foros de discusión",
      profesor: ["Científicos de Datos Experimentados"],
      calificacion: 4.8,
      usuariosSuscritos: 700000,
      idiomas: ["Inglés", "Español"],
      costo: 95000, // ejemplo de costo en pesos colombianos
      url: "https://www.datasciencepro.com/",
    },
    {
      id: 8,
      imagen: './imagenesPlataformas/world-token-academy.jpg',
      plataforma: "InvestoLearn",
      cursos: ["Inversión en Bolsa", "Planificación Financiera Personal", "Criptomonedas para Principiantes"],
      formato: "Videos, simulaciones de mercado, asesoramiento financiero en línea",
      profesor: ["Expertos Financieros"],
      calificacion: 4.9,
      usuariosSuscritos: 1000000,
      idiomas: ["Inglés", "Español"],
      costo: 140000, // ejemplo de costo en pesos colombianos
      url: "https://www.investolearn.com/",
    },
    {
      id: 9,
      imagen: './imagenesPlataformas/images9.jfif',
      plataforma: "ArteCreativoOnline",
      cursos: ["Pintura al Óleo", "Fotografía Artística", "Escultura en Arcilla"],
      formato: "Videos, proyectos prácticos, sesiones de crítica de arte",
      profesor: ["Artistas Reconocidos"],
      calificacion: 4.7,
      usuariosSuscritos: 600000,
      idiomas: ["Inglés", "Español"],
      costo: 80000, // ejemplo de costo en pesos colombianos
      url: "https://www.artecreativoonline.com/",
    },
    {
      id: 10,
      imagen: './imagenesPlataformas/images10.jfif',
      plataforma: "MindfulLife Academy",
      cursos: ["Mindfulness para el Estrés", "Yoga en Casa", "Desarrollo Personal"],
      formato: "Videos, meditaciones guiadas, seguimiento personalizado",
      profesor: ["Instructores de Vida Consciente"],
      calificacion: 4.6,
      usuariosSuscritos: 900000,
      idiomas: ["Inglés", "Español"],
      costo: 70000, // ejemplo de costo en pesos colombianos
      url: "https://www.mindfullifeacademy.com/",
    },
    
      {
        id: 11,
        imagen: './imagenesPlataformas/bogotasocaial-600x600.png',
        plataforma: "TechMasterPro",
        cursos: ["Desarrollo de Software Empresarial", "Seguridad de Redes Avanzada", "Big Data Analytics"],
        formato: "Videos, laboratorios prácticos, evaluaciones en tiempo real",
        profesor: ["Expertos en Tecnología de la Información"],
        calificacion: 4.8,
        usuariosSuscritos: 1100000,
        idiomas: ["Inglés", "Español", "Alemán"],
        costo: 115000,
        url: "https://www.techmasterpro.com/"
      },
      {
        id: 12,
        imagen: './imagenesPlataformas/eCollege.png',
        plataforma: "DigitalDesignHub",
        cursos: ["Diseño de Interfaz de Usuario", "Animación Digital", "Realidad Virtual"],
        formato: "Videos, proyectos creativos, revisiones especializadas",
        profesor: ["Diseñadores Digitales"],
        calificacion: 4.7,
        usuariosSuscritos: 850000,
        idiomas: ["Inglés", "Español", "Francés"],
        costo: 95000,
        url: "https://www.digitaldesignhub.com/"
      },
      {
        id: 13,
        imagen: './imagenesPlataformas/educacionHoy.png',
        plataforma: "ScienceExplorers",
        cursos: ["Biología Molecular", "Física Cuántica Avanzada", "Genética Moderna"],
        formato: "Videos, experimentos prácticos, debates científicos",
        profesor: ["Científicos de Vanguardia"],
        calificacion: 4.9,
        usuariosSuscritos: 1200000,
        idiomas: ["Inglés", "Español", "Chino"],
        costo: 130000,
        url: "https://www.scienceexplorers.com/"
      },
      {
        id: 14,
        imagen: './imagenesPlataformas/iebs.png',
        plataforma: "BizLeadershipInstitute",
        cursos: ["Liderazgo Estratégico", "Gestión de Equipos Globales", "Ética Empresarial"],
        formato: "Videos, estudios de caso, mentoría ejecutiva",
        profesor: ["Líderes Empresariales Reconocidos"],
        calificacion: 4.8,
        usuariosSuscritos: 1000000,
        idiomas: ["Inglés", "Español"],
        costo: 140000,
        url: "https://www.bizleadershipinstitute.com/"
      },
      {
        id: 15,
        imagen: './imagenesPlataformas/mineducDigital.jpg',
        plataforma: "GreenTechInnovation",
        cursos: ["Innovación Sostenible", "Ecoemprendimiento", "Tecnologías Limpias"],
        formato: "Videos, proyectos eco-innovadores, discusiones ambientales",
        profesor: ["Especialistas en Innovación Verde"],
        calificacion: 4.9,
        usuariosSuscritos: 900000,
        idiomas: ["Inglés", "Español", "Portugués"],
        costo: 120000,
        url: "https://www.greentechinnovation.com/"
      },
      {
        id: 16,
        imagen: './imagenesPlataformas/pc.jfif',
        plataforma: "QuantumMindMastery",
        cursos: ["Psicología Cuántica", "Neurociencia Avanzada", "Meditación Cuántica"],
        formato: "Videos, prácticas mentales, sesiones en vivo",
        profesor: ["Expertos en Conciencia Cuántica"],
        calificacion: 4.7,
        usuariosSuscritos: 750000,
        idiomas: ["Inglés", "Español"],
        costo: 100000,
        url: "https://www.quantummindmastery.com/"
      },
      {
        id: 17,
        imagen: './imagenesPlataformas/WebCt.png',
        plataforma: "FineArtsAcademy",
        cursos: ["Pintura Clásica", "Escultura Renacentista", "Historia del Arte"],
        formato: "Videos, proyectos artísticos, críticas especializadas",
        profesor: ["Maestros de las Bellas Artes"],
        calificacion: 4.8,
        usuariosSuscritos: 950000,
        idiomas: ["Inglés", "Español", "Italiano"],
        costo: 110000,
        url: "https://www.fineartsacademy.com/"
      },
      {
        id: 18,
        imagen: './imagenesPlataformas/world-token-academy.jpg',
        plataforma: "FitnessFusion",
        cursos: ["Entrenamiento Funcional", "Nutrición Deportiva", "Yoga para Atletas"],
        formato: "Videos, rutinas personalizadas, seguimiento físico",
        profesor: ["Entrenadores de Fitness Profesionales"],
        calificacion: 4.9,
        usuariosSuscritos: 800000,
        idiomas: ["Inglés", "Español"],
        costo: 90000,
        url: "https://www.fitnessfusion.com/"
      },
      {
        id: 19,
        imagen: './imagenesPlataformas/images9.jfif',
        plataforma: "TechEntrepreneurshipHub",
        cursos: ["Startups Tecnológicas", "Estrategias de Emprendimiento", "Innovación Disruptiva"],
        formato: "Videos, casos de éxito, asesoramiento emprendedor",
        profesor: ["Emprendedores Tecnológicos Exitosos"],
        calificacion: 4.7,
        usuariosSuscritos: 700000,
        idiomas: ["Inglés", "Español"],
        costo: 120000,
        url: "https://www.techentrepreneurshiphub.com/"
      },
      {
        id: 20,
        imagen: './imagenesPlataformas/images10.jfif',
        plataforma: "MusicMasters",
        cursos: ["Composición Musical", "Producción de Audio Avanzada", "Historia de la Música"],
        formato: "Videos, proyectos musicales, sesiones de crítica",
        profesor: ["Maestros de la Música"],
        calificacion: 4.8,
        usuariosSuscritos: 850000,
        idiomas: ["Inglés", "Español", "Francés"],
        costo: 100000,
        url: "https://www.musicmasters.com/"
      },
    
    
      
        {
          id: 21,
          imagen: './imagenesPlataformas/bogotasocaial-600x600.png',
          plataforma: "FutureTechInstitute",
          cursos: ["Desarrollo de Tecnologías Futuras", "Inteligencia Artificial Cuántica", "Robótica Avanzada"],
          formato: "Videos, laboratorios prácticos, debates tecnológicos",
          profesor: ["Futuristas Tecnológicos"],
          calificacion: 4.9,
          usuariosSuscritos: 1300000,
          idiomas: ["Inglés", "Español", "Alemán"],
          costo: 125000,
          url: "https://www.futuretechinstitute.com/"
        },
        {
          id: 22,
          imagen: './imagenesPlataformas/eCollege.png',
          plataforma: "DigitalMarketingMasters",
          cursos: ["Estrategias Avanzadas de Marketing Digital", "SEO Profesional", "Publicidad en Redes Sociales"],
          formato: "Videos, estudios de caso, asesoramiento personalizado",
          profesor: ["Expertos en Marketing Digital"],
          calificacion: 4.8,
          usuariosSuscritos: 1100000,
          idiomas: ["Inglés", "Español", "Francés"],
          costo: 120000,
          url: "https://www.digitalmarketingmasters.com/"
        },
        {
          id: 23,
          imagen: './imagenesPlataformas/educacionHoy.png',
          plataforma: "AstroExplorer",
          cursos: ["Astronomía Avanzada", "Exploración Espacial", "Astrofísica Cuántica"],
          formato: "Videos, observaciones astronómicas, charlas científicas",
          profesor: ["Astrónomos de Prestigio"],
          calificacion: 4.9,
          usuariosSuscritos: 950000,
          idiomas: ["Inglés", "Español"],
          costo: 130000,
          url: "https://www.astroexplorer.com/"
        },
        {
          id: 24,
          imagen: './imagenesPlataformas/iebs.png',
          plataforma: "LegalEagleAcademy",
          cursos: ["Derecho Corporativo Internacional", "Litigio Estratégico", "Propiedad Intelectual"],
          formato: "Videos, casos prácticos, asesoría legal en línea",
          profesor: ["Abogados Expertos"],
          calificacion: 4.8,
          usuariosSuscritos: 1000000,
          idiomas: ["Inglés", "Español"],
          costo: 140000,
          url: "https://www.legaleagleacademy.com/"
        },
        {
          id: 25,
          imagen: './imagenesPlataformas/mineducDigital.jpg',
          plataforma: "BioTechInnovation",
          cursos: ["Innovación en Biotecnología", "Genómica Avanzada", "Investigación Médica"],
          formato: "Videos, laboratorios bio-tech, conferencias médicas",
          profesor: ["Expertos en Biotecnología"],
          calificacion: 4.9,
          usuariosSuscritos: 1200000,
          idiomas: ["Inglés", "Español", "Chino"],
          costo: 135000,
          url: "https://www.biotechinnovation.com/"
        },
        {
          id: 26,
          imagen: './imagenesPlataformas/pc.jfif',
          plataforma: "LanguageConnect",
          cursos: ["Aprendizaje de Idiomas con Realidad Virtual", "Intercambio Cultural", "Traducción Avanzada"],
          formato: "Videos, experiencias virtuales, prácticas lingüísticas",
          profesor: ["Lingüistas Virtuales"],
          calificacion: 4.8,
          usuariosSuscritos: 900000,
          idiomas: ["Inglés", "Español", "Francés"],
          costo: 110000,
          url: "https://www.languageconnect.com/"
        },
        {
          id: 27,
          imagen: './imagenesPlataformas/WebCt.png',
          plataforma: "CyberSecurityHub",
          cursos: ["Seguridad Cibernética Avanzada", "Hacking Ético", "Protección de Datos"],
          formato: "Videos, simulaciones de ciberataques, foros de seguridad",
          profesor: ["Expertos en Ciberseguridad"],
          calificacion: 4.9,
          usuariosSuscritos: 1000000,
          idiomas: ["Inglés", "Español"],
          costo: 130000,
          url: "https://www.cybersecurityhub.com/"
        },
        {
          id: 28,
          imagen: './imagenesPlataformas/world-token-academy.jpg',
          plataforma: "SocialImpactLeaders",
          cursos: ["Liderazgo para el Impacto Social", "Desarrollo Sostenible", "Innovación Social"],
          formato: "Videos, estudios de caso, proyectos sociales",
          profesor: ["Líderes del Cambio Social"],
          calificacion: 4.8,
          usuariosSuscritos: 850000,
          idiomas: ["Inglés", "Español"],
          costo: 120000,
          url: "https://www.socialimpactleaders.com/"
        },
        {
          id: 29,
          imagen: './imagenesPlataformas/images9.jfif',
          plataforma: "TechGuruAcademy",
          cursos: ["Asesoramiento Tecnológico Estratégico", "Tendencias Tecnológicas Futuras", "Innovación en IT"],
          formato: "Videos, análisis de tendencias, asesoramiento personalizado",
          profesor: ["Gurús Tecnológicos"],
          calificacion: 4.9,
          usuariosSuscritos: 950000,
          idiomas: ["Inglés", "Español"],
          costo: 130000,
          url: "https://www.techguruacademy.com/"
        },
        {
          id: 30,
          imagen: './imagenesPlataformas/images10.jfif',
          plataforma: "MusicProductionMasters",
          cursos: ["Producción Musical Avanzada", "Mezcla y Masterización", "Composición Orquestal"],
          formato: "Videos, proyectos musicales, sesiones de estudio",
          profesor: ["Productores Musicales Reconocidos"],
          calificacion: 4.8,
          usuariosSuscritos: 900000,
          idiomas: ["Inglés", "Español", "Alemán"],
          costo: 110000,
          url: "https://www.musicproductionmasters.com/"
        },
      
      
        
          {
            id: 31,
            imagen: './imagenesPlataformas/bogotasocaial-600x600.png',
            plataforma: "FashionDesignStudio",
            cursos: ["Diseño de Moda Sostenible", "Modelado 3D en Moda", "Gestión de Marca de Moda"],
            formato: "Videos, proyectos de diseño, revisiones de estilo",
            profesor: ["Diseñadores de Moda Destacados"],
            calificacion: 4.7,
            usuariosSuscritos: 800000,
            idiomas: ["Inglés", "Español", "Francés"],
            costo: 100000,
            url: "https://www.fashiondesignstudio.com/"
          },
          {
            id: 32,
            imagen: './imagenesPlataformas/eCollege.png',
            plataforma: "SportsScienceAcademy",
            cursos: ["Ciencia del Entrenamiento Deportivo", "Nutrición para Atletas", "Fisioterapia Deportiva"],
            formato: "Videos, estudios de casos deportivos, asesoramiento personalizado",
            profesor: ["Científicos del Deporte"],
            calificacion: 4.9,
            usuariosSuscritos: 900000,
            idiomas: ["Inglés", "Español"],
            costo: 120000,
            url: "https://www.sportsscienceacademy.com/"
          },
          {
            id: 33,
            imagen: './imagenesPlataformas/educacionHoy.png',
            plataforma: "MindfulParenting",
            cursos: ["Educación Consciente para Padres", "Psicología Infantil", "Desarrollo Emocional Infantil"],
            formato: "Videos, meditaciones para padres, sesiones de orientación",
            profesor: ["Psicólogos Infantiles"],
            calificacion: 4.8,
            usuariosSuscritos: 700000,
            idiomas: ["Inglés", "Español"],
            costo: 80000,
            url: "https://www.mindfulparenting.com/"
          },
          {
            id: 34,
            imagen: './imagenesPlataformas/iebs.png',
            plataforma: "TechInnovationLab",
            cursos: ["Laboratorio de Innovación Tecnológica", "Desarrollo de Prototipos", "Tendencias en Tecnología"],
            formato: "Videos, proyectos tecnológicos, asesoramiento de innovación",
            profesor: ["Innovadores Tecnológicos"],
            calificacion: 4.9,
            usuariosSuscritos: 1000000,
            idiomas: ["Inglés", "Español", "Alemán"],
            costo: 130000,
            url: "https://www.techinnovationlab.com/"
          },
          {
            id: 35,
            imagen: './imagenesPlataformas/mineducDigital.jpg',
            plataforma: "DigitalArtistryHub",
            cursos: ["Arte Digital Avanzado", "Ilustración Digital", "Creación de Personajes"],
            formato: "Videos, proyectos artísticos digitales, críticas especializadas",
            profesor: ["Artistas Digitales"],
            calificacion: 4.8,
            usuariosSuscritos: 950000,
            idiomas: ["Inglés", "Español"],
            costo: 110000,
            url: "https://www.digitalartistryhub.com/"
          },
          {
            id: 36,
            imagen: './imagenesPlataformas/pc.jfif',
            plataforma: "MedicalMarvels",
            cursos: ["Avances en Medicina", "Investigación Médica", "Cirugía Avanzada"],
            formato: "Videos, conferencias médicas, prácticas virtuales",
            profesor: ["Médicos Distinguidos"],
            calificacion: 4.9,
            usuariosSuscritos: 1200000,
            idiomas: ["Inglés", "Español", "Francés"],
            costo: 140000,
            url: "https://www.medicalmarvels.com/"
          },
          {
            id: 37,
            imagen: './imagenesPlataformas/WebCt.png',
            plataforma: "TechEthicsInstitute",
            cursos: ["Ética en Tecnología", "Gobernanza de Datos", "Responsabilidad en Inteligencia Artificial"],
            formato: "Videos, debates éticos, casos de estudio",
            profesor: ["Éticos Tecnológicos"],
            calificacion: 4.8,
            usuariosSuscritos: 900000,
            idiomas: ["Inglés", "Español"],
            costo: 100000,
            url: "https://www.techethicsinstitute.com/"
          },
          {
            id: 38,
            imagen: './imagenesPlataformas/world-token-academy.jpg',
            plataforma: "CulinaryCreativity",
            cursos: ["Cocina Creativa", "Maridaje de Vinos", "Pastelería de Autor"],
            formato: "Videos, recetas creativas, sesiones culinarias en vivo",
            profesor: ["Chefs Creativos"],
            calificacion: 4.9,
            usuariosSuscritos: 850000,
            idiomas: ["Inglés", "Español", "Italiano"],
            costo: 120000,
            url: "https://www.culinarycreativity.com/"
          },
          {
            id: 39,
            imagen: './imagenesPlataformas/images9.jfif',
            plataforma: "FashionBusinessInsider",
            cursos: ["Negocios de Moda Internacional", "Marketing en la Industria de la Moda", "Gestión de Marcas de Lujo"],
            formato: "Videos, estudios de caso, asesoramiento empresarial",
            profesor: ["Expertos en Negocios de Moda"],
            calificacion: 4.8,
            usuariosSuscritos: 1100000,
            idiomas: ["Inglés", "Español"],
            costo: 130000,
            url: "https://www.fashionbusinessinsider.com/"
          },
          {
            id: 40,
            imagen: './imagenesPlataformas/images10.jfif',
            plataforma: "SpaceExplorationAcademy",
            cursos: ["Exploración Espacial Avanzada", "Astroingeniería", "Colonización de Marte"],
            formato: "Videos, proyectos espaciales, conferencias astronauticas",
            profesor: ["Astronautas y Expertos en Espacio"],
            calificacion: 4.9,
            usuariosSuscritos: 1000000,
            idiomas: ["Inglés", "Español"],
            costo: 140000,
            url: "https://www.spaceexplorationacademy.com/"
          },
        
        
          
            {
              id: 41,
              imagen: './imagenesPlataformas/bogotasocaial-600x600.png',
              plataforma: "WildlifeConservationInstitute",
              cursos: ["Conservación de la Vida Silvestre", "Ecología Ambiental", "Biología de la Conservación"],
              formato: "Videos, estudios de campo, proyectos de conservación",
              profesor: ["Especialistas en Conservación"],
              calificacion: 4.8,
              usuariosSuscritos: 800000,
              idiomas: ["Inglés", "Español", "Portugués"],
              costo: 110000,
              url: "https://www.wildlifeconservationinstitute.com/"
            },
            {
              id: 42,
              imagen: './imagenesPlataformas/eCollege.png',
              plataforma: "CreativeWritingMasters",
              cursos: ["Escritura Creativa Avanzada", "Redacción Literaria", "Guion de Cine"],
              formato: "Videos, talleres literarios, revisiones de escritura",
              profesor: ["Escritores Maestros"],
              calificacion: 4.9,
              usuariosSuscritos: 900000,
              idiomas: ["Inglés", "Español", "Francés"],
              costo: 120000,
              url: "https://www.creativewritingmasters.com/"
            },
            {
              id: 43,
              imagen: './imagenesPlataformas/eCollege.png',
              plataforma: "TechHealthInnovation",
              cursos: ["Innovación en Salud Tecnológica", "Telemedicina Avanzada", "Análisis de Datos Médicos"],
              formato: "Videos, proyectos de salud tech, discusiones médicas",
              profesor: ["Expertos en Salud Tecnológica"],
              calificacion: 4.8,
              usuariosSuscritos: 950000,
              idiomas: ["Inglés", "Español"],
              costo: 130000,
              url: "https://www.techhealthinnovation.com/"
            },
            {
              id: 44,
              imagen: './imagenesPlataformas/iebs.png',
              plataforma: "TravelPhotographySchool",
              cursos: ["Fotografía de Viajes", "Edición Fotográfica", "Historias Visuales"],
              formato: "Videos, prácticas fotográficas, revisión de portafolios",
              profesor: ["Fotógrafos de Viajes"],
              calificacion: 4.9,
              usuariosSuscritos: 1000000,
              idiomas: ["Inglés", "Español"],
              costo: 130000,
              url: "https://www.travelphotographyschool.com/"
            },
            {
              id: 45,
              imagen: './imagenesPlataformas/mineducDigital.jpg',
              plataforma: "InclusiveLeadership",
              cursos: ["Liderazgo Inclusivo", "Diversidad en el Trabajo", "Equidad de Género"],
              formato: "Videos, estudios de caso, talleres inclusivos",
              profesor: ["Líderes de la Diversidad"],
              calificacion: 4.8,
              usuariosSuscritos: 850000,
              idiomas: ["Inglés", "Español"],
              costo: 120000,
              url: "https://www.inclusiveleadership.com/"
            },
            {
              id: 46,
              imagen: './imagenesPlataformas/pc.jfif',
              plataforma: "TechFashionLab",
              cursos: ["Innovación en Moda Tecnológica", "Diseño de Ropa Inteligente", "Realidad Aumentada en la Moda"],
              formato: "Videos, laboratorios de moda tech, desfiles virtuales",
              profesor: ["Expertos en Moda Tech"],
              calificacion: 4.9,
              usuariosSuscritos: 1100000,
              idiomas: ["Inglés", "Español", "Francés"],
              costo: 140000,
              url: "https://www.techfashionlab.com/"
            },
            {
              id: 47,
              imagen: './imagenesPlataformas/WebCt.png',
              plataforma: "EcoLivingMasterclass",
              cursos: ["Vida Sostenible", "Consumo Consciente", "Huella Ecológica"],
              formato: "Videos, prácticas ecológicas, comunidades ambientales",
              profesor: ["Eco-Líderes"],
              calificacion: 4.8,
              usuariosSuscritos: 950000,
              idiomas: ["Inglés", "Español"],
              costo: 110000,
              url: "https://www.ecolivingmasterclass.com/"
            },
            {
              id: 48,
              imagen: './imagenesPlataformas/world-token-academy.jpg',
              plataforma: "TechEntertainmentAcademy",
              cursos: ["Entretenimiento Tecnológico", "Realidad Virtual en el Cine", "Producción de Contenido 3D"],
              formato: "Videos, proyectos de entretenimiento tech, colaboraciones creativas",
              profesor: ["Innovadores en Entretenimiento Tech"],
              calificacion: 4.9,
              usuariosSuscritos: 1000000,
              idiomas: ["Inglés", "Español"],
              costo: 130000,
              url: "https://www.techentertainmentacademy.com/"
            },
            {
              id: 49,
              imagen: './imagenesPlataformas/images9.jfif',
              plataforma: "MindBodyConnection",
              cursos: ["Conexión Mente-Cuerpo", "Meditación para el Bienestar", "Psicología Positiva"],
              formato: "Videos, meditaciones guiadas, talleres de bienestar",
              profesor: ["Expertos en Salud Mental"],
              calificacion: 4.8,
              usuariosSuscritos: 900000,
              idiomas: ["Inglés", "Español"],
              costo: 120000,
              url: "https://www.mindbodyconnection.com/"
            },
            {
              id: 50,
              imagen: './imagenesPlataformas/images10.jfif',
              plataforma: "GamingInnovationHub",
              cursos: ["Innovación en Juegos", "Desarrollo de Videojuegos Avanzado", "Streaming de Juegos"],
              formato: "Videos, desarrollo de juegos, eventos de gaming",
              profesor: ["Gurús del Gaming"],
              calificacion: 4.9,
              usuariosSuscritos: 950000,
              idiomas: ["Inglés", "Español"],
              costo: 140000,
              url: "https://www.gaminginnovationhub.com/"
            }
          
          
  ];

 

// ...

// Obtención de referencias a elementos HTML relevantes
const plataformasBody = document.getElementById('plataformas-body');
const atrasButton = document.getElementById('atras');
const adelanteButton = document.getElementById('adelante');
const indicadorPagina = document.getElementById('indicador');

// Variables para el control de la paginación
let paginaActual = 0;

// Función para cambiar la página hacia atrás o adelante
function cambiarPagina(direccion) {
  paginaActual += direccion;
  mostrarPlataformas();
}

// Función para mostrar las plataformas en la tabla
// Función para mostrar las plataformas en la tabla
function mostrarPlataformas() {
  // Calcular el rango de plataformas a mostrar en la página actual
  const inicio = paginaActual * 10;
  const fin = Math.min(inicio + 10, data.length); // Asegurarse de no superar el tamaño del array

  // Limpiar contenido actual de la tabla
  plataformasBody.innerHTML = '';

  // Iterar sobre las plataformas de la página actual y generar filas de la tabla
  for (let i = inicio; i < fin; i++) {
    const plataforma = data[i];

    // Crear una nueva fila en la tabla
    const filaHTML = document.createElement('tr');

    // Agregar columna de ID
    const columnaID = document.createElement('td');
    columnaID.textContent = plataforma.id;
    filaHTML.appendChild(columnaID);

    // Agregar columna de Imagen
    const columnaImagen = document.createElement('td');
    const imagen = document.createElement('img');
    imagen.src = plataforma.imagen;
    imagen.alt = `Imagen de ${plataforma.plataforma}`;
    imagen.style.width = '50px';
    columnaImagen.appendChild(imagen);
    filaHTML.appendChild(columnaImagen);

    // Definir las propiedades que se mostrarán en las columnas
    const propiedades = ['plataforma', 'cursos', 'formato', 'profesor', 'calificacion', 'usuariosSuscritos', 'idiomas', 'costo', 'url','enlace'];

    // Crear celdas y agregarlas a la fila
    propiedades.forEach(propiedad => {
      const columna = document.createElement('td');

      // Lógica especial para manejar diferentes tipos de propiedades
      if (propiedad === 'cursos' || propiedad === 'profesor' || propiedad === 'idiomas') {
        columna.textContent = plataforma[propiedad].join(', ');
      } else if (propiedad === 'url') {
        const enlace = document.createElement('a');
        enlace.href = plataforma[propiedad];
        enlace.textContent = plataforma[propiedad];
        columna.appendChild(enlace);
      } else if (propiedad === 'enlace') {
        const enlace = document.createElement('a');
        enlace.href = plataforma[propiedad];
        enlace.textContent = 'Ver más';
        columna.appendChild(enlace);
      } else {
        columna.textContent = plataforma[propiedad];
      }

      // Agregar la celda a la fila
      filaHTML.appendChild(columna);
    });

    // Agregar la fila al cuerpo de la tabla
    plataformasBody.appendChild(filaHTML);
  }

  // Actualizar el indicador de página
  indicadorPagina.textContent = paginaActual + 1;

  // Habilitar o deshabilitar botones según la página actual
  atrasButton.disabled = paginaActual === 0;
  adelanteButton.disabled = fin >= data.length;
}


// Mostrar las primeras plataformas al cargar la página
mostrarPlataformas();
// Mostrar las primeras plataformas al cargar la página



/*************************************************************************** */

// Función para buscar plataformas
// Función para buscar plataformas
// Función para buscar plataformas
// Función para buscar plataformas
function buscar() {
  // Obtener los valores de los campos de búsqueda
  const idBusqueda = document.getElementById('input-id').value.toLowerCase();
  const plataformaBusqueda = document.getElementById('input-plataforma').value.toLowerCase();

  // Verificar si ambos campos de búsqueda están vacíos
  if (idBusqueda === '' && plataformaBusqueda === '') {
    // Ambos campos están vacíos, mostrar la tabla original
    mostrarPlataformas();
    return;
  }

  // Filtrar el array de plataformas según los criterios de búsqueda
  const resultados = data.filter(plataforma => {
    // Convertir los valores a minúsculas para una búsqueda sin distinción entre mayúsculas y minúsculas
    const idPlataforma = plataforma.id.toString().toLowerCase();
    const nombrePlataforma = plataforma.plataforma.toLowerCase();

    // Verificar si coincide con los criterios de búsqueda
    const coincideId = idPlataforma.includes(idBusqueda);
    const coincidePlataforma = nombrePlataforma.includes(plataformaBusqueda);

    // Si ambas condiciones se cumplen, mantener la plataforma en los resultados
    return coincideId && coincidePlataforma;
  });

  // Mostrar los resultados en la tabla, teniendo en cuenta la paginación
  mostrarResultadosPaginados(resultados);
}

// Función para mostrar resultados en la tabla con paginación
function mostrarResultadosPaginados(resultados) {
  // Calcular el número total de páginas necesarias para mostrar todos los resultados
  const numPaginas = Math.ceil(resultados.length / 10);

  // Reiniciar la página actual a la primera página
  paginaActual = 0;

  // Mostrar la primera página de resultados
  mostrarResultadosEnPagina(resultados, paginaActual, numPaginas);
}

// Función para mostrar resultados en una página específica
function mostrarResultadosEnPagina(resultados, pagina, numPaginas) {
  // Calcular el rango de resultados a mostrar en la página actual
  const inicio = pagina * 10;
  const fin = inicio + 10;
  const resultadosPagina = resultados.slice(inicio, fin);

  // Limpiar contenido actual de la tabla
  plataformasBody.innerHTML = '';

  // Iterar sobre los resultados de la página actual y generar filas de la tabla
  for (const plataforma of resultadosPagina) {
    // Crear una nueva fila en la tabla
    const filaHTML = document.createElement('tr');

    // Agregar columna de ID
    const columnaID = document.createElement('td');
    columnaID.textContent = plataforma.id;
    filaHTML.appendChild(columnaID);

    // Agregar columna de Imagen
    const columnaImagen = document.createElement('td');
    const imagen = document.createElement('img');
    imagen.src = plataforma.imagen;
    imagen.alt = `Imagen de ${plataforma.plataforma}`;
    imagen.style.width = '50px';
    columnaImagen.appendChild(imagen);
    filaHTML.appendChild(columnaImagen);

    // Definir las propiedades que se mostrarán en las columnas
    const propiedades = ['plataforma', 'cursos', 'formato', 'profesor', 'calificacion', 'usuariosSuscritos', 'idiomas', 'costo', 'url'];

    // Crear celdas y agregarlas a la fila
    propiedades.forEach(propiedad => {
      const columna = document.createElement('td');

      // Lógica especial para manejar diferentes tipos de propiedades
      if (propiedad === 'cursos' || propiedad === 'profesor' || propiedad === 'idiomas') {
        columna.textContent = plataforma[propiedad].join(', ');
      } else if (propiedad === 'url') {
        const enlace = document.createElement('a');
        enlace.href = plataforma[propiedad];
        enlace.textContent = plataforma[propiedad];
        columna.appendChild(enlace);
      } else {
        columna.textContent = plataforma[propiedad];
      }

      // Agregar la celda a la fila
      filaHTML.appendChild(columna);
    });

    // Agregar la fila al cuerpo de la tabla
    plataformasBody.appendChild(filaHTML);
  }

  // Actualizar el indicador de página
  indicadorPagina.textContent = pagina + 1;

  // Cambiar estilos del botón Atrás
  document.querySelector('.button.atras').classList.toggle('deshabilitado', pagina === 0);

  // Cambiar estilos del botón Adelante
  document.querySelector('.button.adelante').classList.toggle('deshabilitado', pagina === numPaginas - 1);
}

// Mostrar las primeras plataformas al cargar la página
mostrarPlataformas();




function limpiar() {
  // Limpiar los campos de usuario y contraseña
  document.getElementById("input-id").value = "";
  document.getElementById("input-plataforma").value = "";
}

