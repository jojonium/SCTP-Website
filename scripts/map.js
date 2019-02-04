/* globals */
var mymap;
var historicSites  = new Array(22);
var foodAndBeverage = new Array(224);

/* markers */
var blueIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-blue.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-green.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

/* Graded Historic Site class */
class GHS {
  constructor(lat, lon, name, grade, type, comments) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.grade = grade;
    this.type = type;
    this.comments = comments;
  };
  
  /* displays info about this GHS in the right bar */
  show = () => {
    document.getElementById("rb-title").innerHTML = this.name;
    document.getElementById("rb-subtitle").innerHTML = this.type;
    document.getElementById("rb-content").innerHTML = this.comments;
    document.getElementById("rb-source").innerHTML = 
      `Source: <a href="http://www5.lcsd.gov.hk/internet/index.html">
        Geographic Information System on Hong Kong Heritage
      </a>`;
  };
}

/* Ground Level Location class */
class GLL {
  constructor(lat, lon, name, address, type, comments) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.address = address;
    this.type = type;
    this.comments = comments;
  };
  
  /* displays info about this GLL in the right bar */
  show = () => {
    document.getElementById("rb-title").innerHTML = this.name;
    document.getElementById("rb-subtitle").innerHTML = this.type;
    document.getElementById("rb-content").innerHTML = 
      `${this.address} <br><br> ${this.comments}`;
    document.getElementById("rb-source").innerHTML = 
      `Source: <a href="https://web.wpi.edu/Pubs/E-project/Available/E-project-032017-092307/unrestricted/WPI_IQP_2017_-_Heritage_Conservation_and_Online_Platform_in_the_Smart_Cultural_Triangle_Precinct,_Hong_Kong.pdf">
        IQP Report
      </a>`;
  };
}

