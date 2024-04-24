const genreMoods = {
  euphoric: ['pop', 'urbano latino', 'hip hop', 'trap latino', 'reggaeton', 'dance pop', 'pop rap', 'latin pop', 'trap', 'k-pop', 'canadian pop', 'pop dance', 'edm', 'uk pop', 'art pop', 'atl hip hop', 'southern hip hop', 'reggaeton colombiano', 'french hip hop', 'colombian pop', 'mexican pop', 'canadian hip hop', 'j-pop', 'indonesian pop', 'singer-songwriter pop', 'new wave pop', 'german hip hop', 'pop urbaine', 'latin alternative', 'k-pop boy group', 'latin arena pop', 'italian pop', 'k-pop girl group', 'modern country pop', 'electro house', 'latin hip hop', 'pop punk', 'pop rock', 'latin rock', 'punjabi pop', 'trap argentino', 'uk dance', 'slap house', 'indie pop', 'house', 'conscious hip hop', 'east coast hip hop', 'turkish pop', 'bedroom pop', 'desi pop', 'italian hip hop', 'post-teen pop', 'viral pop', 'spanish pop', 'desi hip hop', 'hip pop', 'puerto rican pop', 'german pop', 'miami hip hop', 'sertanejo pop', 'nigerian pop', 'argentine hip hop', 'dark trap', 'latin viral pop', 'detroit hip hop', 'italian adult pop', 'underground hip hop', 'mexican hip hop', 'progressive electro house', 'synthpop', 'metropopolis', 'europop', 'progressive house', 'tropical house', 'chamber pop', 'dance rock', 'polish hip hop', 'trap brasileiro', 'australian pop', 'uk hip hop', 'electropop', 'swedish pop', 'reggaeton flow', 'pop nacional', 'folk-pop', 'french pop', 'lgbtq+ hip hop', 'memphis hip hop', 'trap triste', 'alternative hip hop', 'pop soul', 'dutch house', 'turkish hip hop', 'queens hip hop', 'mandopop', 'electronica', 'trap italiana', 'pop reggaeton', 'japanese teen pop', 'brazilian hip hop', 'indie poptimism', 'dream pop', 'neo-synthpop', 'barbadian pop', 'eurodance', 'hardcore hip hop', 'australian dance', 'neon pop punk', 'trap boricua', 'pop venezolano', 'latin christian', 'indonesian pop rock', 'russian hip hop', 'spanish hip hop', 'dancehall', 'trap queen', 'modern indie pop', 'tamil hip hop', 'britpop', 'baroque pop', 'pop argentino', 'trance', 'turkish trap', 'thai pop', 'sophisti-pop', 'punjabi hip hop', 'polish trap', 'socal pop punk', 'candy pop', 'tamil pop', 'atl trap', 'north carolina hip hop', 'tennessee hip hop', 'afropop', 'cumbia pop', 'rap latina', 'spanish pop rock', 'dutch hip hop', 'alternative dance', 'v-pop', 'chill house', 'australian hip hop', 'dutch edm', 'acoustic pop', 'pop flamenco', 'dutch pop', 'classic italian pop', 'indie pop rap', 'pop r&b', 'classic country pop', 'danish pop', 'hyperpop', 'pop emo', 'latin worship', 'german dance', 'pop edm', 'arab pop', 'tech house', 'filter house', 'jazz pop', 'swedish hip hop', 'turkish alt pop', 'electro latino', 'shimmer pop', 'country pop', 'nigerian hip hop', 'russian pop', 'noise pop', 'canadian trap', 'kentucky hip hop', 'ohio hip hop', 'la pop', 'swedish trap pop', 'french indie pop', 'hindi hip hop', 'ambient pop', 'stutter house', 'pinoy hip hop', 'czsk hip hop', 'swedish electropop', 'classic j-pop', 'polish pop', 'deep house', 'uk alternative pop', 'cantopop', 'egyptian pop', 'norwegian pop', 'deep underground hip hop', 'electronic trap', 'classic pakistani pop', 'trap funk', 'pop rock brasileiro', 'bhojpuri pop', 'scandipop', 'belgian edm', 'classic swedish pop', 'pakistani hip hop', 'instrumental hip hop', 'c-pop', 'old school atlanta hip hop', 'taiwan pop', 'power pop', 'russian trap', 'nz pop', 'gujarati pop', 'musica popular colombiana', 'edmonton indie', 'dutch rap pop', 'golden age hip hop', 'greek trap', 'hamburg hip hop', 'pop rap brasileiro', 'venezuelan hip hop', 'deep euro house', 'pop lgbtq+ brasileira', 'bass house', 'electro', 'operatic pop', 'spanish indie pop', 'vietnamese hip hop', 'p-pop', 'indie hip hop', 'pop house', 'bubblegum pop', 'irish pop', 'danish hip hop', 'malaysian pop', 'etherpop', 'funk pop', 'chinese viral pop', 'australian electropop', 'hip house', 'dancefloor dnb', 'korean pop', 'dance-punk', 'chill pop', 'italian underground hip hop', 'pop romantico', 'j-poprock', 'old school hip hop', 'romanian pop', 'gauze pop', 'alternative pop rock', 'finnish pop', 'desi trap', 'reggaeton chileno', 'finnish hip hop', 'experimental pop', 'belgian hip hop', 'modern dream pop', 'czech hip hop', 'south carolina hip hop', 'trap mexicano', 'albanian hip hop', 'sunshine pop', 'disco house', 'modern alternative pop', 'social media pop', 'brazilian edm', 'detroit trap', 'greek pop', 'israeli pop', 'gaming edm', 'panamanian pop', 'czech pop', 'swedish trap', 'political hip hop', 'albanian pop', 'french synthpop', 'russian dance', 'greek hip hop', 'trap chileno', 'reggaeton mexicano', 'italian indie pop', 'nyc pop', 'uk alternative hip hop', 'italo dance', 'polish viral pop', 'brill building pop', 'oakland hip hop', 'modern power pop', 'hungarian pop', 'russian alt pop', 'minnesota hip hop', 'latin talent show', 'indonesian pop punk', 'trancecore', 'dutch trance', 'christian hip hop', 'persian pop', 'pop electronico', 'finnish dance pop', 'deep groove house', 'haryanvi pop', 'belgian pop', 'hip hop tuga', 'shiver pop', 'canadian electronic', 'argentine telepop', 'pakistani pop', 'ukrainian pop', 'colombian hip hop', 'traprun', 'seattle hip hop', 'pinoy trap', 'haryanvi hip hop', 'diva house', 'intelligent dance music', 'drumless hip hop', 'canadian pop punk', 'indonesian folk pop', 'j-pop boy group', 'japanese electropop', 'swedish synthpop', 'hawaiian hip hop', 'classic mandopop', 'vocal house', 'mainland chinese pop', 'trap soul', 'electronica argentina', 'korean city pop', 'moroccan pop', 'urdu hip hop', 'jamaican dancehall', 'swedish idol pop', 'psychedelic hip hop', 'uplifting trance', 'float house', 'swedish indie pop', 'experimental hip hop', 'arabic hip hop', 'nashville hip hop', 'south african pop', 'bass trap', 'progressive trance', 'dark pop', 'odia pop', 'trap colombiano', 'teen pop', 'trap baiano', 'canadian latin', 'bubblegum dance', 'antiviral pop', 'deep tropical house', 'german trap', 'trap catala', 'australian house', 'bow pop', 'texas latin rap', 'thai indie pop', 'austropop', 'swedish eurodance', 'singaporean pop', 'hypnagogic pop', 'g-house', 'turkish trap pop', 'lebanese pop', 'portuguese pop', 'j-pop girl group', 'electronic rock', 'chill abstract hip hop', 'latin afrobeat', 'classic colombian pop', 'proto-hyperpop', 'electro swing', 'pop folk', 'deep german hip hop', 'classic city pop', 'classic russian pop', 'turkish deep house', 'stomp pop', 'ghanaian pop', 'latin jazz', 'hk-pop', 'classic arab pop', 'boston hip hop', 'romanian trap', 'trap carioca', 'bitpop', 'christian pop', 'classic uk pop', 'indie electropop', 'deep disco house', 'pop violin', 'nederpop', 'reggaeton cristiano', 'afghan pop', 'abstract hip hop', 'german pop rock', 'mississippi hip hop', 'future house', 'dark synthpop', 'manchester hip hop', 'organic electronic', 'pop nacional antigas', 'ghanaian hip hop', 'trap venezolano', 'traphall', 'belgian dance', 'cancion infantil latinoamericana', 'detroit trap brasileiro', 'thai hip hop', 'egyptian trap', 'asian american hip hop', 'swedish pop rap', 'bubble trance', 'pop virale italiano', 'tontipop', 'singaporean mandopop', 'bronx hip hop', 'electro-pop francais', 'egyptian hip hop', 'german house', 'electropowerpop', 'japanese alternative pop', 'hamburg electronic', 'organic house', 'indonesian idol pop', 'classic cantopop', 'swedish tropical house', 'bulgarian pop', 'virginia hip hop', 'thai trap', 'pacific islands pop', 'latin metal', 'canadian electropop', 'indian edm', 'okinawan pop', 'christian trap', 'buffalo hip hop', 'kazakh pop', 'belly dance', 'minimal tech house', 'icelandic pop', 'classic indo pop', 'australian trap', 'south african hip hop', 'austrian pop', 'transpop', 'japanese trap', 'channel pop', 'norwegian pop rap', 'indonesian lo-fi pop', 'harlem hip hop', 'danish pop rock', 'pinoy city pop', 'uk pop punk', 'chill dream pop', 'classic turkish pop', 'uk house', 'psychedelic trance', 'vapor pop', 'classic venezuelan pop', 'kazakh hip hop', 'karadeniz pop', 'hungarian hip hop', 'indonesian hip hop', 'mexican pop punk', 'romanian house', 'viral trap', 'classic danish pop', 'classic french pop', 'russian electronic', 'magyar trap', 'indonesian viral pop', 'norwegian hip hop', 'dancehall queen', 'south african house', 'viral afropop', 'pop minang', 'deep turkish pop', 'classic house', 'classic israeli pop', 'kosovan pop', 'bc underground hip hop', 'uk dancehall', 'kurdish pop', 'danish electronic', 'deep latin christian', 'croatian pop', 'lo-fi house', 'latinx alternative', 'central asian hip hop', 'latin classical', 'deep pop edm', 'jangle pop', 'turkish edm', 'balkan trap', 'classic peruvian pop', 'indonesian city pop', 'pop teen brasileiro', 'pop chileno', 'arab electronic', 'microhouse', 'portland hip hop', 'ukrainian viral pop', 'west bengali pop', 'chicago house', 'vietnamese trap', 'trap pesado', 'persian hip hop', 'trap dominicano', 'malayalam pop', 'electrofox', 'italian pop rock', 'german trance', 'pop quebecois', 'nordic house', 'australian alternative pop', 'volkspop', 'french tech house', 'japanese pop punk', 'balkan hip hop', 'hip hop quebecois', 'uk experimental electronic', 'malaysian mandopop', 'japanese viral pop', 'trap peruano', 'marathi pop', 'trap antillais', 'trap tuga', 'jamaican hip hop', 'japanese old school hip hop', 'taiwan hip hop', 'peruvian hip hop', 'finnish trap', 'pinoy pop punk', 'gregorian dance', 'assamese pop', 'electro jazz', 'latin viral rap', 'progressive psytrance', 'russian edm', 'ecuadorian pop', 'vintage french electronic', 'texas pop punk', 'slovak hip hop', 'israeli hip hop', 'industrial hip hop', 'russian hyperpop', 'nepali pop', 'sinhala pop', 'classic thai pop', 'chinese idol pop', 'kansas city hip hop', 'classic polish pop', 'saxophone house', 'south african trap', 'nottingham hip hop', 'uk tech house', 'old school dancehall', 'sacramento hip hop', 'korean old school hip hop', 'chinese hip hop', 'city pop', 'jewish pop', 'classic belgian pop', 'popwave', 'psychedelic pop', 'classic norwegian pop', 'classic persian pop', 'k-pop ballad', 'afro house', 'lithuanian pop', 'flint hip hop', 'witch house', 'tribal house', 'space age pop', 'uzbek pop', 'popping', 'swiss pop', 'himachali pop', 'braindance', 'latin funk', 'trance brasileiro', 'czech pop rock', 'australian underground hip hop', 'slovak pop', 'south african pop dance', 'birmingham hip hop', 'emo trap en espanol', 'thai folk pop', 'bruneian pop', 'latin soundtrack', 'cologne hip hop', 'bouncy house', 'dominican pop', 'classic czech pop', 'hyperpop francais', 'classic greek pop', 'electroclash', 'mande pop', 'ukrainian hip hop', 'latintronica', 'german hyperpop', 'bosnian pop', 'lithuanian edm', 'dutch tech house', 'electro bailando', 'belarusian hip hop', 'swedish dancehall', 'ambient house', 'deep tech house', 'pop worship', 'moldovan pop', 'syrian pop', 'classic finnish pop', 'tanzanian pop', 'lithuanian electronic', 'pinoy idol pop', 'funky house', 'russian witch house', 'britpop revival', 'acid house', 'trap beats', 'nz hip hop', 'finnish edm', 'underground power pop', 'polish old school hip hop', 'classic punjabi pop', 'japanese pop rap', 'garhwali pop', 'canadian old school hip hop', 'hyperpop en espanol', 'irish hip hop', 'japanese indie pop', 'classic malaysian pop', 'bangla pop', 'trap cristao', 'malayalam hip hop', 'jazz house', 'baltimore hip hop', 'indonesian edm', 'indiana hip hop', 'futurepop', 'estonian hip hop', 'russian viral pop', 'burmese pop', 'twee pop', 'vietnamese idol pop', 'mexican edm', 'scottish electronic', 'classic bangla pop', 'kurdish hip hop', 'latin house', 'japanese dance pop', 'serbian hip hop', 'russian dance pop', 'leipzig electronic', 'alternative pop', 'palestinian hip hop', 'anime latino', 'chinese electropop', 'kenyan pop', 'thai viral pop', 'brazilian house', 'pop peruano', 'musica popular paraense', 'azeri pop', 'middle east hip hop', 'kannada hip hop', 'italian tech house', 'dream trance', 'collage pop', 'arab trap', 'musica popular mineira', 'swiss hip hop', 'norwegian trap', 'fidget house', 'funky tech house', 'beach house', 'malaysian hip hop', 'taiwan idol pop', 'rajasthani pop', 'ukrainian electronic', 'electro dub', 'latincore', 'igbo pop', 'arkansas hip hop', 'garage pop', 'electro trash', 'progressive trance house', 'bolobedu house', 'spanish synthpop', 'reunion pop', 'latin ska', 'early synthpop', 'hip hop timur', 'classic portuguese pop', 'classic nz pop', 'korean dream pop', 'hong kong hip hop', 'classic k-pop', 'thai teen pop', 'progressive uplifting trance', 'kawaii edm', 'canto popular uruguayo', 'french folk pop', 'sudanese pop', 'power-pop punk', 'classic progressive house', 'tech trance', 'trap metal italiana', 'west coast trap', 'ethiopian pop', 'classic nepali pop', 'kannada pop', 'necrotrap', 'cedm', 'trap maroc', 'lo-fi latino', 'melanesian pop', 'balochi pop', 'estonian pop', 'popgaze', 'bulgarian trap', 'kyrgyz hip hop', 'k-pop reality show', 'hyperpop brasileiro', 'danish indie pop', 'frankfurt electronic', 'malaysian tamil pop', 'hip hop cubano', 'boy pop', 'vintage dutch pop', 'czsk viral pop', 'latvian pop', 'nz electronic', 'persian electronic', 'electro-industrial', 'soulful house', 'turkce trap metal', 'israeli trap', 'bulgarian hip hop', 'south african deep house', 'chicago pop punk', 't-pop girl group', 'canadian house', 'huayno popular', 'swedish electronic', 'slovak trap', 'latin tech house', 'cambodian pop', 'electronic djent', 'industrial pop', 'sudanese hip hop', 'belarusian pop', 'hokkien pop', 'pop cristiano', 'irish electronic', 'indie dream pop', 'danish electropop', 'korean electropop', 'pop ambient', 'classic sinhala pop', 'hard trance', 'garage house', 'indonesian indie pop', 'thai pop rap', 'ugandan pop', 'sichuanese hip hop', 'cypriot pop', 'nagpuri pop', 'tunisian pop', 'palestinian pop', 'vietnamese pop', 'outsider house', 'greek house', 'dutch trap', 'classic icelandic pop', 'zimdancehall', 'tibetan pop', 'dusseldorf electronic', 'pop costarricense', 'croatian hip hop', 'glitch pop', 'russian synthpop', 'samurai trap', 'russian trance', 'slovenian pop', 'austrian hip hop', 'dark progressive house', 'vaportrap', 'experimental house', 'austin hip hop', 'swamp pop', 'brass band pop', 'deep latin alternative', 'munich electronic', 'german indie pop', 'icelandic electronic', 'latvian hip hop', 'piedmont blues', 'swiss house', 'armenian pop', 'musica indigena latinoamericana', 'classic dutch pop', 'amharic pop', 'russian trap metal', 'emo trap italiana', 'swedish house', 'spanish noise pop', 'italian trance', 'vocal trance', "jackin' house", 'speed house', 'sepedi pop', 'korean trap', 'belarusian electronic', 'british dance band', 'tatar pop', 'japanese dream pop', 'sambalpuri pop', 'hungarian edm', 'brisbane hip hop', 'slovenian electronic', 'persian underground hip hop', 'musica popular uruguaya', 'bristol electronic', 'classic hungarian pop', 'deep uplifting trance', 'classic azeri pop', 'spiritual hip hop', 'melodipop', 'classic romanian pop', 'vintage swedish pop', 'alberta hip hop', 'welsh hip hop', 'chasidic pop', 'viral pop brasileiro', 'jordanian pop', 'gothenburg hip hop', 'uyghur pop', 'lithuanian hip hop', 'soviet synthpop', 'bay area hip hop', 'guinean pop', 'pakistani electronic', 'montenegrin pop', 'detroit house', 'german tech house', 'pop paraguayo', 'west australian hip hop', 'ukrainian edm', 'guatemalan pop', 'hyperpop italiano', 'venda pop', 'dancehall colombiano', 'kenyan hip hop', 'icelandic hip hop', 'polish electronica', 'afro house angolano', 'trance mexicano', 'malawian pop', 'png pop', 'syrian hip hop', 'zambian hip hop', 'polynesian hip hop', 'c-pop girl group', 'sorani pop', 'italo house', 'turkish electronic', 'deep acoustic pop', 'lithuanian trap', 'cameroonian pop', 'samoan pop', 'romanian electronic', 'hard house', 'tanzanian hip hop', 'xitsonga pop', 'zambian pop', 'armenian hip hop', 'gambian hip hop', 'trap angolano', 'experimental electronic', 'polish synthpop', 'blues latinoamericano', 'scottish hip hop', 'canadian underground hip hop', 'italian electronica', 'israelite hip hop', 'mewati pop', 'norwegian house', 'musica popular amazonense', 'afrikaans hip hop', 'korean electronic', 'norrlandsk hip hop', 'marwadi pop', 'indian electronic', 'classic korean pop', 'fijian pop', 'dancehall chileno', 'chinese indie pop', 'vinahouse', 'swiss trap', 'cook islands pop', 'math pop', 'classic italian folk pop', 'zim hip hop', 'mongolian hip hop', 'kumaoni pop', 'australian indigenous hip hop', 'khortha pop', 'eritrean pop', 'christian dance', 'kids hip hop', 'ukrainian folk pop', 'macedonian pop', 'igbo trap', 'chhattisgarhi pop', 'gulf hip hop', 'bahamian pop', 'serbian electronic', 'japanese hyperpop', 'magyar retro dance', 'detroit trap en espanol', 'ambient trance', 'pop catracho', 'faroese pop', 'rwandan pop', 'indonesian underground hip hop', 'japanese electronic', 'hmong pop', 'manipuri pop', 'south african soulful deep house', 'solomon islands pop', 'guyanese pop', 'spanish electronic', 'deep progressive trance', 'jewish hip hop', 'cypriot hip hop', 'swedish folk pop', 'deep deep house', 'mongolian pop', 'indie electronica', 'deep progressive house', 'dancehall guyanaise', 'singaporean electronic', 'pashto pop', 'libyan pop', 'northeast indian hip hop', 'acid trance', 'old school hard trance', 'deep soul house', 'indie psych-pop', 'vintage italian pop', 'gambian pop', 'deep brazilian pop', 'finnish pop punk', 'singaporean hip hop', 'vintage cantonese pop', 'popullore jugu', 'electronica chilena', 'somali pop', 'brazilian tech house', 'pop boliviano', 'canadian indigenous hip hop', 'persian trap', 'focus trance', 'russian pop punk', 'japanese edm', 'outer hip hop', 'classic moroccan pop', 'kids dance party', 'surinamese pop', 'classic bulgarian pop', 'mizo pop', 'dancehall mauricien', 'indie pop rock', 'milwaukee hip hop', 'khmer hip hop', 'malagasy pop', 'vispop', 'sierra leonean pop', 'kyrgyz pop', 'malawian hip hop', 'belgian electronic', 'cologne electronic', 'purulia pop', 'irish dance', 'african electronic', 'dark psytrance', 'santali pop', 'indonesian trap', 'german electronica', 'house argentino', 'deep southern trap', 'khandeshi pop', 'vintage chinese pop', 'assyrian pop', 'greenlandic pop', 'pahadi pop', 'south african electronic', 'trap cristiano', 'guidance', 'piano house', 'deep east coast hip hop', 'hip hop reunionnais', 'georgian hip hop', 'dark electro', 'post-punk latinoamericano', 'deep funk house', 'joseon pop', 'grunge pop', 'macedonian hip hop', 'georgian pop', 'taiwan electronic', 'hip hop galsen', 'mexican tech house', 'electronicore', 'atlantic canada hip hop', 'electronica venezuela', 'kashmiri pop', 'cameroonian hip hop', 'west-vlaamse hip hop', 'maluku pop', 'ilocano pop', 'electronica peruana', 'dutch experimental electronic', 'czsk hyperpop', 'hip hop boliviano', 'japanese house', 'sesotho pop', 'modern jangle pop', 'bodo pop', 'myanmar hip hop', 'maine hip hop', 'bangladeshi hip hop', 'estonian electronic', 'iowa hip hop', 'tijuana electronic', 'winnipeg hip hop', 'togolese pop', 'electronica cristiana', 'deep dance pop', 'yemeni pop', 'japanese bedroom pop', 'slovak electronic', 'hausa pop', 'indonesian hyperpop', 'latino comedy', 'finnish electro', 'russian old school hip hop', 'ua trap', 'pinoy edm', 'kansas hip hop', 'adivasi pop', 'kokborok pop', 'melbourne hip hop', 'gabonese pop', 'lounge house', 'native american hip hop', 'sesotho hip hop', 'uzbek hip hop', 'muzica populara', 'perth hip hop', 'italian pop punk', 'old school uk hip hop', 'ethiopian hip hop', 'tigrigna pop', 'beninese pop', 'classic sudanese pop', 'xhosa hip hop', 'goa hip hop', 'surinamese hip hop', 'swedish pop punk', 'russian experimental electronic', 'saraiki pop', 'japanese progressive house', 'czech electronic', 'czsk electropop', 'bulgarian electronic', 'turkmen pop', 'chinese electronic', 'konkani pop', 'lao hip hop', 'classic tunisian pop', 'maltese pop', 'burundian pop', 'nu electro', 'lao pop', 'banjara pop', 'inuit pop', 'spanish electropop', 'boston electronic', 'georgian electronic', 'finnish idol pop', 'taiwanese pop', 'vintage taiwan pop', 'telugu hip hop', 'slovenian hip hop', 'korean hyperpop', 'kashmiri hip hop', 'khasi pop', 'goa trance', 'burkinabe pop', 'hazaragi pop', 'chamorro pop', 'lapland hip hop', 'vietnamese electronic', 'deep psytrance', 'namibian pop', 'latin shoegaze', 'bosnian electronic', 'maltese hip hop', 'trap boliviano', 'marathi hip hop', 'haitian dance', 'chechen pop', 'tibetan hip hop', 'karbi pop', 'bhutanese pop', 'barrelhouse piano', 'tongan pop', 'math rock latinoamericano', 'rwandan hip hop', 'tajik pop', 'power electronics', 'indie fuzzpop', 'seychelles pop', 'folk metal latinoamericano', 'latvian electronic', 'latin surf rock', 'ugandan hip hop', 'pops orchestra', 'macedonian electronic', 'yakut pop', 'brockton hip hop', 'deep eurodance', 'dutch underground hip hop', 'polish experimental electronic', 'classic latvian pop', 'botswana hip hop', 'electroacoustic improvisation', 'karen pop', 'chill-out trance', 'vintage norwegian pop', 'luxembourgian pop', 'diy pop punk', 'iraqi hip hop', 'hypertrance', 'swazi pop', 'classic ukrainian pop', 'trap kreyol', 'cuban electronic', 'libyan hip hop', 'viet edm', 'colombian electronic', 'goa psytrance', 'finnish electronic', 'modern electroacoustic', 'vintage spanish pop', 'south sudanese pop', 'botswana pop', 'oromo pop', 'covertrance', 'classic konkani pop', 'latin american heavy psych', 'irish trap', 'gaddiyali pop', 'luxembourgian hip hop', 'garo pop', 'danish electro', 'classic assamese pop', 'kinnauri pop', 'sinhala edm', 'mising pop', 'glitter trance', 'deep vocal house', 'hakkapop', 'kikuyu pop', 'dogri pop', 'assamese hip hop', 'croatian electronic', 'rongmei pop', 'irish experimental electronic', 'macau pop', 'vapor house', 'electroacoustic composition', 'ladakhi pop', 'alaska hip hop', 'soda pop', 'british electroacoustic', 'latin american classical piano', 'idaho hip hop', 'dutch idol pop', 'bury st edmunds indie', 'latin american baroque', 'tibetan folk pop', 'hip hop mauritanien', 'liberian pop', 'chakma pop', 'turkmen hip hop', 'contra dance', 'mexican electronic', 'zomi pop', 'swazi hip hop', 'deep pop emo', 'maldivian pop', 'post-rock latinoamericano', 'deep neo-synthpop', 'hard dance', 'kamba pop', 'luxembourgian electronic', 'deep latin jazz', 'indonesian electronic', 'deep indie pop', 'cosmic uplifting trance', 'twee indie pop', 'sirmauri pop', 'chip hop', 'dark electro-industrial', 'deep power-pop punk', 'deep deep tech house'],
  sad: ['pov: indie', 'sad sierreno', 'singer-songwriter', 'indietronica', 'indie rock', 'indie folk', 'gen z singer-songwriter', 'indie soul', 'emo rap', 'blues rock', 'melancholia', 'emo', 'sheffield indie', 'brooklyn indie', 'modern blues rock', 'la indie', 'indie anthem-folk', 'lo-fi indie', 'sad rap', 'sad lo-fi', 'irish singer-songwriter', 'indonesian indie', 'jazz blues', 'japanese singer-songwriter', 'oxford indie', 'canadian singer-songwriter', 'indonesian singer-songwriter', 'el paso indie', 'modern indie folk', 'mexican indie', 'electric blues', 'indie r&b', 'blues', 'indie rock italiano', 'australian indie', 'punk blues', 'sacramento indie', 'alternative emo', 'soul blues', 'argentine indie', 'indie garage rock', 'philly indie', 'canadian indie', 'indie surf', 'rome indie', 'turkish singer-songwriter', 'norwegian indie', 'french indietronica', 'indie triste', 'british singer-songwriter', 'indian singer-songwriter', 'japanese emo', 'indian indie', 'kentucky indie', 'christian indie', 'modern blues', 'british blues', 'chicago indie', 'indie game soundtrack', 'acoustic cover', 'hindi indie', 'taiwan singer-songwriter', 'australian indie folk', 'milan indie', 'j-acoustic', 'seattle indie', 'traditional blues', 'brighton indie', 'german indie', 'vancouver indie', 'new jersey indie', 'english indie rock', 'neo-singer-songwriter', 'rebel blues', 'toronto indie', 'indie quebecois', 'british indie rock', 'baltimore indie', 'athens indie', 'indie viet', 'swedish singer-songwriter', 'taiwan indie', 'indiecoustica', 'eau claire indie', 'scottish singer-songwriter', 'anthem emo', 'atlanta indie', 'newcastle nsw indie', 'bandung indie', 'indie punk', 'desi emo rap', 'german singer-songwriter', 'lo-fi emo', 'thai indie rock', 'icelandic indie', 'acoustic opm', 'morelos indie', 'k-indie', 'dutch indie', 'indie liguria', 'veracruz indie', 'acoustic guitar cover', 'vegas indie', 'austindie', 'saskatchewan indie', 'monterrey indie', 'swedish indie rock', 'indie jazz', 'oakland indie', 'russian emo rap', 'indie rock mexicano', 'gothenburg indie', 'boston indie', 'quebec indie', 'cdo indie', 'guadalajara indie', 'scottish indie', 'ann arbor indie', 'midwest emo', 'liverpool indie', 'northern irish indie', 'nashville singer-songwriter', 'piano blues', 'rhythm and blues', 'pinoy indie', 'pinoy singer-songwriter', 'bergamo indie', 'acoustic blues', 'washington indie', 'auckland indie', 'emo rap italiano', 'j-indie', 'chinese indie', 'chinese singer-songwriter', 'chihuahua indie', 'portland indie', 'chilean indie', 'swedish indie folk', 'texas blues', 'murcia indie', 'concepcion indie', 'polish indie', 'cologne indie', 'slc indie', 'indonesian emo', 'belgian indie', 'rochester mn indie', 'victoria bc indie', 'bay area indie', 'chicago blues', 'diy emo', 'australian indie rock', 'emoplugg', 'brisbane indie', 'czsk emo rap', 'bergen indie', 'acoustic rock', 'colombian indie', 'belo horizonte indie', 'korean indie rock', 'vietnamese singer-songwriter', 'emo mexicano', 'german indie folk', 'north east england indie', 'kindie rock', 'nottingham indie', 'albuquerque indie', 'brazilian indie', 'brazilian emo', 'alabama indie', 'malaysian indie', 'australian singer-songwriter', 'singaporean singer-songwriter', 'acoustic chill', 'louisiana blues', '5th wave emo', 'asbury park indie', 'ukrainian indie', 'acoustic punk', 'israeli singer-songwriter', 'san marcos tx indie', 'icelandic singer-songwriter', 'country blues', 'malang indie', 'nashville indie', 'belarusian indie', 'pakistani indie', 'reading indie', 'russian indie', 'indie catala', 'perth indie', 'indie rockism', 'indie extremena', 'swiss indie', 'thai indie', 'leicester indie', 'montreal indie', 'delta blues', 'scottish indie rock', 'pinoy indie rock', 'indonesian indie rock', 'jacksonville indie', 'norwegian singer-songwriter', 'venezuelan indie', 'minneapolis indie', 'yogyakarta indie', 'harmonica blues', 'nepali indie', 'indonesian blues', 'michigan indie', 'pittsburgh indie', 'bristol indie', 'new orleans blues', 'manchester indie', 'malian blues', 'grand rapids indie', 'semarang indie', 'san diego indie', 'hong kong indie', 'tempe indie', 'nantes indie', 'south carolina indie', 'springfield mo indie', 'alaska indie', 'ontario indie', 'japanese indie rock', 'memphis blues', 'oc indie', 'kingston on indie', 'hokkaido indie', 'fremantle indie', 'bogor indie', 'new england emo', 'french indie folk', 'olympia wa indie', 'korean singer-songwriter', 'new delhi indie', 'melbourne indie', 'north carolina indie', 'instrumental acoustic guitar', 'greek indie', 'peruvian indie', 'indie platense', 'cdmx indie', 'channel islands indie', 'orebro indie', 'southern soul blues', 'cape town indie', 'dutch singer-songwriter', 'louisville indie', 'london indie', 'orlando indie', 'jump blues', 'desert blues', 'welsh indie', 'glasgow indie', 'canadian indie folk', 'asheville indie', 'ecuadorian indie', 'irish indie rock', 'indie cordoba', 'socal indie', 'belgian singer-songwriter', 'indie curitibano', 'chinese indie rock', 'manso indie', 'russian indie rock', 'sinhala indie', 'gainesville indie', 'dayton indie', 'irish indie', 'argentine indie rock', 'indie shoegaze', 'cambridgeshire indie', 'bali indie', 'north carolina emo', 'christchurch indie', 'czech singer-songwriter', 'danish indie', 'dublin indie', 'nz singer-songwriter', 'sydney indie', 'okc indie', 'kc indie', 'nz indie', 'turin indie', 'munich indie', 'arunachal indie', 'polish blues', 'omaha indie', 'dutch indie rock', 'israeli indie', 'kyushu indie', 'tulsa indie', 'dalarna indie', 'miami indie', 'deep german indie', 'aussie emo', 'granada indie', 'finnish indie', 'duluth indie', 'telugu indie', 'austrian indie', 'bath indie', 'eugene indie', 'rennes indie', 'manitoba indie', 'denton tx indie', 'emo punk', 'japanese blues', 'indy indie', 'korean indie folk', 'indie emo', 'phoenix indie', 'charlotte nc indie', 'connecticut indie', 'kolkata indie', 'tampa indie', 'rhode island indie', 'denver indie', 'german indie rock', 'indie valenciana', 'swamp blues', 'vermont indie', 'indie rock peruano', 'indie siciliano', 'leeds indie', 'cincinnati indie', 'kent indie', 'polish indie rock', 'new orleans indie', 'nice indie', 'vienna indie', 'malayalam indie', 'fort worth indie', 'hamburg indie', 'indie cristao', 'ohio indie', 'portuguese indie', 'stockholm indie', 'taiwanese indie', 'charlottesville indie', 'kazakh indie', 'utah indie', 'western mass indie', 'dunedin indie', 'birmingham indie', 'lexington ky indie', 'windsor on indie', 'hamilton on indie', 'maine indie', 'indie napoletano', 'experimental indie', 'japanese indie folk', 'ghent indie', 'dallas indie', 'power blues-rock', 'canadian blues', 'lampung indie', 'tamaulipas indie', 'spanish indie folk', 'lebanese indie', 'tamil indie', 'ok indie', 'belgian indie rock', 'indie folk argentino', 'newfoundland indie', 'rochester ny indie', 'york indie', 'idaho indie', 'oaxaca indie', 'dc indie', 'sinaloa indie', 'southampton indie', 'rosario indie', 'slovenian indie', 'devon indie', 'emotional black metal', 'puerto rican indie', 'dominican indie', 'mumbai indie', 'bangladeshi indie', 'newcastle indie', 'tassie indie', 'graz indie', 'warrington indie', 'rva indie', 'garage punk blues', 'buffalo ny indie', 'lafayette indie', 'rogaland indie', 'northeast indian indie', 'uppsala indie', 'mississippi indie', 'sonora indie', 'kansai indie', 'derby indie', 'danish singer-songwriter', 'worcester ma indie', 'lancaster pa indie', 'memphis indie', 'persian sad rap', 'tucson indie', 'euskal indie', 'leipzig indie', 'kelowna bc indie', 'halifax indie', 'lancashire indie', 'columbus ohio indie', 'oth indie', 'czech indie', 'aarhus indie', 'swiss indie folk', 'austin singer-songwriter', 'limerick indie', 'zurich indie', 'hungarian indie', 'swiss singer-songwriter', 'australian blues', 'indie singer-songwriter', 'puglia indie', 'indie folk italiano', 'indie veneto', 'kansas indie', 'edinburgh indie', 'uruguayan indie', 'arkansas indie', 'west virginia indie', 'southern china indie', 'stl indie', 'dutch blues', 'lund indie', 'wyoming indie', 'detroit indie', 'east anglia indie', 'romanian indie', 'spanish indie rock', 'indie rock colombiano', 'norrbotten indie', 'little rock indie', 'north dakota indie', 'brazilian indie rock', 'chattanooga indie', 'german blues', 'pei indie', 'myanmar indie', 'lithuanian indie', 'ottawa indie', 'brazilian blues', 'montana indie', 'luxembourgian indie', 'psychedelic blues-rock', 'caracas indie', 'essex indie', 'wisconsin indie', 'adelaide indie', 'calgary indie', 'albany ny indie', 'indonesian emo rap', 'cleveland indie', 'blues-rock guitar', 'tijuana indie', 'isle of wight indie', 'latvian indie', 'cork indie', 'experimental indie rock', 'bisaya indie', 'emocore', 'kalmar indie', 'croatian indie', 'canberra indie', 'blues mexicano', 'faroese indie', 'emoviolence', 'indie tico', 'indie campechano', 'virginia indie', 'pune indie', 'russian emo', 'knoxville indie', 'bosnian indie', 'bangalore indie', 'cornwall indie', 'brasilia indie', 'london on indie', 'dresden indie', 'pre-war blues', 'oslo indie', 'stuttgart indie', 'malmo indie', 'milwaukee indie', 'sevilla indie', 'slovak indie', 'swedish blues', 'cardiff indie', 'south dakota indie', 'portuguese indie rock', 'northwest china indie', 'singaporean indie', 'baja indie', 'lawrence ks indie', 'hull indie', 'norman ok indie', 'dundee indie', 'estonian indie', 'serbian indie', 'hampton roads indie', 'indie salvadoreno', 'west yorkshire indie', 'scottish indie folk', 'indie michoacano', 'chennai indie', 'coventry indie', 'gospel blues', 'iowa indie', 'north alabama indie', 'uae indie', 'indie cantabria', 'sulawesi indie', 'guam indie', 'swansea indie', 'wellington indie', 'belgian blues', 'finnish blues', 'panamanian indie', 'pittsburgh indie rock', 'greek indie rock', 'italian emo', 'shanghai indie', 'poznan indie', 'surabaya indie', 'triangle indie', 'french emo', 'indie canario', 'dusseldorf indie', 'merida indie', 'hawaiian indie', 'new hampshire indie', 'indiana indie', 'basel indie', 'rotterdam indie', 'salzburg indie', 'frankfurt indie', 'demoscene', 'leon gto indie', 'rio grande do sul indie', 'derry indie', 'galician indie', 'dortmund indie', 'brno indie', 'portsmouth indie', 'fort wayne indie', 'firenze indie', 'swedish emo', 'indie poblano', 'trondheim indie', 'isle of man indie', 'oulu indie', 'indie paraense', 'missouri indie', 'indie boliviano', 'bern indie', 'san antonio indie', 'lombok indie', 'galway indie', 'indie sudcaliforniano', 'kannada indie', 'houston indie', 'svensk indie', 'paraguayan indie', 'armenian indie', 'prague indie', 'baton rouge indie', 'wuhan indie', 'new brunswick indie', 'indie psychedelic rock', 'bulgarian indie', 'indie hidalguense', 'nagaland indie', 'spanish blues', 'indie trujillano', 'indie hidrocalido', 'norwegian blues', 'st petersburg fl indie', 'indie arequipeno', 'classic female blues', 'aberdeen indie', 'kosovan indie', 'macedonian indie', 'cape breton indie', 'umea indie', 'northamptonshire indie', 'italian blues', 'guatemalan indie', 'delaware indie', 'sardinia indie', 'indie asturiana', 'deep indie singer-songwriter', 'blues band', 'indie queretano', 'pontianak indie', 'indie nica', 'normal indie', 'lincoln ne indie', 'bohol indie', 'south borneo indie', 'indie catracho', 'indie tucumano', 'belfast indie', 'musica piemonteisa', 'deep indie rock', 'indie nordeste argentino', 'santa fe indie', 'deep delta blues', 'indie tabasqueno', 'twin cities indie', 'indie emo rock', 'bruneian indie', 'balikpapan indie'],
  peaceful: ['vocal jazz', 'classical', 'lounge', 'easy listening', 'indian instrumental', 'compositional ambient', 'instrumental lullaby', 'jazz', 'neo-classical', 'indonesian jazz', 'contemporary vocal jazz', 'ambient lo-fi', 'classical era', 'smooth jazz', 'background jazz', 'lo-fi jazzhop', 'jazz funk', 'instrumental worship', 'nu jazz', 'early modern classical', 'jazz rap', 'jazz trumpet', 'ambient worship', 'cool jazz', 'soul jazz', 'jazz saxophone', 'dinner jazz', 'new age', 'new age piano', 'ambient folk', 'jazz piano', 'ambient', 'instrumental rock', 'jazz cover', 'jazztronica', 'brazilian jazz', 'jazz guitar', 'jazz fusion', 'japanese classical', 'instrumental funk', 'christmas instrumental', 'polish classical', 'turkish jazz', 'jazz trio', 'new orleans jazz', 'chill lounge', 'neoclassical darkwave', 'instrumental grime', 'jazz boom bap', 'ambient guitar', 'indian classical', 'turkish instrumental', 'icelandic classical', 'contemporary jazz', 'calming instrumental', 'classical drill', 'samba-jazz', 'korean instrumental', 'contemporary classical', 'instrumental post-rock', 'neo classical metal', 'uk contemporary jazz', 'french jazz', 'experimental ambient', 'j-ambient', 'ecm-style jazz', 'canadian classical', 'classical tenor', 'japanese instrumental', 'jazz quartet', 'swedish jazz', 'progressive jazz fusion', 'modern jazz piano', 'organic ambient', 'ukrainian classical', 'experimental classical', 'russian modern classical', 'turkish modern jazz', 'instrumental soul', 'british jazz', 'gypsy jazz', 'czech classical', 'free jazz', 'vintage jazz', 'american contemporary classical', 'british modern classical', 'classical performance', 'norwegian classical', '21st century classical', 'brazilian classical', 'american modern classical', 'modern jazz trio', 'jazz rock', 'classical piano', 'south african jazz', 'instrumental bluegrass', 'instrumental math rock', 'german jazz rap', 'norwegian jazz', 'japanese jazz', 'hindustani classical', 'deep smooth jazz', 'ambient idm', 'italian lounge', 'musica instrumental cristiana', 'acid jazz', 'african-american classical', 'classic japanese jazz', 'argentine ambient', 'space ambient', 'arabic jazz', 'jazz trombone', 'japanese jazz fusion', 'classical guitar', 'german jazz', 'danish modern jazz', 'japanese jazztronica', 'vgm instrumental', 'finnish classical', 'spanish classical', 'avant-garde jazz', 'ska jazz', 'ethio-jazz', 'italian jazz', 'lds instrumental', 'instrumental djent', 'danish jazz', 'jazz mexicano', 'canadian modern jazz', 'jazz clarinet', 'british contemporary classical', 'japanese vocal jazz', 'japanese contemporary classical', 'instrumental stoner rock', 'instrumental surf', 'dark jazz', 'jazz metal', 'ambient psychill', 'jazz double bass', 'jazz drums', 'ambient post-rock', 'ambient techno', 'jazz cubano', 'straight-ahead jazz', 'jazz worship', 'chinese classical piano', 'jazz organ', 'chinese classical performance', 'experimental jazz', 'polish jazz', 'jazzy dnb', 'background jazz product', 'instrumental progressive metal', 'musica evangelica instrumental', 'spiritual jazz', 'caucasian classical', 'nordic contemporary classical', 'jazz vibraphone', 'baltic classical', 'israeli jazz', 'jazz catala', 'australian ambient', 'classical cello', 'brazilian modern jazz', 'hungarian classical performance', 'hindustani instrumental', 'greek contemporary classical', 'israeli classical piano', 'ukrainian classical piano', 'ambient synth', 'taiwan instrumental', 'american 21st century classical', 'west african jazz', 'jazz harp', 'jazz brass', 'ambient country', 'chinese jazz', 'ambient black metal', 'polish contemporary classical', 'ukrainian contemporary classical', 'jazz puertorriqueno', 'future ambient', 'arabic instrumental', 'bossa nova jazz', 'drone ambient', 'nordic ambient', 'irish classical', 'italian contemporary jazz', 'jazz venezolano', 'belgian jazz', 'dutch jazz', 'deep ambient', 'psychedelic jazz fusion', 'classical harp', 'jazz violin', 'belgian modern jazz', 'finnish jazz', 'jazz guitar trio', 'ambient dub techno', 'thai instrumental', 'chinese instrumental', 'norwegian contemporary jazz', 'australian classical', 'jazz orchestra', 'nordic classical piano', 'russian classical piano', 'dark ambient', 'japanese classical piano', 'forro instrumental', 'german classical piano', 'australian jazz', 'classical trumpet', 'japanese classical performance', 'classical soprano', 'turkish classical performance', 'turkish classical', 'italian jazz fusion', 'spanish jazz', 'musica colombiana instrumental', 'jazz flute', 'classical jazz fusion', 'argentine jazz', 'jazz accordion', 'harmonica jazz', 'deep vocal jazz', 'mexican classical', 'icelandic jazz', 'neo soul-jazz', 'carnatic instrumental', 'nz jazz', 'deep sunset lounge', 'swiss jazz', 'classical saxophone', 'galician jazz', 'polish ambient', 'ambient fusion', 'classical organ', 'hot jazz', 'jazzcore', 'oriental classical', 'scottish jazz', 'indian jazz', 'polish modern jazz', 'portuguese jazz', 'austrian jazz', 'ambient industrial', 'dutch classical piano', 'belgian contemporary classical', 'classical mandolin', 'swedish classical', 'finnish modern jazz', 'sunset lounge', 'korean jazz', 'south african modern jazz', 'british classical piano', 'viet instrumental', 'contemporary classical piano', 'fado instrumental', 'danish classical', 'italian contemporary classical', 'australian classical piano', 'ritual ambient', 'classical clarinet', 'russian contemporary classical', 'canadian classical piano', 'swedish contemporary classical', 'taiwan classical performance', 'spanish classical piano', 'jazz dominicano', 'instrumental death metal', 'italian classical piano', 'jazz chileno', 'hungarian contemporary classical', 'irish contemporary classical', 'jazz tico', 'indian ambient', 'jazz tuba', 'hungarian classical piano', 'chinese classical', 'deep jazz fusion', 'greek jazz', 'caucasian classical piano', 'jazz colombiano', 'classical flute', 'andalusian classical', 'classical mezzo-soprano', 'classical percussion', 'classical countertenor', 'brazilian contemporary classical', 'israeli classical', 'classical baritone', 'portuguese contemporary classical', 'korean classical performance', 'french classical piano', 'dutch contemporary classical', 'deep free jazz', 'canadian contemporary classical', 'vintage finnish jazz', 'russian jazz', 'indian instrumental rock', 'classical trombone', 'american classical piano', 'classical accordion', 'polish classical piano', 'synthetic classical', 'german contemporary classical', 'finnish contemporary classical', 'instrumental black metal', 'vintage classical singing', 'historic classical performance', 'french contemporary classical', 'modern free jazz', 'classical bass', 'russian modern jazz', 'czech classical piano', 'jazz composition', 'classical bassoon', 'czech jazz', 'jazz caraibes', 'lithuanian jazz', 'classical oboe', 'jazz boliviano', 'danish contemporary classical', 'romanian contemporary classical', 'austrian classical piano', 'italian classical guitar', 'classical piano trio', 'classical tuba', 'classical guitar duo', 'korean contemporary classical', 'baltic classical piano', 'brazilian classical piano', 'spanish contemporary classical', 'classical guitar quartet', 'estonian jazz', 'classical contralto', 'classical piano duo', 'czech contemporary classical', 'balkan classical piano', 'swedish jazz orkester', 'irish modern jazz', 'portuguese classical', 'new zealand classical', 'romanian classical piano', 'classical horn', 'classical saxophone quartet', 'austrian contemporary classical', 'swiss contemporary classical', 'trad jazz catala', 'belgian classical piano', 'faroese jazz', 'korean classical piano', 'polish free jazz', 'swiss classical piano', 'classical string trio', 'classical piano quartet'],
  dramatic: ['rock', 'modern rock', 'classic rock', 'alternative metal', 'album rock', 'soft rock', 'hard rock', 'alternative rock', 'post-grunge', 'nu metal', 'rock en espanol', 'heartland rock', 'rap metal', 'modern alternative rock', 'modern country rock', 'folk rock', 'metal', 'punk', 'psychedelic rock', 'glam metal', 'argentine rock', 'glam rock', 'piano rock', 'country rock', 'garage rock', 'art rock', 'yacht rock', 'j-rock', 'metalcore', 'mexican rock', 'funk metal', 'grunge', 'turkish rock', 'melodic metalcore', 'christian alternative rock', 'rock-and-roll', 'funk rock', 'progressive rock', 'brazilian rock', 'anime rock', 'australian rock', 'industrial metal', 'southern rock', 'rockabilly', 'symphonic rock', 'thrash metal', 'canadian rock', 'rock nacional brasileiro', 'rap rock', 'irish rock', 'groove metal', 'power metal', 'industrial rock', 'uk post-punk', 'german metal', 'roots rock', 'spanish rock', 'skate punk', 'german rock', 'speed metal', 'french rock', 'uk metalcore', 'modern folk rock', 'bubblegrunge', 'symphonic metal', 'classic canadian rock', 'swamp rock', 'indonesian rock', 'christian rock', 'classic indonesian rock', 'post-punk argentina', 'post-punk', 'celtic rock', 'stoner rock', 'progressive metal', 'canadian metal', 'chilean rock', 'reggae rock', 'dutch rock', 'protopunk', 'turkish alternative rock', 'rock cristiano', 'birmingham metal', 'acid rock', 'japanese alternative rock', 'scottish rock', 'post-hardcore', 'swedish metal', 'death metal', 'mexican rock-and-roll', 'modern southern rock', 'gothic metal', 'canadian punk', 'hard rock brasileiro', 'rock urbano mexicano', 'hardcore punk', 'gothic symphonic metal', 'anadolu rock', 'rock gospel brasileiro', 'modern hard rock', 'american metalcore', 'stoner metal', 'detroit rock', 'rock alternativo brasileiro', 'indonesian alternative rock', 'melodic death metal', 'australian surf rock', 'boston rock', 'rock uruguayo', 'spacegrunge', 'suomi rock', 'comic metal', 'swedish alternative rock', 'rock drums', 'russian rock', 'ska punk', 'modern j-rock', 'medieval rock', 'german hard rock', 'czech rock', 'pinoy rock', 'nu-metalcore', 'art punk', 'uk doom metal', 'sleaze rock', 'proto-metal', 'prog metal', 'rock nacional', 'rock gaucho', 'spanish punk', 'rock kapak', 'cyberpunk', 'hardcore techno', 'swedish power metal', 'black metal', 'spanish metal', 'thai rock', 'rock brasiliense', 'chicago punk', 'classic russian rock', 'german punk', 'folk punk', 'argentine alternative rock', 'finnish metal', 'australian alternative rock', 'lovers rock', 'fantasy metal', 'australian metalcore', 'venezuelan rock', 'noise rock', 'digital hardcore', 'garage rock revival', 'uptempo hardcore', 'happy hardcore', 'icelandic rock', 'finnish power metal', 'danish rock', 'japanese punk rock', 'progressive metalcore', 'swedish death metal', 'mexican classic rock', 'british alternative rock', 'german power metal', 'j-metal', 'welsh rock', 'grungegaze', 'chicago hardcore', 'sludge metal', 'south african rock', 'russian post-punk', 'ukrainian rock', 'danish metal', 'rock mineiro', 'israeli rock', 'viking metal', 'surf punk', 'brutal death metal', 'christian metal', 'celtic metal', 'texas metal', 'polish rock', 'danspunk', 'russian punk', 'german alternative rock', 'post-rock', 'punk urbano', 'opera metal', 'folk rock italiano', 'swedish hard rock', 'experimental rock', 'early us punk', 'horror punk', 'yugoslav rock', 'folk metal', 'melodic metal', 'new jersey hardcore', 'technical death metal', 'german metalcore', 'progressive groove metal', 'peruvian rock', 'spanish folk metal', 'puerto rican rock', 'idol rock', 'rocksteady', 'christian metalcore', 'spanish modern rock', 'gothenburg metal', 'gothic rock', 'italian opera', 'celtic punk', 'rock andaluz', 'kiwi rock', 'argentine heavy metal', 'progressive post-hardcore', 'classic garage rock', 'belgian rock', 'french opera', 'rock catala', 'samba-rock', 'new jersey punk', 'dutch metal', 'welsh metal', 'metallic hardcore', 'hungarian rock', 'future rock', 'colombian rock', 'brazilian punk', 'symphonic deathcore', 'thai folk rock', 'indonesian punk', 'rock baiano', 'rock independant francais', 'alternative roots rock', 'japanese post-hardcore', 'comedy rock', 'ostrock', 'japanese metalcore', 'argentine punk', 'steampunk', 'norwegian rock', 'polish alternative rock', 'rock quebecois', 'australian post-hardcore', 'dark rock', 'dark post-punk', 'doom metal', 'swedish melodic rock', 'punk rock mexicano', 'deutschrock', 'kawaii metal', 'canadian metalcore', 'brazilian metal', 'classic j-rock', 'indonesian post-hardcore', 'portuguese rock', 'glam punk', 'post-metal', 'french metal', 'trop rock', 'rock alternativo espanol', 'virginia metal', 'russian metal', 'african rock', 'finnish heavy metal', 'norwegian metal', 'melodic hardcore', 'pub rock', 'modern melodic hardcore', 'hardcore', 'flute rock', 'dreampunk', 'australian garage punk', 'tolkien metal', 'indian rock', 'math rock', 'chilean hardcore', 'swedish garage rock', 'symphonic black metal', 'finnish alternative rock', 'polish punk', 'euskal rock', 'uk post-punk revival', 'slovak rock', 'russian punk rock', 'california hardcore', 'british power metal', 'j-punk', 'atlanta metal', 'metal cover', 'finnish death metal', 'boston metal', 'french death metal', 'norwegian black metal', 'atmospheric black metal', 'southern metal', 'k-rock', "punk 'n' roll", 'chaotic hardcore', 'us power metal', 'boston punk', 'drone metal', 'czech punk', 'russian folk rock', 'symphonic power metal', 'swedish progressive metal', 'swiss rock', 'croatian rock', 'rock piauiense', 'pagan black metal', 'christian punk', 'italian metal', 'canadian post-hardcore', 'german punk rock', 'modern hardcore', 'melodic groove metal', 'swedish metalcore', 'american post-rock', 'uk post-hardcore', 'danish alternative rock', 'oriental metal', 'irish metal', 'hong kong rock', 'dc hardcore', 'elektropunk', 'rock viet', 'scottish metal', 'swedish heavy metal', 'polish metal', 'florida death metal', 'opera', 'brazilian thrash metal', 'brazilian punk rock', 'synth punk', 'japanese math rock', 'italian power metal', 'avant-garde metal', 'german post-hardcore', 'swiss metal', 'modern ska punk', 'anarcho-punk', 'japanese rockabilly', 'dark hardcore', 'russian alternative rock', 'cowpunk', 'taiwan punk', 'egg punk', 'italian folk metal', 'russian metalcore', 'american post-punk', 'metal mineiro', 'nordic folk metal', 'brazilian progressive metal', 'vancouver punk', 'italian progressive rock', 'mexican metal', 'metal guitar', 'polish post-punk', 'brazilian groove metal', 'classic greek rock', 'japanese power metal', 'progressive death metal', 'post-post-hardcore', 'new wave of thrash metal', 'japanese post-rock', 'space rock', 'progressive power metal', 'swedish doom metal', 'greek metal', 'classic finnish rock', 'romanian rock', 'post-doom metal', 'persian rock', 'depressive black metal', 'norwegian folk rock', 'autonomous black metal', 'turkish punk', 'australian metal', 'german heavy metal', 'crust punk', 'black punk', 'irish post-punk', 'slovak punk', 'finnish punk', 'melodic hard rock', 'swedish black metal', 'vancouver metal', 'finnish hard rock', 'krautrock', 'symphonic death metal', 'connecticut hardcore', 'canadian garage rock', 'ukrainian folk rock', 'gypsy punk', 'rock alternatif francais', 'buffalo ny metal', 'ukrainian post-punk', 'french punk', 'heavy alternative', 'rock chapin', 'brazilian hardcore', 'atlanta punk', 'swedish punk', 'nordic post-rock', 'technical groove metal', 'dissonant death metal', 'pinoy alternative rock', 'kentucky punk', 'long island punk', 'christian hardcore', 'canadian hardcore', 'spanish folk rock', 'freeform hardcore', 'german thrash metal', 'retro metal', 'post-black metal', 'kentucky metal', 'brazilian power metal', 'deathrock', 'gothic black metal', 'turkish metal', 'deep christian rock', 'pittsburgh rock', 'spanish post-punk', 'geek rock', 'virginia punk', 'deep soft rock', 'japanese garage rock', 'alabama metal', 'galician rock', 'deep happy hardcore', 'british black metal', 'lapland metal', 'paraguayan rock', 'punk chileno', 'british death metal', 'neo metal', 'cyber metal', 'portland punk', 'polish black metal', 'danish post-punk', 'german opera', 'pakistani rock', 'belarusian rock', 'pennsylvania hardcore', 'texas hardcore', 'bangladeshi rock', 'punk euskera', 'swedish stoner rock', 'melodic power metal', 'miami metal', 'novo rock gaucho', 'japanese heavy metal', 'classic hungarian rock', 'norwegian alternative rock', 'czech metal', 'cinematic post-rock', 'christian hard rock', 'vocaloid metal', 'taiwan rock', 'rock keyboard', 'louisiana metal', 'thai post-rock', 'tennessee metal', 'melodic black metal', 'epunk', 'neo-rockabilly', 'hungarian metal', 'oulu metal', 'polish death metal', 'indonesian hardcore', 'brisbane punk', 'italian gothic metal', 'punk cover', 'psychedelic folk rock', 'christian power metal', 'slavic folk metal', 'psychedelic punk', 'austin metal', 'austrian metal', 'north carolina metal', 'action rock', 'sci-fi metal', 'varmland rock', 'atmospheric post-metal', 'slam death metal', 'punk melodico chileno', 'kurdish rock', 'czech folk rock', 'austin rock', 'quebec punk', 'boston hardcore', 'rock en asturiano', 'melbourne punk', 'modern progressive rock', 'rockabilly en espanol', 'rock of gibraltar', 'technical melodic death metal', 'cleveland metal', 'british post-rock', 'malaysian punk', 'cosmic post-rock', 'belgian metal', 'new york death metal', 'cosmic death metal', 'hungarian punk', 'street punk espanol', 'rap metal espanol', 'ecuadorian alternative rock', 'italian punk', 'deep gothic post-punk', 'peruvian punk', 'viking black metal', 'quebec death metal', 'punk catala', 'south asian metal', 'crack rock steady', 'rock curitibano', 'garage punk', 'balkan punk', 'french garage rock', 'portland metal', 'slavic metal', 'swedish hardcore', 'cavernous death metal', 'new wave of glam metal', 'japanese melodic punk', 'punk rock italiano', 'deep progressive rock', 'wrock', 'swedish rockabilly', 'french black metal', 'indonesian metal', 'german black metal', 'argentine metal', 'polish folk metal', 'brazilian post-hardcore', 'norwegian punk rock', 'chain punk', 'bulgarian rock', 'slovenian rock', 'punta rock', 'dub punk', 'german pagan metal', 'pittsburgh metal', 'folk black metal', 'chicano punk', 'canadian psychedelic rock', 'northern irish punk', 'spanish rockabilly', 'swiss alternative rock', 'fast melodic punk', 'rap metalcore', 'greek rock', 'metal gotico', 'irish punk', 'punk tuga', 'french post-punk', 'texas punk', 'cosmic black metal', 'technical black metal', 'greek psychedelic rock', 'indorock', 'uk stoner rock', 'deep metalcore', 'japanese girl punk', 'technical brutal death metal', 'pinoy metal', 'post-punk mexicano', 'minneapolis punk', 'canadian post-punk', 'finnish progressive metal', 'hardcore punk espanol', 'southeast asian post-rock', 'bisrock', 'german street punk', 'swedish psychedelic rock', 'british math rock', 'argentine hardcore', 'punk colombiano', 'minneapolis metal', 'danish black metal', 'baltic post-punk', 'panamanian rock', 'denver metal', 'trallpunk', 'dutch black metal', 'uk noise rock', 'finnish black metal', 'traditional rockabilly', 'russian nu metal', 'rock tico', 'estonian rock', 'japanese psychedelic rock', 'taiwan post-rock', 'deep melodic hard rock', 'turkish post-punk', 'portuguese metal', 'deep german punk', 'new wave of speed metal', 'german death metal', 'swedish post-hardcore', 'polish hardcore', 'nz metal', 'indonesian death metal', 'austrian black metal', 'finnish progressive rock', 'gothic post-punk', 'ukrainian alternative rock', 'metal colombiano', 'classic danish rock', 'russian heavy metal', 'canadian post-rock', 'italian post-punk', 'norwegian death metal', 'noise punk', 'barockinterpreten', 'euskal metal', 'neo-trad metal', 'bolivian rock', 'umea hardcore', 'belarusian punk', 'rock progressif francais', 'florida hardcore', 'thai metal', 'finnish doom metal', 'canadian death metal', 'ukrainian metal', 'new england metal', 'rock gotico', 'deep folk metal', 'greek black metal', 'balkan post-punk', 'lithuanian rock', 'albanian rock', 'punk galego', 'italian metalcore', 'french hardcore', 'italian post-hardcore', 'swiss black metal', 'russian post-rock', 'avant-garde black metal', 'australian hardcore', 'trash rock', 'uk diy punk', 'brazilian death metal', 'german hardcore', 'psychedelic space rock', 'cascadian black metal', 'italian death metal', 'icelandic post-punk', 'finnish metalcore', 'texas death metal', 'deep melodic death metal', 'canadian black metal', 'polish thrash metal', 'seattle metal', 'nyc metal', 'ukrainian black metal', 'latvian rock', 'german stoner rock', 'danish death metal', 'mexican death metal', 'dub metal', 'street punk', 'underground grunge', 'rock campineiro', 'canadian rockabilly', 'japanese post-punk', 'hard rock mexicano', 'arizona punk', 'japanese death metal', 'rock cearense', 'mexican hardcore', 'german post-punk', 'dutch death metal', 'rock paraibano', 'australian post-rock', 'metal catala', 'indian metal', 'norwegian doom metal', 'danish punk', 'hardcore breaks', 'black speed metal', 'swedish post-punk', 'australian death metal', 'deep punk rock', 'balkan folk metal', 'medieval black metal', 'punk mexicano', 'australian post-punk', 'uk rockabilly', 'cambodian rock', 'chilean metal', 'symphonic melodic death metal', 'icelandic metal', 'rock goiano', 'blackened hardcore', 'malaysian metal', 'portuguese black metal', 'heavy gothic rock', 'epic black metal', 'israeli metal', 'nz hardcore', 'garage rock mexicano', 'progressive black metal', 'korean metal', 'brazilian lo-fi rock', 'italian stoner rock', 'taiwan metal', 'serbian alternative rock', 'chinese metalcore', 'swedish rock-and-roll', 'industrial black metal', 'south carolina metal', 'heavy psych', 'russian folk metal', 'experimental black metal', 'faroese rock', 'icelandic black metal', 'war metal', 'adelaide punk', 'progressive technical death metal', 'atmospheric post-rock', 'mexican thrash metal', 'mexican post-rock', 'french stoner rock', 'native american metal', 'slovenian metal', 'lovecraftian metal', 'classic psychedelic rock', 'german post-rock', 'belgian black metal', 'melodic progressive metal', 'icelandic punk', 'deep classic garage rock', 'norwegian hardcore', 'australian black metal', 'metal ecuatoriano', 'forest black metal', 'italian black metal', 'spanish progressive rock', 'brazilian black metal', 'arab metal', 'finnish post-punk', 'rock caipira', 'ukrainian metalcore', 'malang punk', 'brazilian metalcore', 'greek punk', 'dutch punk', 'peruvian metal', 'russian hardcore', 'south african metal', 'german rockabilly', 'occult black metal', 'belgian death metal', 'irish black metal', 'spanish post-rock', 'uk post-metal', 'alternative metalcore', 'nz alternative rock', 'metal gaucho', 'lowlands hardcore', 'chinese post-rock', 'french post-rock', 'belgian post-rock', 'italian doom metal', 'nz punk', 'romanian metal', 'turkish death metal', 'finnish hardcore', 'quebec hardcore', 'south african punk', 'israeli punk', 'raw black metal', 'metal paranaense', 'romanian punk', 'italian hardcore', 'west virginia metal', 'austrian punk', 'japanese melodic hardcore', 'drone rock', 'post-punk brasileiro', 'french rock-and-roll', 'austrian stoner rock', 'new england hardcore', 'rock catracho', 'chinese metal', 'japanese black metal', 'ohio hardcore', 'finnish psychedelic rock', 'christian death metal', 'rock alagoano', 'russian black metal', 'singaporean metal', 'croatian metal', 'industrial hardcore', 'russian power metal', 'polish post-rock', 'deep hardcore', 'belgian punk', 'deep melodic metalcore', 'arkansas metal', 'japanese hardcore', 'wisconsin metal', 'norwegian punk', 'native american black metal', 'colombian hardcore', 'horror punk brasileiro', 'colorado hardcore', 'chinese post-punk', 'grisly death metal', 'avant-rock', 'neo-industrial rock', 'guatemalan metal', 'australian thrash metal', 'italian post-rock', 'christian thrash metal', 'utah metal', 'metal tico', 'rock progresivo mexicano', 'spanish psychedelic rock', 'belgian stoner rock', 'unblack metal', 'belarusian metal', 'swiss punk', 'mainland se asia metal', 'bolivian metal', 'grunge revival', 'australian rockabilly', 'romanian black metal', 'christian symphonic metal', 'raga rock', 'brazilian rockabilly', 'russian death metal', 'brazilian stoner rock', 'rock potiguar', 'korean punk', 'grim death metal', 'rhythm rock', 'colombian death metal', 'colombian black metal', 'rock nica', 'dutch punk rock', 'cantonese opera', 'metal noir quebecois', 'danish hardcore', 'post-punk colombiano', 'slc hardcore', 'rock sergipano', 'finnish rockabilly', 'portuguese death metal', 'dutch stoner rock', 'western ny metal', 'minnesota metal', 'canadian stoner rock', 'estonian metal', 'italian progressive metal', 'appalachian black metal', 'metal salvadoreno', 'dark black metal', 'singaporean punk', 'thrash-groove metal', 'hungarian black metal', 'bulgarian metal', 'edinburgh metal', 'czsk black metal', 'quebec metal', 'alabama hardcore', 'macedonian rock', 'punk ecuatoriano', 'african metal', 'rock dominicano', 'rock in opposition', 'chinese punk', 'rock pernambucano', 'christian doom metal', 'spanish death metal', 'early french punk', 'rock catarinense', 'french experimental rock', 'serbian metal', 'russian thrash metal', 'indonesian thrash metal', 'slovak metal', 'metalcore espanol', 'belgian hardcore', 'malaysian hardcore', 'lithuanian metal', 'brazilian heavy metal', 'deep swedish rock', 'slash punk', 'saxony metal', 'mexican power metal', 'spanish stoner rock', 'luxembourgian metal', 'deep hardcore punk', 'turkish black metal', 'brazilian post-rock', 'deep space rock', 'rock sul-mato-grossense', 'punk tico', 'italian rockabilly', 'brazilian surf rock', 'rock abc paulista', 'neo-trad doom metal', 'polish noise rock', 'metal galego', 'belfast metal', 'chaotic black metal', 'polish metalcore', 'deep active rock', 'latvian metal', 'lion city hardcore', 'metal cristao', 'cryptic black metal', 'spanish black metal', 'rock paraense', 'mexican black metal', 'portuguese post-rock', 'italian heavy metal', 'baltic black metal', 'czech hardcore', 'indonesian black metal', 'metal paraguayo', 'french rockabilly', 'portuguese hardcore', 'korean hardcore', 'metal uruguayo', 'metal balear', 'irish death metal', 'metal catarinense', 'central american metal', 'turkish hardcore', 'metal cearense', 'rock nacional feminino', 'grunge argentina', 'metal baiano', 'black metal argentino', 'hard stoner rock', 'venezuelan metal', 'malaysian post-rock', 'chinese black metal', 'grunge brasileiro', 'maltese metal', 'irish hardcore', 'alternative hardcore', 'punk ska', 'montana metal', 'cypriot metal', 'iranian metal', 'puerto rican metal', 'chilean black metal', 'jangle rock', 'peruvian death metal', 'brazilian doom metal', 'rock cristao fluminense', 'hawaiian punk', 'caribbean metal', 'metal nortista', 'metal pernambucano', 'deep symphonic black metal', 'opera chorus', 'rock noise', 'chinese opera', 'vintage rockabilly', 'macedonian metal', 'metal piauiense'],
  romantic: ['r&b', 'soul', 'canadian contemporary r&b', 'new romantic', 'neo soul', 'alternative r&b', 'british soul', 'contemporary r&b', 'r&b francais', 'classic soul', 'bolero', 'bedroom r&b', 'r&b en espanol', 'uk contemporary r&b', 'dark r&b', 'southern soul', 'korean r&b', 'late romantic era', 'chill r&b', 'memphis soul', 'early romantic era', 'post-romantic era', 'indonesian r&b', 'bedroom soul', 'pinoy r&b', 'german romanticism', 'r&b brasileiro', 'grupero romantico', 'afro r&b', 'northern soul', 'vapor soul', 'japanese r&b', 'experimental r&b', 'bolero mexicano', 'japanese soul', 'philly soul', 'r&b argentino', 'batidao romantico', 'russian romanticism', 'retro soul', 'german r&b', 'psychedelic soul', 'chinese r&b', 'french romanticism', 'neo r&b', 'afro soul', 'souldies', 'romantico', 'chicago soul', 'italian romanticism', 'gospel r&b', 'swedish soul', 'brega romantico', 'scandinavian r&b', 'australian r&b', 'brazilian soul', 'r&b italiano', 'dutch r&b', 'rap romantico', 'kenyan r&b', 'bolero cubano', 'vietnamese bolero', 'traditional soul', 'new orleans soul', 'smooth soul', 'bush ballad', 'post-disco soul', 'wassoulou', 'american romanticism', 'soul flow', 'south african r&b', 'finnish soul', 'gospel soul', 'bulgarian r&b', 'slovenian folk', 'slovenske chvaly', 'deep northern soul', 'irish ballad', 'deep southern soul', 'deep r&b', 'deep smooth r&b', 'bothy ballad'],
  undefined: ['rap', 'musica mexicana', 'filmi', 'permanent wave', 'corrido', 'norteno', 'sierreno', 'contemporary country', 'mellow gold', 'melodic rap', 'modern bollywood', 'banda', 'corridos tumbados', 'sertanejo universitario', 'country', 'urban contemporary', 'sertanejo', 'arrocha', 'alt z', 'country road', 'ranchera', 'gangster rap', 'chicago rap', 'agronejo', 'neo mellow', 'new wave', 'hoerspiel', 'afrobeats', 'adult standards', 'sped up', 'cloud rap', 'talent show', 'grupera', 'west coast rap', 'opm', 'boy band', 'stomp and holler', 'ccm', 'rage rap', 'tropical', 'funk carioca', 'mpb', 'pagode', 'urbano espanol', 'rap francais', 'sleep', 'folk', 'anime', 'disco', 'pluggnb', 'christian music', 'big room', 'forro', 'classic oklahoma country', 'british invasion', 'white noise', 'pagode novo', 'soundtrack', 'salsa', 'rain', 'mariachi', 'brostep', 'funk mtg', 'dirty south rap', 'brazilian gospel', 'outlaw country', 'orchestral soundtrack', 'worship', 'dfw rap', 'pixel', 'new orleans rap', 'otacore', 'funk', 'quiet storm', 'motown', 'gruperas inmortales', 'kleine hoerspiel', 'rap conscient', 'g funk', 'bachata', 'funk paulista', 'cantautor', 'chanson', 'drift phonk', 'florida rap', 'movie tunes', 'cali rap', 'brooklyn drill', 'urbano chileno', 'color noise', "children's music", 'world worship', 'urbano mexicano', 'classic texas country', 'escape room', 'funk rj', 'plugg', 'merseybeat', 'reggae fusion', 'shoegaze', 'lilith', 'downtempo', 'girl group', 'old school thrash', 'classic bollywood', 'gym phonk', 'country dawn', 'pittsburgh rap', 'screamo', 'kindermusik', 'melodic drill', 'nyc rap', 'philly rap', 'afrofuturism', 'healing hz', 'reggae', 'madchester', 'k-rap', 'trip hop', 'funk consciente', 'musica chihuahuense', 'azontobeats', 'new americana', 'tejano', 'korean ost', 'nova mpb', 'j-division', 'sertanejo tradicional', 'aesthetic rap', 'cancion melodica', 'sigilkore', 'rap conciencia', 'neo-psychedelic', 'adoracao', 'ska argentino', 'lo-fi study', 'axe', 'phonk brasileiro', 'pixie', 'bossa nova', 'cumbia sonidera', 'roots reggae', 'german techno', 'lo-fi beats', 'binaural', 'cumbia villera', 'drill', 'brazilian reggae', 'broadway', 'samba', 'video game music', 'show tunes', 'rap canario', 'mollywood', 'sufi', 'hollywood', 'nursery', 'lullaby', 'baton rouge rap', 'grime', 'rap marseille', 'vallenato', 'salsa puertorriquena', 'environmental', 'musica para ninos', 'tollywood', 'cloud rap francais', 'background piano', 'lagu jawa', 'florida drill', 'cuarteto', 'dreamo', 'turbo folk', 'rap napoletano', 'chicago drill', 'new rave', 'drill francais', 'new jack swing', 'drill espanol', 'gym hardstyle', 'dangdut', 'swing', 'new french touch', 'industrial', 'coverchill', 'hare krishna', 'complextro', 'kollywood', 'baroque', 'flamenco urbano', 'country rap', 'early music', 'glitchcore', 'bachata dominicana', 'beatlesque', 'meditation', 'arabesk', 'german drill', 'weirdcore', 'meme rap', 'viral rap', 'japanese vgm', 'funk ostentacao', 'arrochadeira', 'previa', 'covertronica', 'pagode baiano', 'neue deutsche harte', 'meme', 'nu-cumbia', 'rap dominicano', 'anime score', 'vocaloid', 'australian psych', 'schlager', 'chillhop', 'mambo chileno', 'jam band', 'drum and bass', 'melbourne bounce international', 'dangdut koplo', 'turkish folk', 'javanese dangdut', 'j-pixie', 'cantautora mexicana', 'nouvelle chanson francaise', 'crunk', 'modern bhajan', 'new york drill', 'red dirt', 'countrygaze', 'ska', 'bebop', 'turkce drill', 'musica de fondo', 'swedish gangsta rap', 'comic', 'scenecore', 'piano cover', 'rumba', 'electra', 'german alternative rap', "preschool children's music", 'moombahton', 'tagalog rap', 'background music', 'funk bh', 'torch song', 'uk drill', 'shush', 'ectofolk', 'small room', 'kentucky roots', 'cartoon', 'modern salsa', 'writing', 'musica infantil', 'chillwave', 'deep ccm', 'norteno-sax', 'trova', 'dembow', 'cumbia', 'speedrun', 'world', 'perreo', 'aussietronica', 'classic schlager', 'melbourne bounce', 'classic opm', 'tecnobanda', 'japanese soundtrack', 'boom bap espanol', 'chutney', 'laiko', 'german soundtrack', 'fvnky rimex', 'corridos alternativos', 'nashville sound', 'rap df', 'velha guarda', 'rap politico', 'cumbia 420', 'bossa nova cover', 'scorecore', 'redneck', 'german baroque', 'texas country', 'british soundtrack', 'slowcore', 'houston rap', 'new jersey rap', 'epicore', 'slowed and reverb', 'arkansas country', 'chicano rap', 'high vibe', 'j-rap', 'uk funky', 'black americana', 'ghazal', 'indonesian folk', 'deboxe', 'lo-fi cover', 'post-disco', 'rap genovese', 'cumbia chilena', 'bronx drill', 'salsa colombiana', 'euphoric hardstyle', 'musica sonorense', 'rawstyle', 'afroswing', 'phonk', 'rap calme', 'anime lo-fi', 'rap belge', 'lo-fi sleep', 'german cloud rap', 'cumbia peruana', 'spanish new wave', 'stomp and flutter', 'bossbeat', 'minimal techno', 'alternative country', 'banda jalisciense', 'frauenrap', 'asmr', 'afrofuturismo brasileiro', 'zolo', 'nu disco', 'hi-nrg', 'lo-fi chill', 'duranguense', 'dubstep', 'supergroup', 'classic hardstyle', 'ocean', 'contemporary post-bop', 'vietnamese melodic rap', 'gospel', 'water', 'barnmusik', 'deathcore', 'visual kei', 'doo-wop', 'melodic dubstep', 'piseiro', 'ska mexicano', 'big beat', 'canadian country', 'hardwave', 'folklore argentino', 'partyschlager', 'london rap', 'argentine reggae', 'future garage', 'nwobhm', 'charva', 'progressive bluegrass', 'corridos clasicos', 'rif', 'turkce slow sarkilar', 'canadian contemporary country', 'chicago bop', 'middle earth', 'neoperreo', 'rave funk', 'russelater', 'cubaton', 'vapor twitch', 'tropicalia', 'manguebeat', 'rap espanol', 'impressionism', 'nu gaze', 'chill drill', 'funk 150 bpm', 'musica bajacaliforniana', 'alte', 'japanese chillhop', 'roots worship', 'p funk', 'scam rap', 'vallenato moderno', 'sky room', 'sound', 'levenslied', 'nueva cancion', 'bhajan', 'rap cristiano', 'naija worship', 'uk americana', 'lo-fi product', 'rap maroc', 'classic kollywood', 'tierra caliente', 'muziek voor kinderen', 'funk viral', 'folk brasileiro', 'lo-fi', 'manele', 'british folk', 'rap baiano', 'amapiano', 'funk mandelao', 'celtic', 'tekk', 'turkish alternative', 'bases de freestyle', 'minneapolis sound', 'funk das antigas', 'alabama rap', "women's music", 'old school rap francais', 'shamanic', 'basshall', 'a cappella', 'nasheed', 'rkt', 'brazilian ccm', 'zhongguo feng', 'crank wave', 'st louis rap', "canzone d'autore", 'australian reggae fusion', 'classic girl group', 'boom bap', 'synthwave', 'chill phonk', 'rap catala', 'azonto', 'karadeniz turkuleri', 'russian drain', 'hopebeat', 'gymcore', 'focus', 'wonky', 'russian gangster rap', 'synth funk', 'rap mineiro', 'rap algerien', 'ye ye', 'pinoy reggae', 'djent', 'variete francaise', 'classify', 'indonesian worship', 'greek drill', 'tamaulipas rap', 'polish alternative', 'swedish drill', 'harlem renaissance', 'hard bop', 'classic soundtrack', 'italian baroque', 'westcoast flow', 'rap chileno', 'rap geek', 'new school turkce rap', 'rhythm game', 'bassline', 'iskelma', 'rap cearense', "australian children's music", 'lo-fi vgm', 'chicha', 'french soundtrack', 'salsa venezolana', 'ottawa rap', 'nintendocore', 'boom bap brasileiro', 'italo disco', 'rap sardegna', 'lata', 'anime rap', 'rap underground espanol', 'italian alternative', 'glitch hop', 'forro de favela', 'filthstep', 'cumbia santafesina', 'merengue', 'banda sinaloense', 'french reggae', 'hands up', 'german underground rap', 'chill breakcore', 'flamenco', 'musica tlaxcalteca', 'livetronica', 'aussie drill', 'mahraganat', 'pet calming', 'breakbeat', 'lo-fi rap', 'palm desert scene', 'boston folk', 'nordic soundtrack', 'cumbia del sureste', 'violao', 'grave wave', 'israeli mediterranean', 'barnsagor', 'melodic thrash', 'cumbia ranchera', 'anthem worship', 'dembow dominicano', 'upstate ny rap', 'australian country', 'scream rap', 'bboy', 'narco rap', 'sholawat', 'future bass', 'cumbia sonorense', 'carnaval', 'swedish melodeath', 'kirtan', 'qawwali', 'reggae en espanol', 'kizomba', 'nerdcore brasileiro', 'canzone napoletana', 'neue neue deutsche welle', 'indian folk', 'modern reggae', 'musica tradicional cubana', 'solo wave', 'canadian soundtrack', 'classic sierreno', 'classic praise', 'turkish psych', 'indonesian reggae', 'rai', 'liquid funk', 'dansband', 'pianissimo', 'kayokyoku', 'dark clubbing', 'french shoegaze', 'drill italiana', 'aggressive phonk', 'uk dnb', 'uk reggae', 'healing', 'musica triste brasileira', 'samba-enredo', 'jovem guarda', 'gujarati garba', 'nightcore', 'canadian americana', 'umbanda', 'anti-folk', 'riot grrrl', 'dixieland', 'cosmic american', 'rap feminino nacional', 'jawaiian', 'mariachi cristiano', 'classic disco polo', 'musique pour enfants', 'discofox', 'chilena', 'brega paraense', 'smooth saxophone', 'samba moderno', 'freestyle', 'american shoegaze', 'german reggae', 'sound team', 'drone', 'regional mexicano femenil', 'j-idol', 'sandalwood', 'scottish new wave', 'afrikaans', 'nz reggae', 'oklahoma country', 'brega', 'japanese vtuber', 'rhode island rap', 'shaabi', 'salsa peruana', 'tecnobrega', 'indian lo-fi', 'chillstep', 'egyptian alternative', 'jersey club', 'experimental', 'czech drill', 'samba de roda', 'sda a cappella', 'canadian ccm', 'slayer', 'memphis phonk', 'polish alternative rap', 'bhangra', 'quran', 'dark techno', 'musica gaucha tradicionalista', 'oc rap', 'rave', "children's folk", 'polish drill', 'vaporwave', 'alternative americana', 'hyphy', 'easycore', 'new beat', 'reggae uruguayo', 'khaliji', 'study beats', 'vintage italian soundtrack', 'cumbia paraguaya', 'russian drill', 'pinoy drill', 'bandinhas', 'bluegrass', 'dub', 'spectra', 'drill chileno', 'pinoy alternative rap', 'rune folk', 'french techno', 'rap underground argentino', 'polish viral rap', 'wave', 'pink noise', 'glee club', 'american folk revival', 'rva drill', 'atmosphere', 'zhenskiy rep', 'gaming dubstep', 'north carolina roots', 'chill guitar', 'folktronica', 'idol', 'kolsche karneval', 'frenchcore', 'soca', 'oyun havasi', 'antideutsche', 'chiptune', 'post-minimalism', 'rap uliczny', 'nederlandse hardstyle', 'icelandic experimental', 'kabarett', 'ghanaian alternative', 'ethereal wave', 'polish underground rap', 'musica aragonesa', 'gospel antigas', 'irish folk', 'dream plugg', 'focus beats', 'rap boricua', 'afrobeat', 'rap uruguayo', 'dark plugg', 'idol kayo', 'maga rap', 'brain waves', 'comedy rap', 'game mood', 'russian grime', 'anime phonk', 'glitchbreak', 'neue deutsche welle', 'fourth world', 'native american traditional', 'music box', 'bgm', 'samba paulista', 'viking folk', 'neomelodici', 'comedy', 'tropical alternativo', 'musica angolana', 'halloween', 'theme', 'rap underground mexicano', 'narodna muzika', 'southern americana', 'fotbollslatar', 'huzunlu sarkilar', 'partido alto', 'rap nacional antigo', 'reggae tuga', 'canadian folk', 'uk melodic rap', 'piano worship', 'kavkaz', 'no beat', 'japanese new wave', 'new jersey underground rap', 'reggae do maranhao', 'minimal melodic techno', 'lagu timur', 'mizrahi', 'musica costena', 'entehno', 'lustrum', 'cowboy western', 'reggae cristao', 'liedermacher', 'ska chileno', 'laboratorio', 'chillsynth', 'minimalism', 'chalga', 'dutch cabaret', 'brega funk', 'barnemusikk', 'birmingham grime', 'parody', 'nuevo folklore mexicano', 'rap tunisien', 'mantra', 'classic iskelma', 'new weird america', 'big band', 'kermis', 'dong-yo', 'plug brasileiro', 'uk garage', 'italian soundtrack', 'australian indigenous music', 'deathgrind', 'neoclassicism', 'ambeat', 'south african gospel', 'swedish country', 'lagu melayu', 'shanty', 'kwaito', 'east coast reggae', 'greek underground rap', 'musica tamaulipeca', "british children's music", 'progressive deathcore', 'arab alternative', 'melodic techno', 'swancore', 'future funk', 'grime brasileiro', 'guaracha', 'romanian rap', 'wrestling', 'deep comedy', 'strut', 'tagalog worship', 'country gospel', 'dark cabaret', 'folclore salteno', 'dark wave', 'ska revival', 'corridos belicos', 'new comedy', 'roda de samba', 'fado', 'post-screamo', 'carnaval cadiz', 'pastoral', 'nova musica pernambucana', 'musica sinaloense', 'volksmusik', 'vbs', 'xtra raw', 'musica per bambini', 'louvor', 'hard bass', 'world devotional', 'german oi', 'darksynth', 'gregorian chant', 'mambo', 'deep talent show', 'miami bass', 'samba reggae', 'turkish soundtrack', 'musica andina', 'deathgrass', 'drain', 'russian viral rap', 'banjo', 'cancion infantil mexicana', 'solfeggio product', 'slamming deathcore', 'turkce kadin rap', 'jungle', 'abstract beats', 'cello', 'ukrainian phonk', 'reggae cover', 'old school bassline', 'indonesian ska', 'islamic recitation', 'english baroque', 'synthesizer', 'deep new americana', 'russian underground rap', 'musica poblana', 'italian tenor', 'swedish americana', 'dangdut remix', 'crossover thrash', 'russian rave', 'musica potosina', 'psicodelia brasileira', 'josei rap', 'bakersfield sound', 'korean talent show', 'tex-mex', 'anime cv', 'drill brasileiro', 'groove gospel', 'orgcore', 'ballet class', 'musica catalana', 'musica neoleonesa', 'indian fusion', 'carnatic', 'battle rap', 'nightrun', 'irish country', 'roots americana', 'brit funk', 'western swing', 'cumbia lagunera', '8d', 'blackened deathcore', 'tololoche', 'flamenco fusion', 'double drumming', 'west coast reggae', 'manila sound', "canadian children's music", 'sertanejo gospel', 'traditional country', 'dabke', 'christian uplift', 'trot', 'lds youth', 'chinese bgm', 'german viral rap', 'early avant garde', 'cumbia andina mexicana', 'super eurobeat', 'novelty', 'glitch', 'zouk', 'kawaii future bass', 'musica alagoana', 'rap cristao', 'hip-hop experimental', 'klubowe', 'dansktop', 'bongo flava', 'deep chill', 'musica coahuilense', 'eurobeat', 'speed up brasileiro', 'rap anime', 'czech folk', 'lds', 'salsa choke', 'relaxative', 'australian americana', 'shabad', 'gabber', 'j-reggae', 'magyar alternative', 'norwegian country', 'maskandi', 'banda carnavalera', 'afro drill', 'mathcore', 'zouk riddim', 'groove room', 'nu gabber', 'cante flamenco', 'brazilian bass', 'deconstructed club', 'japanese shoegaze', 'azeri rap', 'shred', 'talentschau', 'rap lyonnais', 'psychobilly', 'tango', 'hurdy-gurdy', 'tone', 'deep rai', 'viet chill rap', 'yodeling', 'reggae gaucho', 'ukg revival', 'finnish melodeath', 'techno kayo', 'rap baixada fluminense', 'shonen', 'karneval', 'zxc', 'italian techno', 'lambadao', 'praise', 'papuri', 'ebm', 'brazilian boogie', 'circuit', 'punjabi lo-fi', 'christian lo-fi', 'chamber psych', 'vocal harmony group', 'cumbia colombiana regia', 'polish reggae', 'german worship', 'puirt-a-beul', 'fantasy', 'disco polo', 'seiyu', 'messianic praise', 'batak', 'turk sanat muzigi', 'chinese melodic rap', 'oktoberfest', 'fogo pentecostal', 'ethnotronica', 'microtonal', 'cumbia ecuatoriana', 'anime piano', 'japanese piano', 'swedish reggae', 'austin americana', 'rap antillais', 'italian reggae', 'high-tech minimal', 'world fusion', 'rap siciliano', 'new italo disco', 'chill beats', 'west end', 'melodic deathcore', 'south african alternative', 'furry', 'shatta', 'musica gaucha', 'christian afrobeat', 'workout product', 'ragga jungle', 'oldschool deutschrap', 'no wave', 'orchestra', 'concurso de talentos argentino', 'christelijk', 'surf music', 'honky tonk', 'jump up', 'funktronica', 'san diego rap', 'smutny rap', 'mundart', 'apostolic worship', 'chanson paillarde', 'sevdah', 'hardvapour', 'brega saudade', 'timba', 'speed up turkce', 'musica cristiana guatemalteca', 'pirate', 'techno', 'southern gospel', 'dariacore', 'baglama', 'classic bhangra', 'khaleeji iraqi', 'hawaiian', 'neo-traditional bluegrass', 'huayno', 'shibuya-kei', 'denpa-kei', 'atlanta bass', 'comedie musicale', 'deathstep', 'adventista', 'japanese drill', 'barcadi', 'cocuk sarkilari', 'funk melody', 'deep minimal techno', 'musica llanera', 'nasyid', 'lesen', 'cantautora argentina', 'carnatic vocal', 'nederreggae', 'rap francais nouvelle vague', 'german ska', 'nueva ola chilena', 'handpan', 'canadian celtic', 'pakistani folk', 'jamgrass', 'poezja spiewana', 'rap montrealais', 'fingerstyle', 'musica nayarita', 'german ccm', 'folklore ecuatoriano', 'riddim', 'japanese screamo', 'fluxwork', 'neurofunk', 'vlaamse kinderliedje', 'classic dubstep', 'french psychedelic', 'psychill', 'rai algerien', 'chinderlieder', 'sovietwave', 'australian talent show', 'speed plug brasileiro', 'futuristic swag', 'geek folk', 'skansk musik', 'kompa', 'substep', 'rumba congolaise', 'kundalini', 'gaita zuliana', 'african gospel', 'balkan beats', 'cumbia amazonica', 'wyoming roots', 'touhou', 'ndombolo', 'hinos ccb', 'electric bass', 'epa dunk', 'cumbia salvadorena', 'dutch drill', 'dmv rap', 'abstract', 'russian chanson', 'rap regio', 'medieval folk', 'cumbia uruguaya', 'enka', 'chill out', 'bozlak', 'japanese chill rap', 'horrorcore', 'galante era', 'nova musica carioca', 'psychedelic folk', 'vintage tollywood', 'folclor colombiano', 'neo-traditional country', 'norske viser', 'experimental vocal', 'deathrash', 'african reggae', 'kleinkunst', 'sung poetry', 'virgin islands reggae', 'paisley underground', 'viet lo-fi', 'trova mexicana', 'russian reggae', 'grindcore', 'finnish drill', 'folclore santiagueno', 'flamenco guitar', 'kompa gouyad', 'jamtronica', 'techengue', 'tape club', 'huapango', 'japanese folk', 'dark disco', 'folklore surero', 'malay rap', 'bubblegum bass', 'dutch americana', 'rap maromba', 'musica campechana', 'vintage schlager', 'aggrotech', 'vgm remix', 'musica oaxaquena', 'french movie tunes', 'boogaloo', 'mod revival', 'raw techno', 'gaian doom', 'nu age', 'salsa international', 'thai folk', 'horror synth', 'champeta', 'tallava', 'cuban alternative', 'alberta country', 'zespol dzieciecy', 'copla', 'kodomo no ongaku', 'musica maranhense', 'drift', 'early music ensemble', 'kurdish folk', 'chinese minyao', 'singing bowl', 'alternative ccm', 'folklore boliviano', 'soukous', 'huayno peruano', 'blackgaze', 'military rap', 'cumbia surena', 'psychedelic doom', 'musica juiz-forana', 'neue volksmusik', 'chopped and screwed', 'israeli folk', 'uk desi rap', 'japanese ska', 'jirai kei', 'new tribe', 'lo-fi brasileiro', 'turntablism', 'jumpstyle', 'hauntology', 'zouglou', 'dreamgaze', "children's choir", 'riddim dubstep', 'orthodox chant', 'viet remix', 'chanson virale', 'luk thung', 'corridos cristianos', 'hard motivation', 'bluegrass gospel', 'motivation', 'musica canaria', 'russian ska', 'chanson quebecois', 'trinibad', 'piratenmuziek', 'speed garage', 'clean comedy', 'nyhc', 'balearic', 'doujin', 'downtempo bass', 'azeri traditional', 'western americana', 'hard industrial techno', 'bounce', 'auteur-compositeur-interprete quebecois', 'shojo', 'oceania soundtrack', 'minimal wave', 'belgian techno', 'cuban rumba', 'cumbia editada', 'adoracion pentecostal', 'brass band', 'hel', 'talentkonkurranse', 'techno rave', 'future bounce', 'acid techno', 'ballroom', 'queercore', 'musica criolla', 'bornesange', 'euskal musica', 'musical advocacy', 'straight edge', 'scottish folk', 'freak folk', 'guitarra mexicana', 'french baroque', 'cha-cha-cha', 'utopian virtual', 'dakke dak', 'danseband', 'rap underground colombiano', 'experimental bass', 'chinese drama ost', 'salsa cubana', 'brutal deathcore', 'progressive sludge', 'nuevo folklore argentino', 'philly drill', 'comptine', 'native american contemporary', 'doomgaze', 'black thrash', 'folklore peruano', 'chinese manyao', 'nerdcore', 'zikir', 'stride', 'contemporary gospel', 'harpsichord', 'reggae catala', 'turkce remix', 'musica andina chilena', 'telugu folk', 'neo-progressive', 'canzone genovese', 'tin pan alley', 'calypso', 'new england americana', 'renaissance', 'morna', 'rabindra sangeet', 'sgija', 'gbvfi', 'musique urbaine kinshasa', 'mashup', 'afrobeat brasileiro', 'rap motywacja', 'french worship', 'antilliaanse rap', 'rebetiko', 'spacewave', 'sevillanas', 'hard alternative', 'toronto rap', 'kasi rap', 'forro tradicional', '528hz', 'kabyle', 'german show tunes', 'musik anak-anak', 'nu skool breaks', 'chanson humoristique', 'plugg francais', 'porro', 'plena uruguaya', 'rap angolano', 'musica nicaraguense', 'carimbo', 'rogaland musikk', 'rap criolo', 'nordic folk', 'fussball', 'anime drill', 'oi', "children's story", 'arab folk', 'streektaal', 'queer country', 'cuatro venezolano', 'seemannslieder', 'suomirap', 'rap italiano old school', 'underground rap', 'musica sarda', 'men chika', 'kundiman', 'dungeon synth', 'nashville americana', 'balkan brass', 'mbalax', 'tekno', 'goregrind', 'ritmo kombina', 'bayerischer rap', 'keroncong', 'mallsoft', 'elephant 6', "man's orchestra", 'ulkucu sarkilar', 'marathi traditional', 'folklore paraguayo', 'world chill', 'spanish invasion', 'merengue tipico', 'country quebecois', 'tropical tecladista', 'gothabilly', 'japanese celtic', 'cristiana para ninos', 'nova canco', 'german boom bap', 'drill and bass', 'avant-garde', 'jamaican ska', 'accordion', 'louvores pentecostais', 'mega funk', 'belgian dnb', 'french dub', 'funky breaks', 'vaqueiro', 'rosary', 'cueca chilena', 'new orleans funk', 'classic anime', 'british orchestra', 'rap inde', 'fallen angel', 'early reggae', 'folclor afrocolombiano', 'family gospel', 'deep dnb', 'proto-techno', 'congolese gospel', 'gengetone', 'dutch dnb', 'tipico', 'medieval', 'voidgaze', 'kizomba antigas', 'experimental folk', 'full on', 'thai ost', 'icelandic folk', 'folklore nuevo argentino', 'tamborazo', 'cincinnati rap', 'mappila paattu', 'hard techno', 'folclore tucumano', 'bajki', 'cumbia boliviana', 'son cubano', 'c86', 'modern funk', 'tamil worship', 'neru', 'old-time', 'irish pub song', 'football', 'j-core', 'rap liegeois', 'zamba', 'choral', 'downtempo deathcore', 'puerto rican folk', 'coupe-decale', 'old west', 'ilahiler', 'operetta', 'musica santomense', 'phleng phuea chiwit', 'adoracion', 'semba', 'commons', 'zen', 'musica ayacuchana', 'ska espanol', 'yaoi', 'coral gospel', 'rap kreyol', 'gqom', 'uk dub', 'psychokore', 'svensk progg', 'forro gospel', 'kizomba cabo-verdiana', 'modern old-time', 'musique guadeloupe', 'musica tabasquena', 'audiophile vocal', 'modular synth', 'slow game', 'nwocr', 'japanese underground rap', 'vintage tango', 'folkmusik', 'viola caipira', 'korean underground rap', 'outsider', 'modern jungle', 'musica para criancas', 'musica capixaba', 'lagu sunda', 'musica jalisciense', 'rumeli turkuleri', 'library music', 'modern uplift', 'midwest americana', 'german country', 'musica sudcaliforniana', 'draga', 'victorian britain', 'oshare kei', 'swedish synth', 'nephop', 'thai bl ost', 'symfonicky orchestr', 'rap capixaba', 'neue deutsche todeskunst', 'reggae peruano', 'modern goth', 'native american flute', 'okinawan folk', 'cover acustico', 'blaskapelle', 'hiplife', 'funana', 'uk worship', 'blasmusik', 'mandolin', 'hardtekk', 'mestissatge', 'funk evangelico', 'salsa urbana', 'musica madeirense', 'musica crista reformada', 'british country', 'bleep techno', 'trondersk musikk', 'atmospheric dnb', 'musiikkia lapsille', 'corrosion', 'baiao', 'hungarian folk', 'chinese traditional', 'beat italiano', 'chamame', 'traditional folk', 'persian melodic rap', 'canterbury scene', 'musica tropical guatemalteca', 'persian alternative', 'rap paranaense', 'grimewave', 'trival', 'coco', 'swing italiano', 'scouse rap', 'hammond organ', 'maimouna', 'shimmer psych', 'gothic americana', 'deep adult standards', 'japanese guitar', 'andean flute', 'marathi devotional', 'trio huasteco', 'mecha', 'ghanaian gospel', 'haitian gospel', '432hz', 'naat', 'musica istmena', 'russian plugg', 'neapolitan funk', 'deep techno', 'modern cello', 'plunderphonics', 'musica andina colombiana', 'spanish reggae', 'mongolian alternative', 'kora', 'balkan drill', 'technical thrash', '48g', 'bass music', "nz children's music", 'drone folk', 'zillertal', 'greek downtempo', 'eventyr', 'russian folk', 'vintage hollywood', 'singeli', 'choro', 'nordnorsk musikk', 'nova musica paulista', 'string duo', 'indian underground rap', 'nuevo flamenco', 'breakcore', 'lagu bali', 'modern enka', 'south african choral', 'musica baiana', 'swing revival', 'indonesian psychedelia', 'rumba catalana', 'musica eletronica gospel', 'darkstep', 'multidisciplinary', 'kaneka', 'arab groove', 'charanga', 'cantautor catala', 'dutch prog', 'seinen', 'rap ivoire', 'warm drone', 'villancicos', 'reggae maghreb', 'igbo rap', 'deep funk ostentacao', 'bard', 'musica feirense', 'new mexico music', 'zilizopendwa', 'folklore chileno', 'tamil devotional', 'musica quintanarroense', 'jesus movement', 'deep norteno', 'deep soundtrack', 'classic luk thung', 'neo-pagan', 'oud', 'christian a cappella', 'twoubadou', 'musica afroperuana', 'nueva trova chilena', 'hexd', 'funk capixaba', 'ai', 'vincy soca', 'kurdish remix', 'canadian indigenous music', 'korean worship', 'chant religieux', 'telugu devotional', 'underground amapiano', 'marimba orquesta', 'dub techno', 'neurostep', 'pinoy praise', 'rare groove', 'acidcore', 'brazilian percussion', 'wu fam', 'gyerekdalok', 'hardstyle', 'ghettotech', 'skramz', 'lagu bugis', 'louvor icm', 'sinhala rap', 'rap femenino mexicano', 'dub reggae', 'waiata maori', 'australian ska', 'harp', 'hindustani vocal', 'griot', 'slack-key guitar', 'minimal dub', 'musica mixteca', 'gospel drill', 'raboday', 'neotango', 'taiwan campus folk', 'spanish folk', 'german literature', 'koligeet', 'nz folk', 'campursari', 'powerviolence', 'dark folk', 'funk mexicano', 'orquesta tipica', 'sound art', 'progressive doom', 'tinku', 'musiqi-ye zanan', 'schranz', 'spa', 'beatboxing', 'nl folk', 'beatdown', 'guided meditation', 'cape verdean folk', 'world meditation', 'chinese talent show', 'beats', 'histoire pour enfants', "black 'n' roll", 'czech country', 'footwork', 'bouyon', 'new orleans americana', 'bisaya rap', 'dubsteppe', 'tunantada', 'telugu worship', 'norsk lovsang', 'uk bass', 'musica paraibana', 'progressive alternative', 'musique militaire', 'college a cappella', 'american grindcore', 'bhojpuri folk', 'exotica', 'nz christian', 'scottish techno', 'truck-driving country', 'synth prog', 'musica guerrerense', 'bardcore', 'comedia', 'gospel rap', 'neofolk', 'folclore jujeno', 'bouzouki', 'chinese audiophile', 'british comedy', 'musica cabo-verdiana', 'alt-idol', 'schweizer rap', 'technical deathcore', 'musica infantil catala', 'anglican liturgy', 'afghan rap', 'sound effects', 'piano mpb', 'scottish hush', 'black comedy', 'polca paraguaya', 'greek swing', 'japanese beats', 'cornetas y tambores', 'north moroccan rap', 'voetbal', 'dub brasileiro', 'irish neo-traditional', 'italian gothic', 'musica catarinense', 'muzica etno', 'spytrack', 'zcc', 'chinese worship', 'guitarra andina', 'lagu aceh', 'gospel reggae', 'ukulele', 'dutch moombahton', 'musica yucateca', 'cartoni animati', 'thall', 'chakra', 'charango', 'british choir', 'brazilian ska', 'raggatek', 'folklore venezolano', 'jain bhajan', 'fan chant', 'detroit techno', 'austrian dnb', 'grebo', 'bandoneon', 'candomble', 'broken transmission', 'sunnlensk tonlist', 'ramonescore', 'musica bautista', 'mashcore', 'alpine yodeling', 'trinidadian reggae', 'deep idm', 'er ge', 'chinese folk', 'afro-cuban percussion', 'slam poetry', 'halftime dnb', 'marimba de guatemala', 'maithili', 'chamber folk', 'one-person band', 'nwothm', 'deep ragga', 'muzica crestina', 'musica duranguense', 'carnaval limburg', 'visor', 'italian library music', 'danish techno', 'greek fem rap', 'vogue', 'bomba y plena', 'nuevo tango', 'german prog', 'psych gaze', 'corridos adictivos', 'tamazight', 'british grindcore', 'vintage chanson', 'polish prog', 'berlin school', 'uk82', 'zim urban groove', 'moog', 'marathi remix', "death 'n' roll", 'persian traditional', 'hungarian underground rap', 'ska catala', 'makossa', 'afro-funk', 'dansei seiyu', 'sami', 'deep contemporary country', 'korean drill', 'nz dnb', "muzika l'yeladim", 'christmas product', 'gothic alternative', 'tuareg guitar', 'asakaa', 'appalachian folk', 'hardgroove', 'scratch', 'flick hop', 'israeli techno', 'accordeon', 'music hall', 'cruise', 'american primitive', 'swahili gospel', 'korean superband', 'usbm', 'malayalam madh', 'khayal', 'waiata mo tamariki', 'russian ccm', '2-step', 'uk christian rap', 'italian renaissance', 'rap tico', 'martial industrial', 'detskie pesni', 'chamber orchestra', 'subliminal product', 'musica portuguesa contemporanea', 'tearout', 'psicodelia chilena', 'fictitious orchestra', 'st louis drill', 'musique comorienne', 'bemani', 'orchestral performance', 'paidika tragoudia', 'latmiya', 'batida', 'sambass', 'folklore uruguayo', 'psalmen', 'fake', 'sitar', 'karaoke', 'palestinian alternative', 'musica michoacana', 'neo kyma', 'rap feminino chileno', 'polyphony', 'south african underground rap', 'ryukyu ongaku', 'rap chretien', 'yugoslav new wave', 'jig and reel', 'chaabi marocain', 'breton folk', 'modern psychedelic folk', 'chinese soundtrack', 'tuna', 'musica nublensina', 'danzon', 'malayalam cover', 'bomba', 'violao classico', 'violin', 'bagpipe', 'mpb gospel', 'sega mauricien', 'cumbia cristiana', 'deep dubstep', 'spanish techno', 'gospel singers', 'uwielbienie', 'goralski', 'vegan straight edge', 'mandible', 'clap and tap', 'remix product', 'japanese boom bap', 'salsa cristiana', 'deep disco', 'bahai', 'musique pour enfant quebecois', 'memphis americana', 'shoegaze brasileiro', 'finnish new wave', 'lldm', 'slushwave', 'modern swing', 'sanfona', 'naija old school', 'urban kiz', 'british industrial', 'british experimental', 'military band', 'sheilat', 'dennery segment', 'rap portuense', 'kuduro', 'detske pisnicky', 'deep big room', 'japanese psychedelic', 'didgeridoo', 'irish rebel song', 'uk beatdown', 'ukulele cover', 'pornogrind', 'new isolationism', 'norwegian americana', 'musica hondurena', 'trio batak', 'panpipe', 'cancoes infantis', 'swiss folk', 'louange', 'comedienne', 'czsk reggae', 'concert band', 'drill beats', 'san antonio rap', 'svensk lovsang', 'hamburger schule', 'modern darkwave', 'musica jibara', 'spanish prog', 'traditional british folk', 'italian new wave', 'hindi worship', 'american melodeath', 'persian drill', 'telugu remix', 'musica lombarda', 'swiss techno', 'greek guitar', 'psybass', 'vintage broadway', 'portuguese folk', 'flemish folk', 'swedish prog', 'musicas espiritas', 'jalsat', 'garage psych', 'gospel italiano', 'throat singing', 'rap pernambucano', 'japanese worship', 'neo-kraut', 'musica aguascalentense', 'rusyn folk', 'punta', 'sungura', 'stateside dnb', 'stomp and whittle', 'dronescape', 'glitch beats', 'plugg en espanol', 'muzica copii', 'makina', 'musica pitiusa', 'drill dominicano', 'indian percussion', 'festigal', 'contrabass', 'norwegian space disco', 'bass trip', 'hungarian techno', 'moderne ludovky', 'malayalam worship', 'lagu sasak', 'banda guanajuatense', 'english renaissance', 'light music', 'guitarra clasica', 'cuento infantile', 'kenyan drill', 'baptist gospel', 'armenian folk', 'detske pesnicky', 'german dnb', 'trad quebecois', 'italian folk', 'rap galego', 'solipsynthm', 'brazilian techno', 'erotica', 'atmospheric sludge', 'brazilian dnb', 'highlife', 'deep liquid', 'psydub', 'broken beat', 'power thrash', 'corsican folk', 'musikkorps', 'romanian folk', 'psalms', 'sega', 'magyar mulatos', 'xhosa', 'russian techno', 'minimal dnb', 'industrial techno', 'mexican traditional', 'experimental synth', 'rasiya', 'nitzhonot', 'canadian experimental', 'swiss reggae', 'capoeira', 'deep liquid bass', 'kenyan alternative', 'freakbeat', 'spirituals', 'orquestas de galicia', 'mezmur', 'experimental guitar', 'boogie-woogie', 'musica costarricense', 'german dark minimal techno', 'forest psy', 'serialism', 'reiki', 'gamecore', 'erotik', 'swedish techno', 'dirty texas rap', 'blackened screamo', 'french dnb', 'musica potiguar', 'russian dnb', 'bansuri', 'klapa', 'birdsong', 'reggae mexicano', 'deep new wave', 'australian experimental', 'ukhc', '8-bit', 'south african country', 'bible', 'berlin minimal techno', 'minimal dubstep', 'austro-german modernism', 'japanese experimental', 'nz gangsta rap', 'italian ska', 'mbira', 'shamisen', 'musica nortena chilena', 'gypsy fusion', 'purple sound', 'dunedin sound', 'rap moldovenesc', 'japanese traditional', 'punjabi folk', 'laulaja-lauluntekija', 'erotic product', 'drill tuga', 'belgian new wave', 'joropo', 'language', 'destroy techno', 'lezginka', 'oberkrainer', 'pacific islands gospel', 'lagu sabahan', 'musica occitana', 'vlaamse rap', 'turkish reggae', 'contemporary folk', 'spacesynth', 'string folk', 'powwow', 'german melodeath', 'deep neofolk', 'country boogie', 'yoruba worship', 'korean soundtrack', 'afro psych', 'madrigal', 'chill baile', 'drumfunk', 'experimental club', 'thrash core', 'zydeco', 'christlicher rap', 'russian shoegaze', 'cantaditas', 'japanese idm', 'brazilian experimental', 'traditional scottish folk', 'salay', 'american choir', 'venda rap', 'gamelan', 'tango cancion', 'musica mocambicana', 'progressive breaks', 'guitarra argentina', 'new wave of osdm', 'hengelliset laulut', 'early music choir', 'samba gospel', 'navajo', 'musique tahitienne', 'mexican son', 'nordic shoegaze', 'afrobeat fusion', 'yoga', 'barbershop', 'rap guarulhense', 'tunisian alternative', 'sefardi', 'irish drill', 'italian mandolin', 'galego', 'canadian psychedelic', 'australian techno', 'ney', 'vlaamse cabaret', 'musique acadienne', 'ragtime', 'cabaret', 'nohay', 'banda peruana', 'marimba mexicana', 'american orchestra', 'abstract idm', 'russian pixel', 'ny roots', 'sasscore', 'voidgrind', 'malaysian tamil rap', 'erhu', 'celtic harp', 'ruta destroy', 'euroska', 'neo-psicodelia brasileira', 'western saharan folk', 'musica calabrese', 'synthwave brasileiro', 'vaudeville', 'boogie', 'barnalog', 'australian comedy', 'slovak folk', 'dutch musical', 'gospel amapiano', 'manitoba country', 'friese muziek', 'tzadik', 'galician folk', 'klezmer', 'musica mapuche', 'traditional reggae', 'string band', 'new weird finland', 'son cubano clasico', 'musica goiana', 'humppa', 'uilleann pipes', 'technical grindcore', 'musica indigena mexicana', 'fo jing', 'musica mallorquina', 'lo star', 'judaica', 'chicago mexican', 'euskal reggae', 'circus', 'speedcore', 'portuguese techno', 'georgian alternative', 'deep flow', 'talentos brasileiros', 'cybergrind', 'psybreaks', 'african percussion', 'folklore veracruzano', 'szanty', 'polish folk', 'sinogaze', 'forro manauara', 'byzantine', 'rap tuga underground', 'finnish reggae', 'underground boom bap', 'old school highlife', 'atmospheric doom', 'rap congolais', 'epic doom', 'french folk', 'experimental techno', 'talentkonkurrence', 'folklore cuyano', 'palestinian traditional', 'lagu karo', 'washboard', 'crossover prog', 'ukrainian folk', 'therapy', 'neo-crust', 'marching band', 'blackened crust', 'street band', 'darbuka', 'rap ecuatoriano', 'bmore', 'tanzlmusi', 'mallet', 'junior songfestival', 'progressive thrash', 'pasodobles', 'hard minimal techno', 'gnawa', 'finlandssvenska musik', 'norwegian gospel', 'lagu tarling', 'korean shoegaze', 'bisaya worship', 'rap catarinense', 'ukrainian experimental', 'traditional ska', 'franco-flemish school', 'traditional english folk', 'musica pernambucana', 'norwegian prog', 'zim gospel', 'narodnozabavna', 'bachchon ke geet', 'komedi', 'balfolk', 'jewish a capella', 'musica mexiquense', 'musica valenciana', 'deep freestyle', 'noisecore', 'american oi', 'grenada soca', 'dainuojamoji poezija', 'military cadence', 'musique touareg', 'azeri alternative', 'musique mariage algerien', 'massage', 'taraneem', 'tibetan mantra', 'musica antigua', 'swiss worship', 'lagu manado', 'xinyao', 'swedish experimental', 'swedish underground rap', 'classic tollywood', 'mincecore', 'musica sammarinese', 'bajan soca', 'louisville underground', 'czech alternative rap', 'korean bl ost', 'chimurenga', 'montana roots', 'canadian comedy', 'modern big band', 'bagpipe marching band', 'muzica usoara', 'krajiska muzika', 'spanish experimental', 'tribute', 'musica paranaense', 'kannada bhava geethe', 'hi-tech', 'polka nortena', 'college marching band', 'black death', 'raspe', 'beach music', 'polyphonies corses', 'dikir barat', 'second line', 'cascadia psych', 'bornehistorier', 'hjemmesnekk', 'muzica moldoveneasca', 'd-beat', 'acousmatic', 'backing track', 'mindfulness', 'traditional funk', 'michigan folk', 'breaks', 'dessin anime', 'irish banjo', 'igbo traditional', 'finnish worship', 'deep funk', 'musica de intervencao', 'rap gaucho', 'cantonese worship', 'lasten satuja', 'musique nigerienne', 'indonesian deathcore', 'kabyle moderne', 'algerian folk', 'reggae tico', 'zenonesque', 'old school nederhop', 'cymraeg', 'afrikaans gqom', 'noel quebecois', 'odia bhajan', 'rwandan gospel', 'kuduro antigo', 'rap abc paulista', 'polish techno', 'neo grime', 'algorave', 'zambian gospel', 'cornish folk', 'fuji', 'historic piano performance', 'malagasy folk', 'french oi', 'russian romance', 'rautalanka', 'heligonka', 'greek folk', 'mexican experimental', 'liechtenstein', 'deep psychobilly', 'go-go', 'anthem', 'death doom', 'bal-musette', 'deep darkpsy', 'balinese traditional', 'kritika', 'doomcore', 'ugandan gospel', 'musica eletronica brasileira', 'native american spiritual', 'schwyzerorgeli', 'khmer', 'canadian drill', 'murga', 'grunneger muziek', 'power noise', 'musica etnica', 'whale song', 'ostschlager', 'new tejano', 'prog quebec', 'japanese techno', 'prepared piano', 'german renaissance', 'brass ensemble', 'taiwanese indigenous music', 'rap sureno chileno', 'chaabi algerien', 'hypnosis', 'fado antigo', 'comptine africaine', 'finnish folk', 'jumptek', 'musique mahoraise', 'meenawati', 'mongolian folk', 'persian neo-traditional', 'contemporary choir', 'norwegian psychedelic', 'nisiotika', 'kerkkoor', 'juju', 'orquesta tropical', 'cocuk masallari', 'rap salvadoreno', 'experimental psych', 'bloco', 'dansk lovsang', 'musiikkia lapista', 'baltic folk', 'chant basque', 'christian deathcore', 'scottish gaelic folk', 'steel guitar', 'chabad niggunim', 'norwegian experimental', 'quarteto gospel', 'arpa grande', 'musica sul-mato-grossense', 'string quartet', 'free folk', 'honky-tonk piano', 'musica andorra', 'britcore', 'mezwed', 'modular techno', 'gotlandsk musik', 'meyxana', 'sean-nos singing', 'old school ebm', 'mluvene slovo', 'skinhead oi', 'basque folk', 'igbo worship', 'detski pesnichki', 'ukrainian ccm', 'musique mandingue', 'nueva ola peruana', 'scottish fiddle', 'welsh folk', 'weightless', 'spanish renaissance', 'danish experimental', 'tavern', 'bohemian baroque', 'dubstep product', 'rap norteno chileno', 'japanoise', 'yorkshire folk', 'georgian folk', 'drikkelek', 'geinin song', 'japanese prog', 'classic afrobeat', 'cambridge choir', 'haur kantak', 'afrikaans gospel', 'musica purepecha', 'albanian alternative', 'birthday', 'wind symphony', 'kaseko', 'sebene', 'japanese choir', 'barnasogur', 'slaskie piosenki', 'funeral doom', 'duduk', 'musica wixarika', 'polka', 'screamocore', 'comfy synth', 'fado de coimbra', 'university choir', 'banda de viento', 'psytech', 'bleakgaze', 'musica guineense', 'nova musica amazonense', 'rap guineen', 'seggae', 'maracatu', 'pohadky', 'old-time fiddle', 'psicodelia mexicana', 'deep discofox', 'maloya', 'afro-cuban traditional', 'musica brasiliense', 'rondalla', 'choro contemporaneo', 'siberian folk', 'cajun', 'irish techno', 'shakuhachi', 'muzica lautareasca', 'kinderliedjies', 'hammered dulcimer', 'starogradska', 'traditional bluegrass', 'tennessee experimental', 'yu-mex', 'musica chiapaneca', 'musica indigena brasileira', 'austrian techno', 'sludgecore', 'mevlevi sufi', 'hard glam', 'musica otavalena', 'nova musica maranhense', 'acid idm', 'estonian folk', 'aggro chileno', 'melodic doom', 'rap mocambicana', 'hypnotic techno', 'dambora', 'viola da gamba', 'convent', 'serbian folk', 'haryanvi ragni', 'son jarocho', 'japanese concert band', 'reading', 'deep downtempo fusion', 'ngoni', 'dicsoites', 'cape breton folk', 'guzheng', 'rap euskera', 'banda militar', 'protest folk', 'bluegrass fiddle', 'modern string quartet', 'free improvisation', 'nordnorsk rap', 'lastelaulud', 'chapman stick', 'gumbe', "women's choir", 'koledy', 'polish psychedelia', 'italian experimental', 'musica queretana', 'norwegian techno', 'concertina', 'bandolim', 'sacred steel', 'downtempo fusion', 'macedonian folk', 'boeremusiek', 'swiss country', 'full on groove', 'vocal ensemble', 'arpa paraguaya', 'latvian folk', 'deep g funk', 'vaikiskos dainos', 'thai shoegaze', 'early american folk', 'rap ecuatoguineano', 'lowercase', 'rap malien', 'scottish americana', 'rap nica', 'dark minimal techno', 'death industrial', 'musica tradicional dominicana', 'indonesian shoegaze', 'lagu iban', 'combos nacionales', 'benga', 'medway sound', 'edo old school', 'techno argentina', 'folk siciliana', 'nyckelharpa', 'noise', 'via', 'cuban funk', 'british brass band', 'sufi chant', 'experimental dub', 'vintage reggae', 'finnish tango', 'musica cearense', 'irish accordion', 'mathgrind', 'canti alpini', 'black sludge', 'shoegaze chileno', 'c64', 'rap gabonais', 'rez country', 'veena', 'musica morelense', 'oeteldonk', 'chamber choir', 'djecje pjesme', 'baps', 'steelpan', 'sda choir', 'illbient', 'ryukoka', 'lesotho traditional', 'denver rap', 'sundanese traditional', 'coptic hymn', 'marrabenta', 'cuatro puertorriqueno', 'deep hardtechno', 'tuna universitaria', 'neo-manele', 'finnish choir', 'greek techno', 'vintage country folk', 'japanese dub', 'qanun', 'trikiti', 'japanese orchestra', 'italogaze', 'guitar case', 'chamame brasilero', 'classic australian country', 'yoik', 'german orchestra', 'dub poetry', 'myanmar gospel', 'baroque ensemble', 'norwegian folk', 'russian orchestra', 'gaita', 'mexican techno', 'swedish fiddle', 'irish fiddle', 'finnish experimental', 'coldwave', 'french renaissance', 'sarod', 'volkstumliche musik', 'musica sergipana', 'indonesian neo-psychedelia', 'keller synth', 'cifteli', 'gothic doom', 'tarantella', 'drama', 'rap toscana', 'sotalaulut', 'deep filthstep', 'brass band brasileiro', 'modern chamber music', 'medimeisterschaften', 'chinese reggae', 'magyar musicalek', 'bernu dziesmas', 'radio symphony', 'decije pesme', 're:techno', 'ancient mediterranean', 'ohangla', 'idol game', 'cello ensemble', 'rap alagoano', 'musica prehispanica', 'clawhammer banjo', 'shib', 'lute', 'oratory', 'syro-aramaic chant', 'balalaika', 'kompa chretien', 'mizo gospel', 'rap sergipano', 'fisarmonica', 'jug band', 'musica folk asturiana', 'swedish ebm', 'oxford choir', 'tamburica', 'modern mod', 'reggae boliviano', 'tuvan folk', 'canadian shoegaze', 'hong kong tv drama', 'chinese new year', 'skweee', 'swedish choir', 'muzica bisericeasca', 'neo-trad prog', 'bosstown sound', 'rominimal', 'rap paraguayo', 'canzone siciliane', 'australian shoegaze', 'nubian traditional', 'staff band', 'traditional southern folk', 'catalan folk', 'ringtone', 'danish folk', 'muzica ardeleneasca', 'russian choir', 'austrian orchestra', 'icelandic traditional', 'bulgarian folk', 'musica piauiense', 'kol isha', 'terrorcore', 'lagu maluku', 'rap nortista', 'cathedral choir', 'folclore portugues', 'musique urbaine brazzaville', 'cumbia funk', 'pilates', 'zarzuela', 'korean musicals', 'faroese folk', 'tibetan traditional', 'chamber ensemble', 'new jack smooth', 'mountain dulcimer', 'pontian folk', 'musica campista', 'turkish experimental', 'paracana', 'italo beats', 'dub product', 'pinoy shoegaze', 'irish flute', 'guitarra portuguesa', 'tabla', 'indian violin', 'dansk comedy', 'dungeon rap', 'swedish grindcore', 'vintage french psychedelic', 'animegrind', 'musique mauritanienne', 'musica menorquina', 'poetry', 'kinderchor', 'tar', 'hardingfele', 'dechovka', 'trekkspill', 'musica ecuatoguineana', 'irish underground rap', 'japanese buddhist chant', 'historically informed performance', 'american early music', 'baithak gana', 'xenharmonic', 'neo honky tonk', 'german shoegaze', 'bahamian folk', 'eastern bloc groove', 'afghan traditional', 'gotico brasileiro', 'musica rapa nui', 'deep full on', 'vintage swing', 'bengali folk', 'candombe', 'indonesian experimental', 'santoor', 'arab experimental', 'dragspel', 'abstractro', 'irish gaelic folk', 'balafon', 'chinese experimental', 'javanese gamelan', 'garifuna folk', 'lai hla', 'marcha funebre', 'totalism', 'spanish baroque', 'streichquartett', 'yuri', 'musique concrete', 'rajasthani folk', 'circassian folk', 'taiko', 'canadian choir', 'medieval ensemble', 'scottish drill', 'minimal synth', 'lithuanian folk', 'molam', 'batswana traditional', 'jugendchor', 'alandsk musik', 'muzica maramureseana', 'duhovne pjesme', "min'yo", 'rap gasy', 'korean experimental', 'thai worship', 'israeli traditional', 'folclore castilla y leon', 'folk cantabria', "men's choir", 'marinera', 'himalayan folk', 'trio cubano', 'italian screamo', 'nhac thieu nhi', 'dutch folk', 'pinoy traditional', 'senegalese traditional', 'koto', 'bangla gojol', 'croatian folk', 'dombra', 'rap potiguar', 'sindhi', 'hula', 'prank', 'neo-proto', 'novos talentos brasileiros', 'german choir', 'finnish techno', 'zeuhl', 'lagu betawi', 'otroske pesmice', 'polynesian traditional', 'scottish smallpipe', 'brass quintet', 'maghreb', 'musique peule', 'indonesian bamboo', 'malawian folk', 'saxophone trio', 'marimba', 'dhrupad', 'euro hi-nrg', 'musica colimense', 'epic collage', 'ho munda', 'nyahbinghi', 'kentucky mountain folk', 'mento', 'muzica banateana', 'piada', 'dytyachi pisni', 'zither', 'hangoskonyvek', 'swiss experimental', 'guggenmusik', 'izvorna muzika', 'experimental percussion', 'bikutsi', 'tanzorchester', 'lok dohori', 'anime game', 'eletronica underground brasileira', 'italian modern prog', 'salon music', 'iranian experimental', 'chilean techno', 'kolo', 'welsh choir', 'dutch baroque', 'borneo traditional', 'rozpravky', 'vintage radio show', 'kikuyu gospel', 'moravian folk', 'experimental big band', 'dutch experimental', 'norwegian choir', 'musique soninke', 'orquesta cubana', 'chinese wind', 'pipa', 'cerkes muzikleri', 'rakugo', 'tulum', 'autoharp', 'musique ancienne', 'kapa haka', 'classic nz country', 'musica blumenauense', 'stubenmusik', 'frafra', 'field recording', 'ceske chvaly', 'middle eastern traditional', 'albanian folk', 'vintage hawaiian', 'detskie rasskazy', 'santur', 'folklore panameno', 'italian soprano', 'mapouka', 'deep italo disco', 'black noise', 'ceilidh', 'caucasian folk', 'sound collage', 'haitian traditional', 'gwoka', 'korean traditional', 'italian baritone', 'ukrainian choir', 'shehnai', 'musica mato-grossense', 'beat poetry', 'belgian experimental', 'kosovan folk', 'djembe', 'alpenpanorama', 'baroque singing', 'musica amapaense', 'trombone brasileiro', 'african experimental', 'suomisaundi', 'dweilorkest', 'nordic orchestra', 'musica acoriana', 'musica campineira', 'bandura', 'danish choir', 'guqin', 'recorder', 'georgian polyphony', 'humour francais', 'chill groove', 'antilliaanse folklore', 'cimbalova muzika', 'theremin', 'deep surf music', 'kantele', 'modern performance', 'musica rondoniense', 'charred death', 'moorish traditional', 'organetto', 'orkney and shetland folk', 'string orchestra', 'h8000', 'tan co', 'taiwan graduation song', 'aghani lil-atfal', 'karntner volksmusik', 'gayageum', 'gong', 'esperanto', 'new england experimental', 'glass', 'italian occult psychedelia', 'malaysian traditional', 'folclore extremeno', 'brazilian grindcore', 'italian baroque ensemble', 'extratone', 'naturjodel', 'austrian choir', 'musica londrinense', 'rabm', 'marsmuziek', 'musica caririense', 'russian screamo', 'somatik techno', 'icelandic choir', 'zohioliin duu', 'greek clarinet', 'gospel papiamento', 'vintage old-time', 'italian bass', 'proto-rap', 'jota aragonesa', 'vintage gospel', 'irish experimental', 'german grindcore', 'skiffle', 'taiwan experimental', 'hipco', 'indian techno', 'egyptian traditional', 'folclore navarra', 'cimbalom', 'historic orchestral performance', 'flashcore', 'czech swing', 'folklore quebecois', 'french orchestra', 'orkiestra symfoniczna', 'landler', 'hard chime', 'magyar kabare', 'thai traditional', 'cante alentejano', 'czech psychedelic', 'italian industrial', 'band organ', 'afrikaans folk', 'moroccan traditional', 'thai psychedelic', 'ethnomusicology', 'ainu folk', 'northumbrian folk', 'deep orgcore', 'karelian folk', 'rap paraense', 'viola', 'nadaswaram', 'korean minyo', 'gypsy', 'minnesang', 'rap burkinabe', 'musique traditionnelle congolaise', 'palm wine guitar', 'frevo', 'experimental dubstep', 'baltic choir', 'musica roraimense', 'baoule', 'ethiopian traditional', 'fife and drum', 'troubadour', 'spoken word', 'portuguese early music', 'persian poetry', 'italian orchestra', 'song poem', 'boy soprano', 'appenzeller folk', 'kadongo kamu', 'animal singing', 'trombone ensemble', 'tatar folk', 'marathi balgeet', 'balochi folk', 'pansori', 'dizi', 'musique traditionnelle comorienne', 'inuit traditional', 'south african techno', 'lagu jambi', 'sarangi', 'euphonium', 'experimental poetry', 'yiddish folk', 'accordion band', 'musica sinfonica', 'trecento', 'sacred harp', 'portuguese experimental', 'polish experimental', 'akordeon', 'harmonikka', 'ghanaian traditional', 'taarab', 'nordnorsk ponk', 'industrial noise', 'traditional irish singing', 'malian traditional', 'kazakh traditional', 'vietnamese traditional', 'tanzanian traditional', 'ethereal gothic', 'historical keyboard', 'jaw harp', 'musica puntana', 'alphorn', 'bulgarian experimental', 'trouvere', 'deep chill-out', 'police band', 'uyghur folk', 'jewish cantorial', 'musica urbana oaxaquena', 'school choir', 'ars subtilior', 'necrogrind', 'musique tchadienne', 'australian choir', 'ghoststep', 'canto a tenore', 'lagu lampung', 'bells', 'south african dnb', 'huqin', 'art song', 'metis fiddle', 'central asian folk', 'pygmy music', 'shantykoren', 'deep motown', 'pibroch', 'russian oi', 'school ensemble', 'vanuatu music', 'horo', 'tahitian traditional', 'handbells', 'polish early music', 'musica ponta-grossense', 'schrammelmusik', 'czech experimental', 'musica mogiana', 'albanian iso polyphony', 'drone psych', 'draaiorgel', 'clarinet ensemble', 'baroque woodwind', 'indonesian indigenous traditional', 'burkinabe traditional', 'musica maringaense', 'harsh noise wall', 'modern downshift', 'polish choir', 'baroque violin', 'lagu madura', 'kaba gaida', 'wagnerian singing', 'peruvian experimental', 'musique alsacienne', 'cantonese traditional', 'rwandan traditional', 'kyrgyz traditional', 'burmese traditional', 'burundian traditional', 'baroque cello', 'cambodian traditional', 'vintage swoon', 'musique centrafricaine', 'rhythm and boogie', 'marci brijuzi', 'papuan traditional', 'lao traditional', 'gay chorus', 'wind quintet', 'deep breakcore', 'tanci', 'uzbek traditional', 'musica timor-leste', 'italian violin', 'wandelweiser', 'kenyan traditional', 'quatuor a cordes', 'italian choir', 'zampogna', 'ugandan traditional', 'yemeni traditional', 'tajik traditional', 'wind ensemble', 'hungarian choir', 'mazandarani folk', 'historic string quartet', 'italian mezzo-soprano', 'swazi traditional', 'trallalero', 'baroque brass', 'himene tarava', 'vintage western', 'cinematic dubstep', "quartetto d'archi", 'yunnan traditional', 'string quintet', 'youth orchestra']
};
// ----------------------------------   DEPENDENCIES  ----------------------------------------------
const pgp = require('pg-promise')() // To connect to the Postgres DB from the node server
var request = require('request');
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');
const bcrypt = require('bcrypt'); //  To hash passwords

