// ============================================================
// ATLAS DE HISTOLOGÍA — Base de datos de contenido
// Universidad Central de Venezuela
// ============================================================

export const systems = [
  {
    id: 'digestivo',
    name: 'Aparato Digestivo',
    shortName: 'Digestivo',
    description: 'Desde la cavidad oral hasta el ano, estudio de las capas epiteliales, glandulares y musculares del tubo digestivo.',
    icon: '🫁',
    color: 'from-amber-400 to-orange-500',
    accentColor: '#f97316',
    softColor: 'rgba(251, 191, 36, 0.12)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    laminas: [
      {
        id: 'lengua',
        nombre: 'Cavidad Oral — Lengua',
        imagen: '/assets/digestivo-lengua.jpg',
        estructura: 'Revestida por epitelio escamoso estratificado no queratinizado (cara ventral) y parcialmente queratinizado (cara dorsal). La lámina propia alberga papilas gustativas fungiformes, filiformes, foliadas y circunvaladas, con corpúsculos gustativos en sus paredes. El cuerpo está formado por músculo esquelético entrelazado en tres planos ortogonales (fascículos longitudinales, transversales y verticales) con abundantes fibras colágenas y adiposas entre ellos.',
        funcion: 'Interviene en la masticación, deglución y fonación. Las papilas gustativas permiten la percepción de los cuatro sabores básicos (dulce, ácido, salado y amargo). La movilidad tridimensional del músculo extrínseco e intrínseco facilita la manipulación del bolo alimentario.'
      },
      {
        id: 'mucosa-oral',
        nombre: 'Cavidad Oral — Mucosa Oral',
        imagen: '/assets/digestivo-mucosa-oral.jpg',
        estructura: 'Epitelio escamoso estratificado no queratinizado (en mejilla y paladar blando) o paraqueratinizado/queratinizado (encía y paladar duro). La lámina propia es densa y rica en colágeno; la submucosa contiene glándulas salivales menores seromucosas. En el paladar duro, la submucosa se ancla directamente al periostio.',
        funcion: 'Protección mecánica y química contra abrasión durante la masticación. Las glándulas salivales menores segregan mucinas y enzimas (amilasa salival) que inician la digestión del almidón y lubrican el bolo alimentario para facilitar la deglución.'
      },
      {
        id: 'esofago',
        nombre: 'Esófago',
        imagen: '/assets/digestivo-esofago.jpg',
        estructura: 'Epitelio escamoso estratificado no queratinizado que recubre la mucosa. La lámina propia contiene glándulas esofágicas cardiales en los extremos. La muscular de la mucosa es bien desarrollada. La submucosa aloja glándulas esofágicas propias (acinos mucosos). La muscular externa presenta músculo estriado en el tercio superior, mixto en el tercio medio y liso en el tercio inferior, dispuesta en capas interna circular y externa longitudinal. Carece de serosa; posee adventicia.',
        funcion: 'Conducto muscular que transporta el bolo alimentario desde la faringe hasta el estómago mediante ondas peristálticas coordinadas. El epitelio estratificado resiste la abrasión del bolo y la exposición ocasional al ácido gástrico por reflujo.'
      },
      {
        id: 'estomago',
        nombre: 'Estómago',
        imagen: '/assets/digestivo-estomago.jpg',
        estructura: 'Epitelio simple cilíndrico mucosecretor que recubre toda la superficie y los cuellos de las foveolas (fosetas gástricas). Las glándulas gástricas propias contienen: células principales (cimógenas, secretan pepsinógeno), células parietales u oxínticas (secretan HCl y factor intrínseco), células mucosas del cuello y células G enteroendocrinas. La muscular externa tiene tres capas: oblicua interna, circular media y longitudinal externa.',
        funcion: 'Almacenamiento y mezcla del alimento con el jugo gástrico (HCl + pepsinógeno) para formar el quimo. La pepsina inicia la digestión proteica; el HCl desnaturaliza proteínas y destruye microorganismos. El factor intrínseco es imprescindible para la absorción ileal de vitamina B12.'
      },
      {
        id: 'intestino-delgado',
        nombre: 'Intestino Delgado',
        imagen: '/assets/digestivo-intestino-delgado.jpg',
        estructura: 'Epitelio simple cilíndrico con enterocitos absortivos (microvellosidades = ribete en cepillo), células caliciformes (mucus), células enteroendocrinas y células de Paneth (gránulos apicales con lisozima y defensinas) en las criptas de Lieberkühn. Las vellosidades aumentan el área de superficie 600 veces. La lámina propia contiene quilíferos centrales y capilares. En duodeno, la submucosa alberga las glándulas de Brunner (mucosas alcalinas).',
        funcion: 'Principal sitio de digestión enzimática y absorción de nutrientes (monosacáridos, aminoácidos, ácidos grasos, vitaminas liposolubles). Las vellosidades y microvellosidades maximizan el área absortiva. Las glándulas de Brunner neutralizan el ácido del quimo duodenal protegiendo la mucosa.'
      },
      {
        id: 'placas-peyer',
        nombre: 'Placas de Peyer',
        imagen: '/assets/digestivo-placas-peyer.jpg',
        estructura: 'Nódulos linfáticos agregados localizados en la lámina propia y submucosa del íleon. Presentan células M (membranosas) especializadas en el epitelio folicular asociado, que carecen de ribete en cepillo y poseen invaginaciones basolaterales donde residen linfocitos y macrófagos. Los folículos contienen centros germinales ricos en linfocitos B con células T en la región interfolicular.',
        funcion: 'Constituyen el tejido linfoide asociado al intestino (GALT). Capturan y procesan antígenos luminales a través de las células M para activar linfocitos B productores de IgA secretora. Son el principal mecanismo de inmunidad mucosa adaptativa que protege la mucosa intestinal frente a patógenos entéricos.'
      },
      {
        id: 'intestino-grueso',
        nombre: 'Intestino Grueso',
        imagen: '/assets/digestivo-intestino-grueso.jpg',
        estructura: 'Epitelio simple cilíndrico con abundantes células caliciformes (la proporción aumenta del ciego al recto). Presenta criptas de Lieberkühn largas y rectas, sin vellosidades. La lámina propia contiene nódulos linfáticos solitarios. La muscular externa longitudinal se condensa en tres bandas: las tenias coli. Presencia de apéndices epiploicos (acúmulos de grasa subserosa).',
        funcion: 'Absorción de agua, electrolitos (Na⁺, Cl⁻) y vitaminas producidas por la flora bacteriana (K, B12). Las células caliciformes producen moco para lubricar y proteger la mucosa ante la presión del contenido fecal. El peristaltismo en masa propulsa los residuos hacia el recto para su eliminación.'
      },
      {
        id: 'ano',
        nombre: 'Ano',
        imagen: '/assets/digestivo-ano.jpg',
        estructura: 'Zona de transición histológica: el canal anal superior está revestido por epitelio columnar simple (mucosa rectal); la zona de transición (línea pectínea o dentada) presenta epitelio cúbico o columnar estratificado; la zona inferior tiene epitelio escamoso estratificado no queratinizado que se continúa con el epitelio escamoso queratinizado de la piel perianal. La submucosa contiene el plexo hemorroidal interno; el esfínter interno es músculo liso y el externo es músculo estriado.',
        funcion: 'Control de la continencia y la defecación mediante la acción coordinada del esfínter anal interno (tono involuntario) y externo (contracción voluntaria). La zona de transición actúa como sensor sensorial que discrimina entre gas, líquido y sólido, permitiendo una respuesta evacuadora apropiada.'
      },
    ]
  },
  {
    id: 'reproductivo-femenino',
    name: 'Aparato Reproductor Femenino',
    shortName: 'Rep. Femenino',
    description: 'Estructuras ováricas, endometriales y mamarias en sus distintas fases hormonales y funcionales.',
    icon: '🌸',
    color: 'from-rose-400 to-pink-600',
    accentColor: '#f43f5e',
    softColor: 'rgba(244, 63, 94, 0.10)',
    borderColor: 'rgba(244, 63, 94, 0.25)',
    laminas: [
      {
        id: 'ovario-foliculos',
        nombre: 'Ovario — Folículos Ováricos',
        imagen: '/assets/reproductivo-f-ovario.jpg',
        estructura: 'El ovario posee una corteza con estroma fibroblástico y folículos en distintos estadios: folículos primordiales (ovocito rodeado de células foliculares aplanadas), folículos primarios unilaminar y multilaminar (células granulosas cúbicas y zona pelúcida), folículos secundarios o antrales (antro lleno de liquor folicular, teca interna vascularizada y teca externa fibrosa) y folículo de Graaf maduro. La médula contiene vasos sanguíneos y tejido conectivo laxo.',
        funcion: 'Ovogénesis: producción y maduración de los ovocitos hasta la ovulación. Esteroidogénesis: las células de la granulosa sintetizan estradiol (estimuladas por FSH) en cooperación con la teca interna (que produce andrógenos bajo LH). El cuerpo lúteo post-ovulatorio secreta progesterona y estradiol para preparar el endometrio para la implantación.'
      },
      {
        id: 'utero-endometrio',
        nombre: 'Útero — Fases del Endometrio',
        imagen: '/assets/reproductivo-f-endometrio.jpg',
        estructura: 'El endometrio se divide en capa funcional (estrato espongioso + compacto) y capa basal. Fase proliferativa (días 5–14): epitelio simple cilíndrico, glándulas tubulares rectas, estroma denso, aumento mitótico bajo influencia de estrógenos. Fase secretora (días 15–28): glándulas tortuosas con vacuolas basales y apicales, estroma edematoso, arterias espirales prominentes bajo progesterona. Fase menstrual: necrosis isquémica de la capa funcional y descamación.',
        funcion: 'Preparar el lecho para la implantación del blastocisto: las glándulas endometriales secretan glucógeno y glucoproteínas nutritivas ("leche uterina"). La vascularización espiral asegura el aporte de nutrientes al embrión en las primeras semanas. La menstruación elimina la capa funcional no utilizada si no hay fertilización.'
      },
      {
        id: 'cuello-uterino',
        nombre: 'Cuello Uterino',
        imagen: '/assets/reproductivo-f-cuello-uterino.jpg',
        estructura: 'El endocérvix (canal cervical) está revestido por epitelio simple cilíndrico mucosecretor con glándulas cervicales ramificadas; puede formar quistes de Naboth (glándulas obstruidas). El ectocérvix (porción vaginal del cérvix) está cubierto por epitelio escamoso estratificado no queratinizado. La lámina propia es densa en colágeno. El estroma cervical carece de músculo liso predominante; es mayoritariamente tejido fibroconectivo.',
        funcion: 'Barrera mucosa protectora del útero frente a microorganismos. El moco cervical varía con el ciclo: filante y permeable al esperma en la ovulación (estrógenos), y espeso e impermeable en la fase lútea (progesterona). El cuello se dilata durante el parto para permitir el paso del feto.'
      },
      {
        id: 'union-escamo-columnar',
        nombre: 'Unión Escamo-Columnar',
        imagen: '/assets/reproductivo-f-union-escamo-columnar.jpg',
        estructura: 'Zona de transición abrupta entre el epitelio escamoso estratificado del ectocérvix y el epitelio simple cilíndrico del endocérvix. La ubicación de esta unión (zona de transformación) migra a lo largo de la vida en respuesta a cambios hormonales. Histológicamente se observan ambos tipos epiteliales en íntima proximidad, con posibles focos de metaplasia escamosa (células de reserva que reemplazan el cilíndrico).',
        funcion: 'Zona biológicamente activa de metaplasia fisiológica. Su importancia clínica es máxima: es el sitio preferencial de infección por el VPH y origen del carcinoma escamoso de cérvix y del adenocarcinoma cervical. La citología (Papanicolaou) y la colposcopia están dirigidas específicamente a vigilar esta zona.'
      },
      {
        id: 'vagina',
        nombre: 'Vagina',
        imagen: '/assets/reproductivo-f-vagina.jpg',
        estructura: 'Revestida por epitelio escamoso estratificado no queratinizado rico en glucógeno (influenciado por estrógenos). Carece de glándulas propias; la lubricación proviene de la transudación vascular y de las glándulas de Bartolino. La lámina propia es densa con plexos venosos. La muscular está formada por haces de músculo liso entrelazados. La adventicia fibroelástica conecta con las estructuras pélvicas vecinas.',
        funcion: 'Canal de parto y órgano copulador. El glucógeno del epitelio es metabolizado por el Lactobacillus acidophilus a ácido láctico, manteniendo un pH ácido (3,5–4,5) que inhibe el crecimiento de patógenos. El epitelio grueso resiste el trauma mecánico del coito y el parto.'
      },
      {
        id: 'glandula-mamaria',
        nombre: 'Glándula Mamaria',
        imagen: '/assets/reproductivo-f-mama.jpg',
        estructura: 'Glándula sudorípara apocrina modificada, de tipo tubuloalveolar compuesta. En reposo: conductos revestidos por epitelio cúbico bistratificado (célula luminal + célula mioepitelial basal) con escasos alvéolos y abundante tejido fibroadiposo (estroma). En lactancia: alvéolos bien desarrollados con células secretoras cilíndricas con gránulos apicales de caseína y gotículas lipídicas; las células mioepiteliales se contraen bajo oxitocina.',
        funcion: 'Producción y secreción de leche materna, que contiene proteínas (caseína, lactoalbúmina), lípidos, lactosa, IgA secretora, lisozima, lactoferrina y factores de crecimiento esenciales para el neonato. La prolactina estimula la síntesis de leche; la oxitocina provoca la eyección láctea por contracción mioepitelial.'
      },
    ]
  },
  {
    id: 'reproductivo-masculino',
    name: 'Aparato Reproductor Masculino',
    shortName: 'Rep. Masculino',
    description: 'Histología de las gónadas masculinas, vías espermáticas y glándulas accesorias.',
    icon: '🔬',
    color: 'from-blue-400 to-indigo-600',
    accentColor: '#6366f1',
    softColor: 'rgba(99, 102, 241, 0.10)',
    borderColor: 'rgba(99, 102, 241, 0.25)',
    laminas: [
      {
        id: 'testiculo',
        nombre: 'Testículo — Túnica Albugínea',
        imagen: '/assets/reproductivo-m-testiculo.jpg',
        estructura: 'La túnica albugínea es una cápsula de tejido conectivo denso irregular rica en colágeno y fibroblastos, con escasas fibras musculares lisas. Desde ella parten los tabiques (septos) que dividen el parénquima en ~250 lobulillos, cada uno con 1–4 túbulos seminíferos. Los túbulos seminíferos están revestidos por el epitelio seminífero complejo: células de Sertoli (sustentaculares, columnares, unidas por complejos de unión que forman la barrera hematotesticular) y células germinales en distintos estadios (espermatogonias, espermatocitos I y II, espermátidas, espermatozoides). En el intersticio, células de Leydig (poliédricas, citoplasma eosinófilo, cristaloides de Reinke).',
        funcion: 'Espermatogénesis: producción continua de espermatozoides desde la pubertad hasta la vejez. La barrera hematotesticular (uniones oclusivas de Sertoli) protege a las células haploides de la autoinmunidad. Las células de Leydig sintetizan testosterona bajo estímulo de la LH, necesaria para la espermatogénesis y los caracteres sexuales secundarios.'
      },
      {
        id: 'epididimo',
        nombre: 'Epidídimo',
        imagen: '/assets/reproductivo-m-epididimo.jpg',
        estructura: 'Único túbulo muy enrollado (6 metros si se estira) revestido por epitelio pseudoestratificado cilíndrico con estereocilios (microvellosidades largas e inmóviles, no cilios). Las células principales son altas con estereocilios; las células basales son pequeñas y redondeadas. Una fina capa de músculo liso rodea el túbulo (más gruesa en la cola). El intersticio contiene tejido conectivo con capilares y nervios.',
        funcion: 'Maduración espermática: los espermatozoides recién producidos son inmóviles e infértiles. Durante el tránsito de 10–14 días a lo largo del epidídimo adquieren motilidad progresiva y capacidad fertilizante gracias a cambios en proteínas de membrana, glicoproteínas y fosfolípidos. La cola almacena los espermatozoides maduros hasta la eyaculación.'
      },
      {
        id: 'cordon-espermatico',
        nombre: 'Cordón Espermático',
        imagen: '/assets/reproductivo-m-cordon.jpg',
        estructura: 'Estructura cilíndrica que contiene: conducto deferente (epitelio pseudoestratificado cilíndrico con estereocilios, muscular de tres capas: interna longitudinal, media circular, externa longitudinal), arteria testicular (pared gruesa elástica), plexo venoso pampiniforme (venas de pared delgada), vasos linfáticos, nervios autónomos y restos del proceso vaginal. Todo envuelto por el músculo cremáster (estriado) y fascias derivadas de la pared abdominal.',
        funcion: 'Transporta espermatozoides desde el epidídimo hacia la uretra (conducto deferente) y aloja la vascularización del testículo. El plexo pampiniforme actúa como intercambiador de calor contracorriente, enfriando la sangre arterial para mantener el testículo ~2°C por debajo de la temperatura corporal, condición indispensable para la espermatogénesis normal.'
      },
      {
        id: 'prostata',
        nombre: 'Próstata — Cuerpos Amiláceos',
        imagen: '/assets/reproductivo-m-prostata.jpg',
        estructura: 'Glándula tubuloalveolar compuesta con epitelio secretor cúbico o cilíndrico bajo (variable según zona); células basales pequeñas aplanadas sobre la membrana basal. Los alvéolos drenan en conductos que desembocan en la uretra prostática. El estroma fibromuscular es abundante (músculo liso y colágeno). Los cuerpos amiláceos (corpora amylacea) son concreciones laminares eosinófilas PAS positivas de glucoproteínas condensadas en la luz alveolar; aumentan con la edad.',
        funcion: 'Produce el líquido prostático (20–30% del semen): contiene zinc (bacteriostático), ácido cítrico, fosfatasa ácida, antígeno prostático específico (PSA, serinoproteasa que licúa el coágulo seminal) y espermina. El líquido alcalino neutraliza la acidez vaginal y protege los espermatozoides, favoreciendo su supervivencia y motilidad.'
      },
      {
        id: 'pene',
        nombre: 'Pene',
        imagen: '/assets/reproductivo-m-pene.jpg',
        estructura: 'Tres cuerpos cilíndricos: dos cuerpos cavernosos dorsales (trabéculas de músculo liso y tejido conectivo delimitando sinusoides vasculares, envueltos por la túnica albugínea densa) y un cuerpo esponjoso ventral (trabéculas más finas, sinusoides más amplios, rodeando la uretra esponjosa). La uretra peneana está revestida por epitelio pseudoestratificado cilíndrico, excepto en la fosa navicular (epitelio escamoso estratificado). La piel es fina y laxa, con escasos folículos y glándulas sebáceas prepuciales (glándulas de Tyson).',
        funcion: 'Órgano copulador y último segmento de la vía urinaria. La erección resulta del relajamiento del músculo liso trabecular (mediado por NO), que permite el llenado de los sinusoides y la compresión de las venas emisarias contra la túnica albugínea. La eyaculación propulsa el semen a través de la uretra por contracciones rítmicas musculares.'
      },
    ]
  },
  {
    id: 'urinario',
    name: 'Aparato Urinario',
    shortName: 'Urinario',
    description: 'Unidades filtrantes renales, vías excretoras y morfología vesical.',
    icon: '💧',
    color: 'from-cyan-400 to-teal-600',
    accentColor: '#0d9488',
    softColor: 'rgba(13, 148, 136, 0.10)',
    borderColor: 'rgba(13, 148, 136, 0.25)',
    laminas: [
      {
        id: 'vejiga',
        nombre: 'Vejiga Urinaria',
        imagen: '/assets/urinario-vejiga.jpg',
        estructura: 'Epitelio de transición (urotelio) compuesto por 3–6 capas de células: capa basal (cúbicas), capas intermedias y capa superficial de "células en cúpula" o umbrella cells (grandes, binucleadas, con placa apical de uroplacinas y fusíformas vesículas subapicales). Vacía: urotelio grueso con cúpulas prominentes. Distendida: urotelio adelgazado a 2–3 capas. La lámina propia es fibroelástica con el músculo de la muscularis mucosae. La muscular (detrusor): tres capas entrelazadas de músculo liso. Serosa peritoneal en cara superior.',
        funcion: 'Almacenamiento de orina (capacidad 400–600 ml) gracias a la distensibilidad del urotelio y del músculo detrusor relajado. Las uroplacinas de las células umbrella forman una barrera impermeable que impide la reabsorción de solutos urinarios tóxicos hacia la sangre. La micción se produce por contracción del detrusor y relajación de los esfínteres uretrales.'
      },
      {
        id: 'rinon-corpusculo',
        nombre: 'Riñón — Corpúsculo Renal',
        imagen: '/assets/urinario-rinon.jpg',
        estructura: 'El corpúsculo renal (de Malpighi) comprende el glomérulo y la cápsula de Bowman. Glomérulo: ovillo de capilares fenestrados (sin diafragma, poro 70–100 nm) apoyados en células mesangiales y membrana basal glomerular (MBG) trilaminar (láminas raras interna y externa + lámina densa). Cápsula de Bowman: hoja parietal (epitelio simple plano) y hoja visceral (podocitos con pedicelos entrelazados separados por hendiduras de filtración de 25 nm, tapizadas por nefrina). El espacio urinario comunica con el túbulo proximal.',
        funcion: 'Ultrafiltración del plasma: las tres capas (endotelio fenestrado, MBG con heparán sulfato, hendiduras de filtración con nefrina) actúan como barrera selectiva de tamaño y carga, permitiendo el paso de agua, iones y moléculas pequeñas (<70 kDa, neutras) pero reteniendo proteínas plasmáticas y células sanguíneas. Se producen ~180 litros de ultrafiltrado glomerular al día.'
      },
      {
        id: 'glomerulo-bowman-macula',
        nombre: 'Glomérulo, Cápsula de Bowman y Mácula Densa',
        imagen: '/assets/urinario-glomerulo-macula.jpg',
        estructura: 'La mácula densa es un segmento especializado de la pared del túbulo contorneado distal (TCD) adyacente al polo vascular del glomérulo. Está formada por células epiteliales columnar-cúbicas altas, núcleos apicales y densamente empaquetados, con escaso citoplasma basolateral y sin borde en cepillo. Forma parte del aparato yuxtaglomerular junto con las células yuxtaglomerulares (células mioides granulares de la arteriola aferente, productoras de renina) y las células del mesangio extraglomerular (de Goormaghtigh o lacis).',
        funcion: 'La mácula densa actúa como quimiorreceptor que monitoriza la concentración de NaCl en el TCD. Cuando el NaCl disminuye (indicando bajo volumen o baja presión de filtración), señaliza a las células yuxtaglomerulares para que liberen renina, iniciando la cascada renina-angiotensina-aldosterona (SRAA) y regulando así la presión arterial y la tasa de filtración glomerular (retroalimentación tubuloglomerular).'
      },
      {
        id: 'uretra',
        nombre: 'Uretra',
        imagen: '/assets/urinario-uretra.jpg',
        estructura: 'La uretra varía histológicamente según el segmento. Uretra femenina: epitelio de transición en la porción proximal, que se transforma en pseudoestratificado cilíndrico en la porción media y escamoso estratificado en la porción distal. Uretra masculina (prostática): epitelio de transición; uretra membranosa y esponjosa: pseudoestratificado cilíndrico con islas de epitelio escamoso (fosa navicular: escamoso estratificado). La lámina propia es fibroelástica con plexos venosos y glándulas de Littré (mucosas, uretra esponjosa).',
        funcion: 'Conducto excretor común para orina y (en el varón) semen. El epitelio resistente y las glándulas de Littré producen moco protector. En la mujer, la corta longitud (~4 cm) explica la mayor vulnerabilidad a infecciones ascendentes (cistitis). El esfínter uretral externo (músculo estriado) permite el control voluntario de la micción.'
      },
    ]
  },
  {
    id: 'ojo',
    name: 'Ojo',
    shortName: 'Ojo',
    description: 'Capas ópticas y estructuras refractivas del globo ocular desde la córnea hasta la retina.',
    icon: '👁️',
    color: 'from-violet-400 to-purple-700',
    accentColor: '#8b5cf6',
    softColor: 'rgba(139, 92, 246, 0.10)',
    borderColor: 'rgba(139, 92, 246, 0.25)',
    laminas: [
      {
        id: 'cornea',
        nombre: 'Córnea',
        imagen: '/assets/ojo-cornea.jpg',
        estructura: 'Cinco capas de anterior a posterior: (1) Epitelio anterior: escamoso estratificado no queratinizado de 5–6 capas con células basales cúbicas, aladas y superficiales planas; microvellosidades apicales y complejos de unión que anclan la película lagrimal. (2) Membrana de Bowman: capa acelular de fibrillas de colágeno I aleatoriamente orientadas. (3) Estroma: 90% del espesor, laminillas de colágeno I y V con espaciado ultraregular (λ/2) que confiere transparencia, con queratocitos fusiformes. (4) Membrana de Descemet: membrana basal gruesa del endotelio, rica en colágeno IV y laminina. (5) Endotelio: monoestrato de células hexagonales planas con abundantes mitocondrias y Na⁺/K⁺-ATPasa.',
        funcion: 'Proporciona ~2/3 del poder refractivo total del ojo (+43 dioptrías) gracias a su curvatura y al cambio de índice de refracción aire-córnea. La avasculariedad (nutrición por humor acuoso y lágrima) y la organización ultraregular de colágeno garantizan la transparencia. El endotelio mantiene la deshidratación estromal activamente; si falla, la córnea se edematiza y opacifica.'
      },
      {
        id: 'retina',
        nombre: 'Retina',
        imagen: '/assets/ojo-retina.jpg',
        estructura: 'Diez capas de exterior a interior: (1) Epitelio pigmentario (EPR): células cúbicas con melanosoma que fagocitan los discos membranosos externos de los fotorreceptores. (2) Capa de fotorreceptores: segmentos externos e internos de conos (visión fotópica y cromática, concentrados en fóvea) y bastones (visión escotópica, periféricos). (3) Membrana limitante externa. (4) Nuclear externa (somas de fotorreceptores). (5) Plexiforme externa (sinapsis fotorreceptor→bipolares). (6) Nuclear interna (bipolares, horizontales, amacrinas, células de Müller). (7) Plexiforme interna (sinapsis bipolares→ganglionares). (8) Ganglionar. (9) Fibras del nervio óptico. (10) Membrana limitante interna.',
        funcion: 'Transducción de la energía lumínica en señales nerviosas. Los fotorreceptores contienen opsinas: rodopsina (bastones) y fotopsinas (conos L/M/S). La fototransducción activa una cascada de GMPc que cierra canales iónicos e hiperpolariza la célula. La señal se procesa en los circuitos retinianos (integración espacial, contraste, movimiento) antes de enviarse al cerebro por el nervio óptico (II par craneal).'
      },
      {
        id: 'cristalino',
        nombre: 'Cristalino',
        imagen: '/assets/ojo-cristalino.jpg',
        estructura: 'Lente biconvexa avascular y transparente encapsulada por una cápsula elástica de colágeno IV y laminina. Bajo la cápsula anterior: epitelio simple cúbico (células epiteliales del cristalino). En el ecuador, las células epiteliales se diferencian en fibras del cristalino: células muy elongadas, anucleadas en la madurez, llenas de cristalinas (α, β, γ), proteínas con alto índice de refracción y muy compactadas. Las fibras más antiguas forman el núcleo (más rígido); las más jóvenes forman la corteza.',
        funcion: 'Proporciona ~+20 dioptrías ajustables al sistema óptico ocular. La acomodación se logra variando la curvatura del cristalino: cuando el músculo ciliar se contrae, las zónulas se relajan y el cristalino adopta una forma más esférica (mayor potencia, visión cercana). Con la edad, las cristalinas se modifican y el núcleo se endurece (presbicia), y su oxidación causa opacificación (catarata).'
      },
    ]
  },
];

export const getSystemById = (id) => systems.find(s => s.id === id);
export const getLaminaById = (systemId, laminaId) => {
  const system = getSystemById(systemId);
  return system?.laminas.find(l => l.id === laminaId);
};