historicSites[0] = new GHS(22.280058, 114.156045, "Bishop's House", 1, "Historic Building", "The Bishop's House was originally built in 1848 and rebuilt in 1851. Part of the premises was used as a school of St. Paul's College. It now serves as the office of the Anglican Archbishop of Hong Kong.");
historicSites[1] = new GHS(22.2813893, 114.1539173, "Central Police Station Compound", 1, "Historic Building & Anchoring Buildings", "Contains the Victoria Prison, The Magistracy, and the Central Police Station");
historicSites[2] = new GHS(22.2838935, 114.1493964, "Chinese Y.M.C.A. of Hong Kong", 1, "Historic Building", "Built in 1918, the Chinese Young Men's Chinese Association of Hong Kong Central Building was used as the headquarters of Chinese YMCA of Hong Kong until 1966. The premise was well-equipped with modern facilities at that time, including the first indoor swimming pool in Hong Kong and sports playground with a jogging track. The notable Chinese writer Lu Hsun once lectured in the Building in 1927. During the Second World War, the Building was used as the headquarters of the A. R. P. (Section A of Mid-level) which served thousands of refugees. During the Japanese Occupation (1941-1945), YMCA was under the control of the Education Department of the Japanese Government and offered Japanese and German courses. Since 1966, the building served as a centre for the youth after the headquarters moved to Waterloo Road.");
historicSites[3] = new GHS(22.281970, 114.150862, "Kom Tong Hall", 1, "Historic Building", "Built in 1914, Kom Tong Hall was named after its first owner, Ho Kom Tong. Ho was a prominent local businessman and philanthropist in the early 20th century. Kom Tong Hall had been the residence of the Ho family until 1960 when a Chang family purchased the building, and in the following year, sold it to the Church of Jesus Christ of Latter-days Saints. It was used by the Church as a religious centre since then. Demolition plan of Kom Tong Hall was raised in October 2002. Finally, Kom Tong Hall was purchased by the Government in early 2004. The building has been refurbished and converted into Dr. Sun Yat-sen Museum.");
historicSites[4] = new GHS(22.284562, 114.150386, "Ladder Street", 1, "Street Markets", "Ladder Street, stretching from Queen’s Road Central to Caine Road, was built in 1841 to 1850. With the prosperous commercial activity in Sai Ying Poon, many Chinese moved into the tenement buildings near Ladder Street. The street played an important role in connecting Central district and the Peak area. There was also an Indian community at Upper Lascar Row near Ladder Street. Many historical buildings are situated along Ladder Street, including the Hong Kong Museum of Medical Sciences, Chinese Y.M.C.A. of Hong Kong and Man Mo Temple.");
historicSites[5] = new GHS(22.283924, 114.150189, "Man Mo Temple Compound", 1, "Historic Building", "Man Mo Temple is believed to have been built in 1847, and comprises three adjacent blocks namely Man Mo Temple, Litt Shing Kung and Kung Sor. The Man Mo Temple is dedicated to the civil god Man Cheong and the martial god Kwan Ti. Litt Shing Kung is for the worship of all heavenly gods. Kung Sor was an assembly hall where community affairs and disputes were settled. In 1908, the Temple was officially entrusted to Tung Wah Board of Directors. Autumn Sacrificial Rites were held every year in the Temple to pay homage to the two Gods as well as to pray for the prosperity of Hong Kong.");
historicSites[6] = new GHS(22.280263, 114.155734, "Old Dairy Farm Depot", 1, "Historic Building", "Established in 1892, the Old Dairy Farm Depot was an icehouse. The original depot only comprised about half (the southern part) of the present premises. In 1896, the company's headquarters was moved to the main depot. The depot later had expanded to include a butchery, a pie-making section, a milk distribution centre, and an ice-retailing depot, the delicatessen and the boiler room. The renovations in 1913 also provided accommodation for the General Manager. During the Japanese Occupation (1941-1945), the Company's property was looted. The depot remained as the company‘s headquarters until the 1970s. Since 1982, the Foreign Correspondents' Club, Hong Kong occupied the north block and two years later, Fringe Club has leased the south block.");
historicSites[7] = new GHS(22.283389, 114.152889, "Pak Tsz Lane", 1, "Historic Site", "Pak Tsz Lane is a small lane behind the buildings fronting Gage Street and Aberdeen Street in Sheung Wan. It can arguably be considered to be a cradle for the 1911 Chinese Revolution. Yeung Ku-wan (楊衢雲) and Tse Tsan-tai (Xie Zantai, 謝纘泰) founded Foo Yan Man Ser (Furen wenshe, 輔仁文社, \"Literary Society for the Promotion of Benevolence\") (the Society) in the premise of No. 1 Pak Tsz Lane on 13 March 1892. The sixteen members of the Society, who always held meetings in private to discuss political issues and the future of China, had all been educated in Hong Kong. The entrance and steps leading to the site, however, remains the same as in the past when members of Foo Yan Man Ser often walked up the steps to their meeting place. Several of these men joined Hsing Chung Hui (Xingzhonghui, 興中會, “Revive China Society”) when it was founded in 1895 by Dr. Sun Yat-sen (Sun Yixian, 孫逸仙), and Yeung was the President of the Hong Kong branch of Hsing Chung Hui. Yeung Ku-wan was shot dead in his residence in No. 52 Gage Street, at the end of Pak Tsz Lane on 10 January 1901. Historical records show that the murder was instigated by the Qing authorities in Guangdong Province. The granite steps and adjoining wall of Pak Tsz Lane which show a degree of authenticity still exist and are considered a rare landmark of a place that carries historic significance in the modern history of China. It is now one of the important spots of the Sun Yat-sen Historical Trail.");
historicSites[8] = new GHS(22.283359, 114.156001, "Pottinger Street", 1, "Street Markets", "");
historicSites[9] = new GHS(22.279713, 114.155460, "St. Paul's Church", 1, "Historic Building", "Located at the hillock known as Tit Kong (Iron Mound), St. Paul's Church was erected in 1911 serving as a chapel upstairs and classrooms downstairs. Its founding emanated from the joint efforts of Lam Woo, Huang Mou-lin, Li Wei-zhen and the Rev. A. D. Stewart . In 1938, St. Paul's Church Parish was put under the direct control of the Anglican Church of Hong Kong. During the Japanese Occupation, the building was used as a training school for Japanese gendarmes. The land where the Church stands was a free grant to the Rev. Vincent J. Stanton and is the only plot of land in Hong Kong exempted from government lease control.");
historicSites[10] = new GHS(22.279149, 114.153898, "The Hong Kong Catholic Cathedral of the Immaculate Conception", 1, "Historic Building", "Built in 1888, the Hong Kong Catholic Cathedral of The Immaculate Conception, also known as the Roman Catholic Cathedral, was initiated by the Rev. T. Raimonde, first Bishop of Hong Kong. Most of the Chinese parishioners even call it as \"Tai Tong\" meaning the \"leading place of worship\". During the Japanese Occupation, a bomb dropped by the Japanese badly destroyed the Church in 1941. The Church Bell was also taken for manufacturing arms and ammunitions. Urgent repairs were carried out after the end of the War. In 1958, the Catholic Centre, a five-storey community centre, was built next to the Cathedral.");
historicSites[11] = new GHS(22.283478, 114.148629, "Old Pathological Institute", 2, "Historic Building", "At the end of the 19th century, bacteriological studies in Hong Kong were still underdeveloped. It was not until 1905 that a permanent Bacteriological Institute was constructed at Caine Lane. This elegant red-brick building was renamed the Pathological Institute after World War II and was later occupied by the Department of Health as a medical store. It has been recently converted to the Hong Kong Museum of Medical Sciences managed by the Hong Kong Museum of Medical Sciences Society");
historicSites[12] = new GHS(22.279903, 114.155907, "Old S.K.H. Kei Yan Primary School (alias, Kong Kit building)", 2, "Historic Building", "Completed in 1851, the building was originally the south wing of St. Paul's College, an Anglo-Chinese school for training Chinese clergies and Christian teachers. After the removal of St. Paul's College in 1953, the building was occupied by Kei Yan Primary School as a temporary campus even though part of the structure was demolished. The building, which features Tudor Revival architecture that resembles to the adjoining Bishop's House, is shared by Sheng Kung Hui Ming Hua Theological College and Sheng Kung Hui Publication Press \"Echo\" nowadays.");
historicSites[13] = new GHS(22.282995, 114.151780, "Underground Public Latrine", 2, "Historic Building", "Corner of Aberdeen Street and Staunton Street. The underground public latrine located at the junction of Aberdeen Street (鴨巴甸街) and Staunton Street (士丹頓街) at the southern corner of the Hollywood Road Former Married Police Quarters site (formerly the site of the old Queen’s College) was built in 1918. This latrine remains even though the old Queen’s College site was allocated to the Hong Kong police for building police quarters after World War II. Most of the underground public latrines have now been demolished and the subject latrine is no longer in its original use.");
historicSites[14] = new GHS(22.283310, 114.150944, "Bridges Street Market", 3, "Historic Building", "The building of Bridges Street Market is located at No. 2 Bridges Street. It was built under the auspices of the Urban Council after World War II to replace the old markets which had been destroyed during Japanese Occupation, with a view to meeting the demand of the rising population. It was constructed and commenced operation in 1953, housing 26 stalls for selling fish and poultry on the G/F and 33 stalls on the 1/F mostly selling beef, pork, fruits and vegetables. It was the first of its kind built in Hong Kong’s urban areas after World War II. The Market is a two-storey utilitarian building of reinforced concrete frame construction built in the International Modernist style. This style of architecture is generally accepted as originated in Germany by the Bauhaus school of art in the 1920s, and its main characteristics, which can also be found in the Market, were asymmetry, severe blocky cubic shapes, smooth flat plain undecorated surfaces often painted white, the complete elimination of all mouldings and ornament, flat roofs, large expanses of glass held in steel frames on the elevation, and long horizontal streamlined bands of windows");
historicSites[15] = new GHS(22.284011, 114.155542, "Central Market", 3, "Historic Building & Anchoring Buildings", "");
historicSites[16] = new GHS(22.283398, 114.154086, "No. 118 Wellington Street", 3, "Historic Building", "Built around 1923, No. 118 Wellington Street was the main office of Ching Loong Bakery which was founded in 1889 and registered a “Sunflower” trade mark in 1925. The main office was relocated to elsewhere in Wellington Street in 1952, to make way for Nam Wah Ink Company. In 1953, alterations and additions works were carried out to the building. In its heyday, the company had business dealings with publishing houses such as Chung Hwa Book Store, Commercial Press, Wah Kiu Yat Po, Kung Sheung Daily News, etc. On the other hand, the proprietors of the bakery and the ink company were full of benevolence towards the community. They donated generously, especially to promote children’s education. This 4-storey shophouse is built on an elongated rectangular plan. Its design involves a unique blending of pre-war high ceiling plan and post-war upper-floor open air balconies cantilevered over the pavement. The shop front is characterized by calligraphy featuring the name of the ink company and its main businesses. They were handwritten by a great calligrapher, Su Shi-jie (1883-1975).");
historicSites[17] = new GHS(22.283398, 114.154086, "No. 62 Hollywood Street", 3, "Historic Building", "Land records show that the lease on No. 62 Hollywood Road (荷李活道 62 號) commenced in the 1850s, but it is not known when the lot was first built on. Judging from its appearance, the existing building at No. 62 Hollywood Road was probably built in the 1920s. It is now used as a café. Old shop signs in terrazzo finish on the pillars at its shop front, bearing Chinese characters \"振隆白米生油\" and \"振隆白米生油柴炭\", indicate that the shop was once a grocery store named \"振隆\". This grocery store ceased operation in 2005.");
historicSites[18] = new GHS(22.283348, 114.151808, "Police Married Quarters (PMQ)", 3, "Historic Building & Anchoring Buildings", "");
historicSites[19] = new GHS(22.283042, 114.153576, "Graham Street Markets", "Not Graded", "Street Markets", "Street Markets that Are predominately occupied by Produce and Meat Merchants. Very Heavy Foot Traffic from this area.");
historicSites[20] = new GHS(22.283107, 114.153093, "Peel Street Markets", "Not Graded", "Street Markets", "Street Markets on Peel Street that sell clothes and other goods.");
historicSites[21] = new GHS(22.284954, 114.149591, "Upper Lascar Road: Chinese Antique Street", "Not Graded", "Street Markets", "Pedestrian Area with Street Shops & Galleries");