const express = require('express'); // To build an application server or API
const app = express(); //express object
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // To set the session object. To store or access session data, use the `req.session`, which is (generally) serialized as JSON by the store.
const axios = require('axios'); // To make HTTP requests from our server. We'll learn more about it in Part C.

const { genresByMood } = require('./G2M');

// -------------------------------------  DB CONFIG AND CONNECT   ---------------------------------------
const dbConfig = {
  host: 'db',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};




const prodDbConfig = {
  host: process.env.host,
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};


const db = pgp(dbConfig);  //dbconfig
// db test
db.connect()
  .then(obj => {
    // Can check the server version here (pg-promise v10.1.0+):
    console.log('Database connection successful');
    obj.done(); // success, release the connection;
  })
  .catch(error => {
    console.log('ERROR', error.message || error);
  });
//------------------------- Handlebars Config---------------------------------------------------
// create `ExpressHandlebars` instance and configure the layouts and partials dir.
const hbs = handlebars.create({
  extname: 'hbs',
  layoutsDir: __dirname + '/src/views/layouts',
  partialsDir: __dirname + '/src/views/partials',
});

//-------------------------- App Settings ---------------------------------
// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'src','views'));
app.use(bodyParser.json()); // specify the usage of JSON for parsing request body.

// initialize session variables
app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.use(express.static('src/resources'));
//app.use('/resources', express.static(path.join(__dirname, 'resources')));


const tokens = {
  access:undefined,
  refresh:undefined,
  username: undefined
}
//-------------------------------------FUNCTIONS -----------------------------
async function insertPlaylists(playlistJson,username){
  console.log("Inside insertPlaylists()")
    var playlistCount= playlistJson.limit

    for (i=0;i<playlistCount;i++){
        var id=playlistJson.items[i].id
        var name=playlistJson.items[i].name
        var img=playlistJson.items[i].images[0].url
        var trackCount=playlistJson.items[i].tracks.total
        let insert = `
        INSERT INTO playlists(playlist_id, playlist_owner, playlist_name, playlist_img, track_count)
        SELECT '${id}', '${username}', '${name}', '${img}', ${trackCount}
        WHERE NOT EXISTS (
            SELECT 1 FROM playlists WHERE playlist_id='${id}'
        )
    `;
        //let insert=`insert into playlists(playlist_id,playlist_owner,playlist_name,playlist_img) values('${id}', '${username}', '${name}', '${img}') where not exists (select playlist_id from playlists where playlistid='${id}')`
        console.log("INSERTING ",insert)
        // execute the insert query here
        db.query(insert, (err, res) => {
            if (err) {
              console.log(err.stack)
            } else {
              console.log(res.rows[0])
            }
          })
    }
}
// async function fetchGenres(playlistJson,total){
//   console.log("inside fetchGenres")
//   var allGenres = {} //this will collect all the genres (genre:count)
//   var promises = []; // this will collect all the promises
//   let totalValence = 0.0;
//   let totalDanceability = 0.0;
//   let totalEnergy = 0.0;