/* Ground Level Location data */
foodAndBeverage[0] = new GLL(22.281649, 114.152378, "12000 Francs", "43A Elgin Street", "Food and Beverage", "Bar");
foodAndBeverage[1] = new GLL(22.282649, 114.152817, "121BC", "44 Peel Street", "Food and Beverage", "Italian Restaurant/Bar");
foodAndBeverage[2] = new GLL(22.282501, 114.152371, "99 Bottles", "59A Peel Street", "Food and Beverage", "Bar");
foodAndBeverage[3] = new GLL(22.282715, 114.151526, "Aberdeen Street", "41-49 Aberdeen Street", "Food and Beverage", "Western Vegetarian Restaurant");
foodAndBeverage[4] = new GLL(22.284003, 114.15283, "Agnis b. Cafe", "8-10 Gough Street", "Food and Beverage", "French Dessert");
foodAndBeverage[5] = new GLL(22.281791, 114.152854, "Al Dente", "16 Staunton Street", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[6] = new GLL(22.28273, 114.151473, "Al Forno", "41-49 Aberdeen Street", "Food and Beverage", "Italian Pizzeria");
foodAndBeverage[7] = new GLL(22.282013, 114.15219, "AntiPasto", "25 Elgin Street", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[8] = new GLL(22.282108, 114.152815, "Awtar", "23 Staunton Street", "Food and Beverage", "Mediterranean Restaurant");
foodAndBeverage[9] = new GLL(22.280233, 114.154582, "Balance Kitchen", "2 Artbuthnot Road", "Food and Beverage", "Cafe");
foodAndBeverage[10] = new GLL(22.282698, 114.152193, "Bar Medusa", "49 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[11] = new GLL(22.282558, 114.154394, "Basement Bar & Cafe", "13 Lyndhurst Terrace", "Food and Beverage", "Western Restaurant");
foodAndBeverage[12] = new GLL(22.282818, 114.153021, "Be Juiced Bar", "45 Peel Street", "Food and Beverage", "Juice Shop");
foodAndBeverage[13] = new GLL(22.284417, 114.153267, "Bee Two", "166 Wellington Street", "Food and Beverage", "Coffee Shop");
foodAndBeverage[14] = new GLL(22.282874, 114.151988, "Beer and Fish", "67 Staunton Street", "Food and Beverage", "Western Restaurant/Bar");
foodAndBeverage[15] = new GLL(22.281617, 114.15234, "Belon", "41 Elgin Street", "Food and Beverage", "French Restaurant");
foodAndBeverage[16] = new GLL(22.281926, 114.153013, "Bep", "9-11 Staunton Street", "Food and Beverage", "Vietnamese Restuarant");
foodAndBeverage[17] = new GLL(22.283867, 114.153099, "Beyond Dessert", "39 Gage Street", "Food and Beverage", "Pastry Shop");
foodAndBeverage[18] = new GLL(22.282695, 114.153698, "Beyrouth Bistro", "39 Lyndhurst Terrace", "Food and Beverage", "Lebanese Restaurant");
foodAndBeverage[19] = new GLL(22.283583, 114.152437, "Bindaas Bar & Kitchen", "33 Aberdeen St", "Food and Beverage", "Indian Cusine");
foodAndBeverage[20] = new GLL(22.283768, 114.151057, "Blue", "108 Hollywood Road", "Food and Beverage", "International/Western Restaurant/ Bar. Meat Specialty");
foodAndBeverage[21] = new GLL(22.282559, 114.152444, "Bobby's Rabble Bar", "57 Peel Street", "Food and Beverage", "Bar");
foodAndBeverage[22] = new GLL(22.282498, 114.152091, "Bocadito", "40 Staunton Street", "Food and Beverage", "Spanish Restaurant");
foodAndBeverage[23] = new GLL(22.281441, 114.152474, "Boucham", "49 Elgin Street", "Food and Beverage", "French Restaurant");
foodAndBeverage[24] = new GLL(22.282283, 114.152593, "Brooklyn", "29 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[25] = new GLL(22.281823, 114.151912, "Brunch Club", "70 Peel Street", "Food and Beverage", "All Day Breakfast");
foodAndBeverage[26] = new GLL(22.282747, 114.151513, "Bun Cha", "41-49 Aberdeen Street", "Food and Beverage", "Vietnamese Restaurant");
foodAndBeverage[27] = new GLL(22.28287, 114.154787, "Butao Ramen", "69 Wellington Street", "Food and Beverage", "Japanes/Ramen");
foodAndBeverage[28] = new GLL(22.283272, 114.155166, "Cafe de Coral", "Stanley Street", "Food and Beverage", "Chinese Restrant");
foodAndBeverage[29] = new GLL(22.282003, 114.152211, "Cafe De Paris", "23 Elgin Street", "Food and Beverage", "French Restaurant");
foodAndBeverage[30] = new GLL(22.280889, 114.153311, "Cafe d'i", "Chancery Lane", "Food and Beverage", "cafe");
foodAndBeverage[31] = new GLL(22.282415, 114.152734, "CenacoloSteak and Pasta", "45-53 Graham", "Food and Beverage", "Italian Steak House");
foodAndBeverage[32] = new GLL(22.282688, 114.152552, "Chi Chi Cham", "53 Peel Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[33] = new GLL(22.282801, 114.151777, "Chom Chom Burger", "58-60 Staunton Street", "Food and Beverage", "Vietnamese Deli");
foodAndBeverage[34] = new GLL(22.2815, 114.152404, "Cicada", "47A Elgin", "Food and Beverage", "Bar");
foodAndBeverage[35] = new GLL(22.283792, 114.151083, "Classified", "108 Hollywood Road", "Food and Beverage", "Western/All Day Breakfast/Coffee Restaurant");
foodAndBeverage[36] = new GLL(22.282146, 114.152718, "Club 1911", "27 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[37] = new GLL(22.283912, 114.152293, "Cocotte", "9 Shin Hing Street", "Food and Beverage", "French Restaurant");
foodAndBeverage[38] = new GLL(22.283279, 114.150992, "Common Ground Coffee Shop", "19 Shing Wong Street", "Food and Beverage", "Coffee Shop");
foodAndBeverage[39] = new GLL(22.282123, 114.156143, "Cookie Galerie", "Queen's Road Central", "Food and Beverage", "Food Shop");
foodAndBeverage[40] = new GLL(22.282973, 114.150902, "Cozy Bean", "12 Shing Wong Street", "Food and Beverage", "");
foodAndBeverage[41] = new GLL(22.283126, 114.154495, "Cupping room", "18 Conchrane Street", "Food and Beverage", "Cafe");
foodAndBeverage[42] = new GLL(22.282024, 114.152428, "Cutty Sark", "20 Elgin Street", "Food and Beverage", "Bar");
foodAndBeverage[43] = new GLL(22.282251, 114.153215, "Dacha Restaurant and Bar", "38-40 Hollywood Road", "Food and Beverage", "Middle Eastern Restaurant");
foodAndBeverage[44] = new GLL(22.282066, 114.152158, "De Belge Bar", "21 Elgin Street", "Food and Beverage", "Belgian Bar");
foodAndBeverage[45] = new GLL(22.282728, 114.15255, "Ding Dim", "14D Elgin Street", "Food and Beverage", "Dim Sum Restaurant");
foodAndBeverage[46] = new GLL(22.283638, 114.155542, "Dragon Restaurant", "12 Queen Victoria Street", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[47] = new GLL(22.282406, 114.154582, "Dream Tofa", "16 Lyndhurst Terrace", "Food and Beverage", "Dessert Shop");
foodAndBeverage[48] = new GLL(22.283713, 114.154119, "Dream.The Bread", "97A Wellington Street", "Food and Beverage", "Western Bakery and Restaurant");
foodAndBeverage[49] = new GLL(22.28231, 114.153518, "Ebi Kin", "39-43 Hollywood Road", "Food and Beverage", "Ramen Restaurant");
foodAndBeverage[50] = new GLL(22.283203, 114.153073, "Edition", "37 Peel Street", "Food and Beverage", "Korean Restaurant");
foodAndBeverage[51] = new GLL(22.282398, 114.154757, "Ee Da Lee", "8 Lyndhurst Terrace", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[52] = new GLL(22.284592, 114.152862, "El Postre Delicioso", "12 Kau U Fong", "Food and Beverage", "");
foodAndBeverage[53] = new GLL(22.28287, 114.154308, "Emack & Balio's", "26 Cochrane Street", "Food and Beverage", "Ice Cream");
foodAndBeverage[54] = new GLL(22.281566, 114.152396, "Enotaca On Elgin", "47 Elgin Street", "Food and Beverage", "Mediterranean Restaurant");
foodAndBeverage[55] = new GLL(22.280796, 114.152515, "Eric Kayser Bakery", "38 Caine Road", "Food and Beverage", "Bakery");
foodAndBeverage[56] = new GLL(22.2821, 114.153532, "FAB Bistro", "30 Hollywood Road", "Food and Beverage", "Steakhouse");
foodAndBeverage[57] = new GLL(22.282023, 114.156238, "Fairwood", "38-48 Queen's Road Central", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[58] = new GLL(22.2831, 114.154524, "Feather and Bone", "18 Cochrane Street", "Food and Beverage", "Meat and Produce Market");
foodAndBeverage[59] = new GLL(22.282598, 114.15072, "Filters Lane", "111 Caine Road", "Food and Beverage", "Coffee Shop");
foodAndBeverage[60] = new GLL(22.282722, 114.152877, "Fine Print Bar", "38 Peel Street", "Food and Beverage", "Coffer Shop");
foodAndBeverage[61] = new GLL(22.28245, 114.152123, "Flaming Frango", "36B Staunton Street", "Food and Beverage", "Portuguese Bar/Restaurant");
foodAndBeverage[62] = new GLL(22.281996, 114.152208, "Flutes Champagne and Cocktails", "27 Elgin Street", "Food and Beverage", "Bar");
foodAndBeverage[63] = new GLL(22.282302, 114.153176, "Force 8", "42-42A Hollywood Road", "Food and Beverage", "Wine Store");
foodAndBeverage[64] = new GLL(22.282716, 114.152864, "Fresca Restaurant", "54A Hollywood Road", "Food and Beverage", "Organic Snake Shop/Restaurant");
foodAndBeverage[65] = new GLL(22.283469, 114.15332, "Fresco Cafe", "28 Gage Street", "Food and Beverage", "Bakery and Cafe");
foodAndBeverage[66] = new GLL(22.284463, 114.152497, "Ginger Whisky Bar", "12 On Wo Lane", "Food and Beverage", "");
foodAndBeverage[67] = new GLL(22.283159, 114.149319, "Glorious Fast Food", "147c Caine Road", "Food and Beverage", "Traditional Chinese Restaurant");
foodAndBeverage[68] = new GLL(22.284237, 114.15214, "Goughs", "40 Gough Street", "Food and Beverage", "Western");
foodAndBeverage[69] = new GLL(22.283773, 114.151078, "Grassroots Pantry", "108 Hollywood Road", "Food and Beverage", "International/Vegetarian/Coffee Shop/ Bar");
foodAndBeverage[70] = new GLL(22.282145, 114.151948, "Hazel and Hershey", "69 Peel Street", "Food and Beverage", "Coffee Shop");
foodAndBeverage[71] = new GLL(22.282876, 114.15241, "Himalaya", "13 Elgin Street", "Food and Beverage", "Indian Restaurant");
foodAndBeverage[72] = new GLL(22.283035, 114.152468, "Ho Lee Fook", "1 Elgin Street", "Food and Beverage", "Asian Fusion Restaurant");
foodAndBeverage[73] = new GLL(22.281459, 114.152959, "Iberico & Co.", "18 Shelley Street", "Food and Beverage", "Spanish Restaurant");
foodAndBeverage[74] = new GLL(22.281963, 114.152984, "Ichitora", "13 Staunton Street", "Food and Beverage", "Japanese Ramen");
foodAndBeverage[75] = new GLL(22.280976, 114.15275, "Insta Crepe", "65 Elgin Street", "Food and Beverage", "French Desert Cafe");
foodAndBeverage[76] = new GLL(22.280334, 114.153379, "IPC Food Lab", "28 Caine Road", "Food and Beverage", "International Vegetarian Restaurant");
foodAndBeverage[77] = new GLL(22.282825, 114.151623, "Ippoh", "39 Aberdeen Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[78] = new GLL(22.282425, 114.153802, "Itachi Sushi", "44 Lyndhurst Terrace", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[79] = new GLL(22.282702, 114.151904, "J48", "48 Staunton Street", "Food and Beverage", "Korean Bar");
foodAndBeverage[80] = new GLL(22.282463, 114.152145, "Jaspa's Restaurant", "38-30 Staunton Street", "Food and Beverage", "Mediterranean Restaurant");

/* Initialize the map */
window.onload = () => {
  mymap = L.map('mapDiv').setView([22.282, 114.154], 17);
  L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: ['a','b','c']
  }).addTo( mymap );
  
  /* Set attribution */
  var attr = L.control.attribution({position: 'bottomleft'})
    .setPrefix(`&copy;
    <a href="https://www.openstreetmap.org/copyright">
      OpenStreetMap
    </a> | <a href="https://leafletjs.com/"</a>
      Leaflet
    </a>`).addTo(mymap);

  /* Draw the triangle */
  var triangle = L.polygon([
    [22.28366, 114.15095],
    [22.27983, 114.15420],
    [22.28463, 114.15649]
  ]).addTo(mymap);
  
  /* initially show all historic sites */
  for (let i = 0; i < 22; ++i) {
    historicSites[i].marker = L.marker([historicSites[i].lat, historicSites[i].lon], {icon: blueIcon}).addTo(mymap).on('click', () => historicSites[i].show());
  }
  
  /* initially show all Food and Beverage */
  for (let i = 0; i < 80; ++i) {
    foodAndBeverage[i].marker = L.marker([foodAndBeverage[i].lat, foodAndBeverage[i].lon], {icon: greenIcon}).addTo(mymap).on('click', () => foodAndBeverage[i].show());
  }
}

/* Handle checkboxes changing */
var toggleHS = () => {
  for (let i = 0; i < 22; ++i) {
    if (document.getElementById("hs-cb").checked) {
      historicSites[i].marker.addTo(mymap);
    } else {
      historicSites[i].marker.remove();
    }
  }
}

var toggleFB = () => {
  for (let i = 0; i < 80; ++i) {
    if (document.getElementById("fb-cb").checked) {
      foodAndBeverage[i].marker.addTo(mymap);
    } else {
      foodAndBeverage[i].marker.remove();
    }
  }
}