//   //parsing through each track
//   for (let i = 0; i < total; i++){
//     const trackId = playlistJson.tracks.items[i].track.id;
//     console.log("TRACK ID: ",trackId)
//     var artistSongUrl = playlistJson.tracks.items[i].track.album.artists[0].href //artist endpoint
//     const audioResponseUrl = `https://api.spotify.com/v1/audio-features/${trackId}`

//     var promise = Promise.all([
//       axios.get(artistSongUrl, {
//         headers: {
//           'Authorization': "Bearer " + tokens.access
//         }
//       }),
//       axios.get(audioResponseUrl, {
//         headers: {
//           'Authorization': "Bearer " + tokens.access
//         }
//       })
//     ]).then(([artistResult, audioResult]) => {
//       //audio stuff
//       totalValence += audioResult.data.valence;
//       totalDanceability += audioResult.data.danceability;
//       totalEnergy += audioResult.data.energy;

//       //genre stuff
//       var artistGenres = artistResult.data.genres //artist genres
//       console.log("artistgenres:",artistGenres)
//       // Add genres to allGenres
//       artistGenres.forEach(genre => {
//         if (allGenres[genre]) { 
//           allGenres[genre]++
//         } else {
//           allGenres[genre] = 1
//         }  
//       });

//       // You can now access audioResult.data to get the audio features
//       // For example:
//       // let audioFeatures = audioResult.data;
//       // console.log("audioFeatures:", audioFeatures)

//     }).catch(err => {
//       console.log("fetching artist genre error: ",err)
//     });

//     promises.push(promise);
//   }

//   await Promise.all(promises);
//   console.log("Total Valence:", totalValence);
//   console.log("Total Danceability:", totalDanceability);
//   console.log("Total Energy:", totalEnergy);
        
//   //console.log("allgenres after fetching",allGenres)
//   return allGenres
// }



function generateMood(genreArray) {
  console.log("inside generate mood");
    const moodCount = {
        'euphoric': 0,
        'sad': 0,
        'peaceful': 0,
        'dramatic': 0,
        'romantic': 0
    };
    genreArray.forEach((item) => {
        for (let [mood, genres] of Object.entries(genresByMood)) {
            if (genres.includes(item.genre)) {
                moodCount[mood] += item.count; // Add the count to the mood if the genre is found in its array
            }
        }
    });
    let maxMood = '';
    let maxCount = -1;
    for (let [mood, count] of Object.entries(moodCount)) {
        if (count > maxCount) {
            maxCount = count;
            maxMood = mood;
        }
    }
    return maxMood;
}


// -----------ROUTES---------------------

//for test purposes
app.get('/welcome', (req, res) => {
  res.json({status: 'success', message: 'Welcome!'});
});

app.get('/', (req,res)=>{
  res.redirect('/login');
});

app.get('/login', (req,res)=>{
  res.render('pages/login');
});

app.get('/register', (req,res)=>{
  res.render('pages/register');
});

app.get('/home', (req,res)=>{
  console.log("TOKEN",tokens.access)
  res.render('pages/home');
});

app.get('/', (req,res)=>{
  res.redirect('/user');
});

app.get('/user', (req,res)=>{
  res.render('pages/user');
});

app.get('/', (req,res)=>{
  res.redirect('/genres');
});

app.get('/genres', (req,res)=>{
  res.render('pages/genres');
});


//POST login api
app.post('/login', async(req,res)=>{
    try {
      console.log("in /login")
        const username = req.body.username;
        const password = req.body.password;
        const query= `select * from users where spotifyuser='${username}';`;
        let user= await db.any(query);
        //console.log(user);
        if(user.length!=0){
            // check if password from request matches with password in DB
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if(match){
              req.session.user = {client_id: process.env.CLIENT_ID};
                req.session.save();
                //save username
                tokens.username=username
                res.redirect('/spotify_auth_login')
                console.log
            }else{
              console.log("incorrect user/password")
              res.render('pages/login', {message: "Incorrect Username or Password."});
            }
        }else{
          res.render('pages/login', {message: "User does not exist. Please register."});
        }
    } catch(error) {
        res.render('pages/login', {message:error});
    }
});

// POST Register
app.post('/register', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const spotifyUsername = req.body.spotifyUsername;
  const followers = req.body.followers;
  const profilePic = req.body.profilePic;
  console.log(spotifyUsername, " in post")
  console.log("followers",followers)
  let query = 'INSERT INTO users (spotifyuser, password, followers, profile_pic) VALUES ($1, $2, $3, $4) RETURNING *';
  let checkExists = `select * from users where spotifyuser=$1`;

  // Check if user already exists
  db.oneOrNone(checkExists, [spotifyUsername])
    .then(user => {
      if (user) {
        // User already exists, redirect to login
        res.render('pages/login',{message:"Account already exists, please login"});
      } else {
        // User doesn't exist, proceed with registration
        db.one(query, [spotifyUsername, hash, followers, profilePic])
          .then(user => {
            console.log("inserted user", user);
            res.redirect('/login');
          })
          .catch(error => {
            console.error('ERROR:', error);
            console.log(error);
            res.redirect('/login');
          });
      }
    })
    .catch(error => {
      console.error('ERROR:', error);
      console.log(error);
      res.redirect('/login');
    });
});

app.get('/playlistsHomePage', async (req, res) => {  
  console.log("in /playlists homepage")
  console.log("/playlist home page username: ",tokens.username)
  const  usern  = tokens.username
  
  const q = await db.query(`SELECT * FROM playlists WHERE playlist_owner='${usern}'`)
  .then(async result => {
    console.log('success?')
    //console.log("ROWS: ",result)

    //another query here
    const user = await db.query(`SELECT * FROM users WHERE spotifyuser='${usern}'`);
    const profile_pic = user[0].profile_pic;
    const followers = user[0].followers;

    res.render('pages/home', { playlists: result, usern, profile_pic, followers });
  }).catch(err => {
    console.log(err)
  });
});



app.get('/get_playlists', async (req,res)=>{
  console.log("in /get_playlists")
  console.log("   user:",tokens.username)
  const tokenp = "Bearer " + tokens.access;
  const playlistUrl= `https://api.spotify.com/v1/users/${tokens.username}/playlists?limit=6`
  axios.get(playlistUrl,{
    headers: {
      'Authorization': tokenp
    }})
    .then(results => {
      //console.log("RESULTS",results.data)
      console.log("get_playlists usernmae",tokens.username)
      insertPlaylists(results.data,tokens.username);
      res.redirect('/playlistsHomePage');
    })
    .catch(error => {
      console.log("ERRORRRR")
      console.log(error);
    });
});


async function fetchMetrics(playlistJson,total){
  console.log("inside fetchGenres")
  var allGenres = {} //this will collect all the genres (genre:count)
  var artists=[]
  var promises = []; // this will collect all the promises

  let totalValence = 0.0;
  let totalDanceability = 0.0;
  let totalEnergy = 0.0;

  var audioUrl='https://api.spotify.com/v1/audio-features/{id}'
  //parsing through each track
  for (let i = 0; i < total; i++){
    const trackId = playlistJson.tracks.items[i].track.id;
    console.log("TRACK ID: ",trackId)
    //var artistSongUrl = playlistJson.tracks.items[i].track.album.artists[0].href //artist endpoint
    var artistId = playlistJson.tracks.items[i].track.artists[0].id //artist endpoint
    artists.push(artistId);
    const audioResponse = `https://api.spotify.com/v1/audio-features/${trackId}`

    var promise = axios.get(audioResponse, {
      headers: {
        'Authorization': "Bearer " + tokens.access
      }
    })
    .then(audioResult => {
      //console.log("AUDIO",audioResult.data);
      //var dance = result.data.danceability //artist genres
      //console.log("dance",dance) 
      totalValence += audioResult.data.valence;
      totalDanceability += audioResult.data.danceability;
      totalEnergy += audioResult.data.energy;

    }).catch(err => {
      console.log("fetching artist genre error: ",err)
    });

    promises.push(promise);
  }

  await Promise.all(promises);
  console.log("artist ids after fetching",artists)
  console.log("Artists: ", artists);
  console.log("Average Danceability: ", totalDanceability / total);
  console.log("Average Energy: ", totalEnergy / total);
  console.log("Average Valence: ", totalValence / total);
  return {
  artists: artists,
  averageDanceability: totalDanceability / total,
  averageEnergy: totalEnergy / total,
  averageValence: totalValence / total
};
}

function createGenreArray(artistsJson){
  let genreCount = {};
  console.log("JSON",artistsJson)
    artistsJson.artists.forEach(artist => {
        artist.genres.forEach(genre => {
            if (genreCount[genre]) {
                genreCount[genre]++;
            } else {
                genreCount[genre] = 1;
            }
        });
    });
    return genreCount;
}

app.get('/view_mood/:id', async (req, res) => {
  console.log("Inside /view_mood/:id route");
  var pid = req.params.id;
  const url = `https://api.spotify.com/v1/playlists/${pid}`;
  console.log(pid)

  axios.get(url, {
    headers: {'Authorization': "Bearer " + tokens.access}
  })
  .then(async playlistResult => {
    console.log("PLAYLIST: ",playlistResult.data)
    let check = `SELECT * FROM playlists WHERE playlist_name='${playlistResult.data.name}'`;

    //check if mood has already been generated
    console.log("Running db.query with check:", check);

    db.oneOrNone(check)
    .then(async dbResult => {
      console.log("db.query result:", dbResult);
      // rest of your code...
       // CASE 1: playlist exists and mood had been generated already
       if(dbResult && dbResult.mood != null){
        console.log("Mood is not null");
        let genreCount = {
          [dbResult.genre1]: 1,
          [dbResult.genre2]: 1,
          [dbResult.genre3]: 1
        };
        res.render('pages/genres', {    
          playlistName: playlistResult.data.name,
          img: playlistResult.data.images[0].url,
          mood: dbResult.mood,
          genres: genreCount
        });
      }
      // CASE 2: playlist exists but mood has NOT been generated
      else{
        console.log("hi")
        var total=playlistResult.data.tracks.total
        var fetchResult = await fetchMetrics(playlistResult.data, total);
        var artistids=fetchResult.artists.slice(0,50).join(",")
        var severalArtistsUrl=`https://api.spotify.com/v1/artists?ids=${artistids}`
        axios.get(severalArtistsUrl,{
        headers: {'Authorization': "Bearer " + tokens.access}
      })
      .then(artists => {
      var allGenres=createGenreArray(artists.data);
      console.log("GENRES",allGenres)
      var genreArray = Object.keys(allGenres).map(genre => {
        return { genre: genre, count: allGenres[genre] };
      });
      var topGenres = genreArray.sort((a, b) => b.count - a.count).slice(0, 3);

      console.log("TOP GENRES", topGenres)
          var query = `UPDATE playlists SET genre1='${topGenres[0].genre}', genre2='${topGenres[1].genre}', genre3='${topGenres[2].genre}' WHERE playlist_id='${pid}'`;
          db.query(query, (error, results) => {
            if (error) {
              console.error(error);
            } else {
              console.log("Genres inserted successfully"); 
            }
          });
          res.render('pages/genres', {    
            genres: topGenres,
            playlistName: playlistResult.data.name,
            img: playlistResult.data.images[0].url,
            averageDanceability: fetchResult.averageDanceability*100,
            averageEnergy: fetchResult.averageEnergy*100,
            averageValence: fetchResult.averageValence*100  
          });
        })
      }
    })
    .catch(err => {
      console.error("db.query error:", err);
    });
  })
  .catch(err=>{
    console.log("Fetching playlist error",err)
  })
});

app.get('/suggestions', (req, res) => {
  const averageValence = req.query.averageValence;
  const averageEnergy = req.query.averageEnergy;
  const averageDanceability = req.query.averageDanceability;
  const genres = req.query.genres;

  // Use the query parameters to make a request to the Spotify API
  axios.get('https://api.spotify.com/v1/recommendations', {
    params: {
      seed_genres: genres,
      target_danceability: averageDanceability,
      target_energy: averageEnergy,
      target_valence: averageValence,
    },
    headers: {
      Authorization: 'Bearer ' + tokens.access, 
    },
  })
  .then(response => {
    // Extract the songs from the Spotify API response
    const songs = response.data.tracks.map(track => ({
      name: track.name,
      artist: track.artists[0].name,
    }));

    // Send the list of songs as a JSON response
    res.json(songs);
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).send('An error occurred while fetching songs from Spotify.');
  });  
});







// var genreArray = Object.keys(allGenres).map(genre => {
    //   return { genre: genre, count: allGenres[genre] };
    // });
    //var mood = generateMood(ge);
    //console.log("MOOD:",mood)
    // Sort genreArray by count in descending order and take the first three genres
    
//var valence,dance,energy=generateMetrics(results);
    //var mood = generateMood(genreArray);
    // You may want to do something with 'mood' here, like sending it in the response
    // db.query(`UPDATE playlists set mood_name='${mood}' WHERE playlist_id='${pid}'`)
    // .then(result => {
    //   res.render('pages/genres', { genres: genreArray });
    // })
    // .catch(err => {
    //   console.log("cannot fetch playlist err: ",err)
    // });
    
app.get('/logout',(req,res)=>{
  res.render('pages/login',{message:"Logged out Successfully."});
});
module.exports = app.listen(3000);
// console.log('Listening on 3000');
// app.listen(3000);








//--------------------------------SPOTIFY AUTHORIZATION-----------------------------------------

// SOURCE: https://github.com/spotify/web-api-examples/blob/master/authorization/authorization_code/app.js
/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/code-flow
 */



var client_id = 'cb3a7ca41185461ea68486af1ccc4108';
var client_secret = '96f9609b1ad642038dd8224665bb85cb'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

const generateRandomString = (length) => {
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}

var stateKey = 'spotify_auth_state';


app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/spotify_auth', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        //updating tokens to use for other routes
        tokens.access = access_token;
        tokens.refresh = refresh_token;
        console.log("Updated tokens after auth:",tokens.access)
        
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          const spotifyUsername=body.id //fetch the spotify username
          tokens.username=body.id //save for later
          var followers=body.followers.total
          var profilePic=body.images[0].url
          console.log("updated username token: ",tokens.username)
          res.render('pages/register', {
            spotifyUsername: spotifyUsername,
            followers: followers,
            profilePic: profilePic
          });
          console.log(body.id);
        });

     
      } else {
        res.redirect('/#' +
          querystring.stringify({ 
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
   };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      
      //updating tokens to use for other routes
      tokens.access = access_token;
      tokens.refresh = refresh_token;
      
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});



// Spotify Auth for login

app.get('/spotify_auth_login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: 'http://localhost:3000/callback_login',
      state: state
    }));
});


app.get('/callback_login', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: 'http://localhost:3000/callback_login',
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        //updating tokens to use for other routes
        tokens.access = access_token;
        tokens.refresh = refresh_token;
        console.log("updating login access token:",tokens.access)
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          const spotifyUsername=body.id //fetch the spotify username
          tokens.username=body.id //save for later
          console.log("updated username token: ",tokens.username)
          res.redirect('/get_playlists');
          //res.redirect('/get_playlists',{spotifyUsername:spotifyUsername})
          console.log(body.id);
        });

        // we can also pass the token to the browser to make requests from there
        // res.redirect('/home')
        //   console.log(querystring.stringify({
        //     access_token: access_token,
        //     refresh_token: refresh_token
        //   }))
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
   };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      
      //updating tokens to use for other routes
      tokens.access = access_token;
      tokens.refresh = refresh_token;
      
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});




app.get('/login', (req, res) => {
  res.render('login', { isLoggedIn: false });
});

app.get('/home', (req, res) => {
  if(req.session.user) { // Assuming session middleware is used for login state
    res.render('home', { isLoggedIn: true });
  } else {
    res.redirect('/login');
  }
});

