/* globals */
var mymap;
var historicSites  = new Array(22);
var foodAndBeverage = new Array(196);
var retail = new Array(138);
var services = new Array(57);
var culturalAsset = new Array(26);
var gallery = new Array(26);
var residence = new Array(13);
var recreation = new Array(9);
var education = new Array(6);

/* markers */
var redIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-red.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

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

var yellowIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-yellow.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-violet.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-orange.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-grey.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
	iconUrl: 'scripts/img/marker-icon-2x-black.png',
	shadowUrl: 'scripts/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});


/* Graded Historic Site class */
var GHS = function(lat, lon, name, grade, type, comments) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.grade = grade;
    this.type = type;
    this.comments = comments;
};
  
GHS.prototype = {
  /* displays info about this GHS in the right bar */
  show: function() {
    document.getElementById("rb-title").innerHTML = this.name;
    document.getElementById("rb-subtitle").innerHTML = this.type;
    document.getElementById("rb-content").innerHTML = this.comments;
    document.getElementById("rb-source").innerHTML = 
      `Source: <a href="http://www5.lcsd.gov.hk/internet/index.html">
        Geographic Information System on Hong Kong Heritage
      </a>`;
  }
};

/* Ground Level Location class */
var GLL = function(lat, lon, name, address, type, comments) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.address = address;
    this.type = type;
    this.comments = comments;
};

GLL.prototype = {
  /* displays info about this GLL in the right bar */
  show: function() {
    document.getElementById("rb-title").innerHTML = this.name;
    document.getElementById("rb-subtitle").innerHTML = this.type;
    document.getElementById("rb-content").innerHTML = 
      `${this.address} <br><br> ${this.comments}`;
    document.getElementById("rb-source").innerHTML = 
      `Source: <a href="https://web.wpi.edu/Pubs/E-project/Available/E-project-032017-092307/unrestricted/WPI_IQP_2017_-_Heritage_Conservation_and_Online_Platform_in_the_Smart_Cultural_Triangle_Precinct,_Hong_Kong.pdf">Mateo Carvajal, Zhi Hui, and Peter Nolan</a>. Updated by Joseph Petitti`;
  }
};

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
foodAndBeverage[41] = new GLL(22.283126, 114.154495, "Cupping room", "18 Cochrane Street", "Food and Beverage", "Cafe");
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
foodAndBeverage[68] = new GLL(22.284237, 114.15214, "Goughs", "40 Gough Street", "Food and Beverage", "Western, French");
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
foodAndBeverage[81] = new GLL(22.282601, 114.154535, "Kenoz", "9 Lyndhurst Terrace", "Food and Beverage", "Middle Eastern/Egyptian Restaurant");
foodAndBeverage[82] = new GLL(22.283719, 114.153805, "Keun Kee Won Ton Noodle", "2 Peel Street", "Food and Beverage", "Noodle Restaurant");
foodAndBeverage[83] = new GLL(22.28279, 114.155061, "Kuroko Ramen", "50 Stanley Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[84] = new GLL(22.282909, 114.152745, "La Cabana Wine Bistro", "62 Hollywood Road", "Food and Beverage", "Wine Bar");
foodAndBeverage[85] = new GLL(22.283871, 114.152168, "La Cabane Wine Cellar", "97 Hollywood Road", "Food and Beverage", "Imported Wine and Cheese");
foodAndBeverage[86] = new GLL(22.282132, 114.152508, "La Pamba", "32 Staunton Street", "Food and Beverage", "Argentinian Steakhouse");
foodAndBeverage[87] = new GLL(22.282033, 114.152946, "La Piazzetta", "5 Tsun Wing Lane", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[88] = new GLL(22.284581, 114.152916, "La Port Parfumé", "6 Kau U Fong", "Food and Beverage", "Seafood, French");
foodAndBeverage[89] = new GLL(22.282505, 114.155315, "La'Taste", "34-38 Stanley Street", "Food and Beverage", "Vietnamese Restaurant");
foodAndBeverage[90] = new GLL(22.282431, 114.152704, "La Vache", "48 Peel Street", "Food and Beverage", "French/Steak House");
foodAndBeverage[91] = new GLL(22.282466, 114.153447, "Le PHO", "58 Lyndhurst Terrace", "Food and Beverage", "Vietnamese Restaurant");
foodAndBeverage[92] = new GLL(22.2834, 114.153212, "Le Quinze Vins", "32 Gage Street", "Food and Beverage", "Wine Store");
foodAndBeverage[93] = new GLL(22.282453, 114.152684, "Le Tambour", "52A Peel Street", "Food and Beverage", "Wine Bar");
foodAndBeverage[94] = new GLL(22.284251, 114.153467, "Lin Heung", "162 Wellington Street", "Food and Beverage", "Hong Kong Tea House");
foodAndBeverage[95] = new GLL(22.281416, 114.15247, "Linguini Fici", "49 Elgin Street", "Food and Beverage", "Italian Food");
foodAndBeverage[96] = new GLL(22.283573, 114.154252, "Liquor and Liqueur", "97 Wellington Street", "Food and Beverage", "Wine Store");
foodAndBeverage[97] = new GLL(22.282307, 114.152562, "Liquor Land", "31 Staunton Street", "Food and Beverage", "Wine Store");
foodAndBeverage[98] = new GLL(22.282975, 114.151634, "Little Bao", "66 Staunton Street", "Food and Beverage", "Western Restaurant");
foodAndBeverage[99] = new GLL(22.283461, 114.151105, "Little Bite Gastropub", "29-31 Bridges Street", "Food and Beverage", "Western/International/Wine/Private Kitchen");
foodAndBeverage[100] = new GLL(22.282068, 114.153505, "Little Burro", "30 Hollywood Road", "Food and Beverage", "Spanish Restaurant");
foodAndBeverage[101] = new GLL(22.284072, 114.152597, "Lobster and Mussels", "16 Gough Street", "Food and Beverage", "Western Restaurant");
foodAndBeverage[102] = new GLL(22.281695, 114.153248, "Lotus", "5 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[103] = new GLL(22.281729, 114.155428, "Loyal Dining", "66 Wellington Street", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[104] = new GLL(22.282222, 114.155542, "Luk Yu tea house", "24-26 Stanley Street", "Food and Beverage", "Very old tea house");
foodAndBeverage[105] = new GLL(22.282061, 114.153213, "M and S Food", "32 Hollywood Road", "Food and Beverage", "Supermarket");
foodAndBeverage[106] = new GLL(22.281746, 114.153299, "Maison Libanaise", "10 Shelly Street", "Food and Beverage", "Lebanese Food");
foodAndBeverage[107] = new GLL(22.283048, 114.154641, "Mak's Noodle", "77 Wellington Street", "Food and Beverage", "Chinese Food");
foodAndBeverage[108] = new GLL(22.282832, 114.154565, "Mana! Fast Slow Food", "92 Wellington Street", "Food and Beverage", "Vegetarian/Western Restaurant");
foodAndBeverage[109] = new GLL(22.281819, 114.152245, "Manchu China Restaurant", "33 Elgin Street", "Food and Beverage", "Chinese Stir-Fry");
foodAndBeverage[110] = new GLL(22.282809, 114.152051, "McGouches Bar and Grill", "59 Staunton Street", "Food and Beverage", "Western Restaurant");
foodAndBeverage[111] = new GLL(22.280745, 114.154919, "MOKUM", "43-55 Wyndham Street", "Food and Beverage", "Bar");
foodAndBeverage[112] = new GLL(22.282116, 114.152358, "Mostaccioli Bros", "16 Elgin Street", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[113] = new GLL(22.281561, 114.15306, "Motorino Pizza", "14 Shelley Street", "Food and Beverage", "Italian Pizzeria");
foodAndBeverage[114] = new GLL(22.283039, 114.152011, "Moyo", "36 Aberdeen Street", "Food and Beverage", "Bar");
foodAndBeverage[115] = new GLL(22.282705, 114.153636, "Mr. Simms Olde Sweet Shop", "37 Lyndhurst Terrace", "Food and Beverage", "Candy Store");
foodAndBeverage[116] = new GLL(22.281901, 114.153054, "Ms. 100", "7 Staunton Street", "Food and Beverage", "Korean Restaurant");
foodAndBeverage[117] = new GLL(22.284618, 114.15279, "Nagahama Ramen No. 1", "14 Kau U Fong", "Food and Beverage", "Japanese, Ramen");
foodAndBeverage[118] = new GLL(22.283781, 114.155759, "Nam Kee Springroll Noodle Co. Ltd.", "5-8 Queen Victoria Street", "Food and Beverage", "Chinese restaurant");
foodAndBeverage[119] = new GLL(22.28278, 114.152091, "Nan Tei", "55 Staunton Street", "Food and Beverage", "Japanese Food");
foodAndBeverage[120] = new GLL(22.283999, 114.152085, "NEO", "10 Shin Hing Street", "Food and Beverage", "French Bakery/ Skewers Restaurant");
foodAndBeverage[121] = new GLL(22.281855, 114.152783, "Nepal Restaurant", "14 Staunton Street", "Food and Beverage", "Nepalese Restaurant");
foodAndBeverage[122] = new GLL(22.283846, 114.154073, "New Forest Restaurant", "99 Wellington Street", "Food and Beverage", "Western Style Restaurant");
foodAndBeverage[123] = new GLL(22.283995, 114.153633, "Ngau Saam Gun", "148 Wellington Street", "Food and Beverage", "Guangdong/Stirfry Restaurant");
foodAndBeverage[124] = new GLL(22.283773, 114.15287, "Ngoi Nha Viet", "50 Gage Street", "Food and Beverage", "Vietnamese Food");
foodAndBeverage[125] = new GLL(22.282072, 114.153562, "Nile Egyptian Flavors", "26 Hollywood Road", "Food and Beverage", "Egyptian Restaurant");
foodAndBeverage[126] = new GLL(22.282951, 114.154718, "Null", "71-73 Wellington Street", "Food and Beverage", "Bar");
foodAndBeverage[127] = new GLL(22.283816, 114.152494, "O'garlic Fine Gourmet", "4-2 Mee Lun Street", "Food and Beverage", "Gourmet shop");
foodAndBeverage[128] = new GLL(22.281659, 114.152557, "Olive, Greek and Middle Eastern", "32 Elgin Street", "Food and Beverage", "Greek and Middle Eastern");
foodAndBeverage[129] = new GLL(22.283741, 114.151037, "Ooalaa", "108 Hollywood Road", "Food and Beverage", "International/Seafood/Bar");
foodAndBeverage[130] = new GLL(22.281642, 114.151758, "Organic Plus", "79 Caine Street", "Food and Beverage", "Organic Supermarket");
foodAndBeverage[131] = new GLL(22.282661, 114.153287, "Pacific Coffee Company", "43 Lyndhurst Terrace", "Food and Beverage", "Coffee Shop");
foodAndBeverage[132] = new GLL(22.280948, 114.152619, "Pacific Gourmet", "53 Caine Street", "Food and Beverage", "International Takeaway");
foodAndBeverage[133] = new GLL(22.282104, 114.153971, "Paissano's Pizzeria", "23 Hollywood Road", "Food and Beverage", "Italian Pizzeria");
foodAndBeverage[134] = new GLL(22.281625, 114.152626, "Pampas", "36 Elgin Street", "Food and Beverage", "Argentinian Food");
foodAndBeverage[135] = new GLL(22.282723, 114.153736, "Park n Shop", "6 Gage Street", "Food and Beverage", "Supermarket");
foodAndBeverage[136] = new GLL(22.281682, 114.152806, "Peak Cafe", "9-13 Shelley Street", "Food and Beverage", "International Restaurant/Bar");
foodAndBeverage[137] = new GLL(22.281517, 114.155354, "Pearl Vietnamese Restaurant", "7 Wo On Lane", "Food and Beverage", "Vietnamese Restaurant");
foodAndBeverage[138] = new GLL(22.283765, 114.152891, "Penny Fusions", "48 Gage Street", "Food and Beverage", "Hong Kong Style Food Restaurant");
foodAndBeverage[139] = new GLL(22.28212, 114.15236, "Picada", "16 Elgin Street", "Food and Beverage", "Mexican/Arentinan/Peruvian/Bar");
foodAndBeverage[140] = new GLL(22.283572, 114.154256, "Pizza Express", "97 Wellington Street", "Food and Beverage", "Pizza Gallery");
foodAndBeverage[141] = new GLL(22.281961, 114.155789, "Ponti Wine Cellars", "16 Stanley Street", "Food and Beverage", "Liqueur Shop");
foodAndBeverage[142] = new GLL(22.281809, 114.152517, "Publico", "28 Elgin Street", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[143] = new GLL(22.282032, 114.152129, "QClub", "21 Elgin Street", "Food and Beverage", "Supermarket");
foodAndBeverage[144] = new GLL(22.282688, 114.152154, "Quench", "51 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[145] = new GLL(22.28266, 114.152827, "Quinary", "56-58 Hollywood Road", "Food and Beverage", "Bar");
foodAndBeverage[146] = new GLL(22.282888, 114.150392, "Rosie Jean's Cafe", "119-125 Caine Road", "Food and Beverage", "Coffee Shop");
foodAndBeverage[147] = new GLL(22.282087, 114.153571, "Rummin' Tings", "28 Hollywood Road", "Food and Beverage", "Bar");
foodAndBeverage[148] = new GLL(22.283816, 114.153794, "Saint Honore Bakery", "138 Wellington Street", "Food and Beverage", "Bakery Shop");
foodAndBeverage[149] = new GLL(22.281151, 114.152629, "Santorini", "51 Elgin Street", "Food and Beverage", "Mediterranean Restaurant");
foodAndBeverage[150] = new GLL(22.282697, 114.151884, "Sazzione Novella", "52-56 Staunton Street", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[151] = new GLL(22.283008, 114.152668, "Seoul Bros", "66 Hollywood Road", "Food and Beverage", "Korean Restaurant");
foodAndBeverage[152] = new GLL(22.282738, 114.15418, "Ser Wong Fung", "30 Cochrane Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[153] = new GLL(22.283457, 114.154862, "Share Tea", "16 Cochrane Street", "Food and Beverage", "Taiwanese Bubble Tea");
foodAndBeverage[154] = new GLL(22.284138, 114.152831, "Shugetsu Ramen", "5 Gough Street", "Food and Beverage", "Noodle Restaurant");
foodAndBeverage[155] = new GLL(22.28257, 114.154688, "Sing Kee Seafood Restaurant", "1-7 Lyndhurst Terrace", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[156] = new GLL(22.283578, 114.15427, "Sogno Cafe", "97 Wellington Street", "Food and Beverage", "Cafe located on the Second Floor");
foodAndBeverage[157] = new GLL(22.282444, 114.152324, "Soho Corner", "43 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[158] = new GLL(22.281391, 114.152457, "Soho Wines and Spirits", "49 Elgin Street", "Food and Beverage", "Wine Store");
foodAndBeverage[159] = new GLL(22.282784, 114.152324, "Soiree", "19 Elgin Street", "Food and Beverage", "Bar");
foodAndBeverage[160] = new GLL(22.282135, 114.152511, "Spot Bar", "32 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[161] = new GLL(22.281586, 114.156002, "Starbucks", "1-13 D'Aguilar Street", "Food and Beverage", "Coffee Shop");
foodAndBeverage[162] = new GLL(22.281776, 114.152857, "Staunton's Wine Bar and Cafe", "10 Staunton Street", "Food and Beverage", "Mediterranean Bar");
foodAndBeverage[163] = new GLL(22.282896, 114.152431, "Stella", "11 Elgin Street", "Food and Beverage", "Moroccan");
foodAndBeverage[164] = new GLL(22.284016, 114.152526, "Street Food", "Mee Lun Street", "Food and Beverage", "");
foodAndBeverage[165] = new GLL(22.279342, 114.154812, "Sumac Lounge", "8 Glenealy", "Food and Beverage", "Bar");
foodAndBeverage[166] = new GLL(22.281104, 114.152825, "Szechuan Cuisine", "46 Elgin Street", "Food and Beverage", "Sichuan/Stir-Fry");
foodAndBeverage[167] = new GLL(22.282691, 114.153655, "Tai Cheong Bakery", "35 Lyndhurst Terrace", "Food and Beverage", "Baked Goods Store");
foodAndBeverage[168] = new GLL(22.281716, 114.152635, "Take Out Comedy", "34 Elgin Street", "Food and Beverage", "Comedy Club/Western Restaurant");
foodAndBeverage[169] = new GLL(22.282375, 114.152779, "TAKOREAN", "48-52A Peel Street", "Food and Beverage", "Korean Restaurant");
foodAndBeverage[170] = new GLL(22.28214, 114.15278, "Tantra Lounge Bar", "25 Staunton Street", "Food and Beverage", "Bar");
foodAndBeverage[171] = new GLL(22.283869, 114.152727, "TENKAI", "17 Aberdeen Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[172] = new GLL(22.284528, 114.152935, "Tenshu Tempura and Sashimi Restaurant", "6-10 Kau U Fong", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[173] = new GLL(22.284591, 114.152642, "The Chairman", "18 Kau U Fong", "Food and Beverage", "Cantonese Restaurant");
foodAndBeverage[174] = new GLL(22.283912, 114.153071, "The Counter", "39-49 Gage Street", "Food and Beverage", "Hong Kong Style Sandwich Restaurant");
foodAndBeverage[175] = new GLL(22.282428, 114.152729, "The Fridge", "48 Peel Street", "Food and Beverage", "European Restaurant/Bar");
foodAndBeverage[176] = new GLL(22.28242, 114.152794, "The Globe", "49 Peel Street", "Food and Beverage", "Bar");
foodAndBeverage[177] = new GLL(22.281053, 114.152502, "The Monogamous Chinese", "59 Caine Road", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[178] = new GLL(22.281077, 114.152691, "The Tipping Point", "55 Elgin Street", "Food and Beverage", "Bar");
foodAndBeverage[179] = new GLL(22.284037, 114.15062, "Three Monkeys", "155 Hollywood Road", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[180] = new GLL(22.281715, 114.155729, "Tsui Wah", "15D-19 Wellington Street", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[181] = new GLL(22.283755, 114.152941, "Tsukiji", "36-52 Gage Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[182] = new GLL(22.281387, 114.154923, "Tsuru", "63 Wyndham Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[183] = new GLL(22.282746, 114.153726, "Tung Kee Noodles", "4 Gage Street", "Food and Beverage", "Noodle Restaurant");
foodAndBeverage[184] = new GLL(22.282296, 114.155008, "Tycoon Tann", "74 Wellington Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[185] = new GLL(22.283596, 114.156235, "voi_la! Wine Cellar", "68 Des Voeux Road", "Food and Beverage", "Liqueur Store");
foodAndBeverage[186] = new GLL(22.283167, 114.152565, "Vom Fass", "68 Hollywood Road", "Food and Beverage", "Wine Store");
foodAndBeverage[187] = new GLL(22.283197, 114.154613, "Wah Keh Fresh Fruit and Vegetables", "16 Cochrane Street", "Food and Beverage", "Produce Market");
foodAndBeverage[188] = new GLL(22.282861, 114.154795, "Wang Fu", "65 Wellington Street", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[189] = new GLL(22.282799, 114.155065, "Wasabi Warriors", "50 Stanley Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[190] = new GLL(22.28142, 114.155409, "Westwood Carvery", "2 Wo On Lane", "Food and Beverage", "Italian Restaurant");
foodAndBeverage[191] = new GLL(22.282828, 114.152925, "White Beard Fish n Chips", "55 Peel Street", "Food and Beverage", "Seafood Restaurant");
foodAndBeverage[192] = new GLL(22.282681, 114.156649, "Wing Lok Yuen", "19 Chiu Lung Street", "Food and Beverage", "Chinese Restaurant");
foodAndBeverage[193] = new GLL(22.282917, 114.152417, "WTF Bar and Restaurant", "9 Elgin Street", "Food and Beverage", "Bar and Restaurant");
foodAndBeverage[194] = new GLL(22.283584, 114.150534, "YardBird", "33-35 Bridges Street", "Food and Beverage", "Japanese Restaurant");
foodAndBeverage[195] = new GLL(22.282254, 114.152207, "何蘭正", "65 Peel Street", "Food and Beverage", "Bar");

retail[0] = new GLL(22.284423, 114.153273, "7 Eleven", "166 Wellington Street", "Retail", "Retail Supermarket");
retail[1] = new GLL(22.282828, 114.151657, "9 Lives", "37 Aberdeen Street", "Retail", "Pet Food Store");
retail[2] = new GLL(22.281845, 114.156981, "Abercrombie & Fitch", "12 Pedder Street", "Retail", "Clothes");
retail[3] = new GLL(22.283813, 114.15268, "ABoutique", "19 Aberdeen Street", "Retail", "Small Business; Boutique");
retail[4] = new GLL(22.282522, 114.156137, "Adidas", "36 Queen's Road Central", "Retail", "Sports Shop");
retail[5] = new GLL(22.282279, 114.153166, "Aesop", "42 Hollywood Road", "Retail", "Self Cleaning Supplies Store");
retail[6] = new GLL(22.280785, 114.156033, "Air Jordan", "2-8 Wellington Street", "Retail", "Clothes & Shoes");
retail[7] = new GLL(22.282963, 114.154704, "Alice Fashion", "67 Wellington Street", "Retail", "Women's Clothing Store");
retail[8] = new GLL(22.282713, 114.154141, "Aluminium Urban Living", "36 Cochrane Street", "Retail", "Appliances and Furniture");
retail[9] = new GLL(22.282566, 114.154406, "Anglo Chinese Florist", "13 Lyndhurst Terrace", "Retail", "Flower Shop");
retail[10] = new GLL(22.280244, 114.155347, "BC Shop", "31A Wyndham Street", "Retail", "Fitness Shop");
retail[11] = new GLL(22.282189, 114.152312, "Beatriz de Silva", "58-60 Peel Street", "Retail", "Clothing Store");
retail[12] = new GLL(22.282387, 114.154348, "Benefit Cosmetics", "22 Lyndhurst Terrace", "Retail", "Cosmetic Shop");
retail[13] = new GLL(22.282411, 114.152352, "Betty Blue", "34B Staunton", "Retail", "Women's Clothing");
retail[14] = new GLL(22.281725, 114.156788, "Blancpain", "29 Queen's Road Central", "Retail", "Watches");
retail[15] = new GLL(22.283117, 114.15299, "Bob's Paradise", "41 Peel Street", "Retail", "Pet Retail Store");
retail[16] = new GLL(22.281712, 114.154823, "BoConcept", "73 Wyndham Street", "Retail", "Furniture");
retail[17] = new GLL(22.283733, 114.15261, "Bohemian Artistic", "27 Aberdeen Street", "Retail", "Clothing Store");
retail[18] = new GLL(22.282439, 114.153621, "Bookazine", "46 Lyndhurst Terrace", "Retail", "Book Store");
retail[19] = new GLL(22.282571, 114.154692, "Bremont Watches", "1 Lyndhurst Terrace", "Retail", "Watch store in Hong Kong");
retail[20] = new GLL(22.28408, 114.1525, "Callixto", "11 Mee Lun Street", "Retail", "Jewelry and Accesories");
retail[21] = new GLL(22.282391, 114.155792, "Calzedonia", "62 Queen's Road Central", "Retail", "Italian Legwear");
retail[22] = new GLL(22.282029, 114.155737, "Canaan Optical", "18 Stanley Street", "Retail", "Glasses Store");
retail[23] = new GLL(22.284725, 114.153347, "Cecilia Yau Couture", "168 Wellington Street", "Retail", "Womens Clothing, Designer");
retail[24] = new GLL(22.282717, 114.152151, "Cest Si Bon", "51 Staunton Street", "Retail", "Fashion Boutique");
retail[25] = new GLL(22.283388, 114.156872, "Chinese Arts & Crafts", "55 Des Voeux Road", "Retail", "Crafts");
retail[26] = new GLL(22.282255, 114.152014, "Chocolate Rain", "67 Peel Street", "Retail", "Gift Shop/Jewelry");
retail[27] = new GLL(22.281728, 114.156807, "Chow Tai Fook", "29 Queen's Road Central", "Retail", "Jewelry");
retail[28] = new GLL(22.280911, 114.156393, "Christian Louboutin", "10-12 Wyndham Street", "Retail", "Shoes");
retail[29] = new GLL(22.282393, 114.154349, "Clover Garden", "26 Lyndhurst Terrace", "Retail", "Jewelry Store");
retail[30] = new GLL(22.281954, 114.152459, "CNC Fashion", "24 Elgin Street", "Retail", "Clothing Store");
retail[31] = new GLL(22.28238, 114.152383, "Coqu", "34A Staunton Street", "Retail", "Women's Clothing");
retail[32] = new GLL(22.282772, 114.155051, "Corner Block", "50 Stanley Street", "Retail", "Grocery Store");
retail[33] = new GLL(22.282821, 114.155849, "Cortina Watch", "53 Queen's Road Central", "Retail", "Watches");
retail[34] = new GLL(22.282779, 114.155367, "COS", "74 Queen's Road Central", "Retail", "Clother");
retail[35] = new GLL(22.28416, 114.152282, "Creative Coop", "34 Gough Street", "Retail", "Design, Home");
retail[36] = new GLL(22.280377, 114.153662, "Dogs and the City", "37A Caine Road", "Retail", "Pets Shop");
retail[37] = new GLL(22.282301, 114.153453, "DOMA Lifestyle", "41 Hollywood Road", "Retail", "Appliances");
retail[38] = new GLL(22.282406, 114.155889, "Eldorado Watch Co., Ltd.", "58-62 Queen's Road Central", "Retail", "Watches");
retail[39] = new GLL(22.283228, 114.155968, "Eternity Jewelry", "18 Pottinger Street", "Retail", "Jewelry");
retail[40] = new GLL(22.283782, 114.152648, "Evelyn Artwear", "21 Aberdeen Street", "Retail", "Boutique");
retail[41] = new GLL(22.281809, 114.156624, "Falli Fallie", "29 Queen's Road Central", "Retail", "Watches");
retail[42] = new GLL(22.282212, 114.152001, "Fang Fong Projects", "69-71 Peel Street", "Retail", "Designer Clothing Store");
retail[43] = new GLL(22.283845, 114.154064, "Fine Glass and Framework Production", "99 Wellington Street", "Retail", "Framing Company");
retail[44] = new GLL(22.282887, 114.15261, "Fine Jewelry", "8 Elgin Street", "Retail", "Jewelry Store");
retail[45] = new GLL(22.280158, 114.155029, "FLOS", "44 Wyndham Street", "Retail", "Furniture & Lights");
retail[46] = new GLL(22.282545, 114.155256, "Foresoon Computer", "40 Stanley Street", "Retail", "Electronic Devices");
retail[47] = new GLL(22.284901, 114.155688, "Fortress", "107-111 Des Voeux Road", "Retail", "Electronic Devices");
retail[48] = new GLL(22.28403, 114.157051, "Fotomax", "4 Pottinger Street", "Retail", "Photographic Equipments");
retail[49] = new GLL(22.283258, 114.154596, "Fox Optical Co. Ltd.", "12 Cochrane Street", "Retail", "Eyewear Store");
retail[50] = new GLL(22.282828, 114.155218, "Fujifilm", "23-29 Stanley Street", "Retail", "Photographic Equipments");
retail[51] = new GLL(22.281691, 114.151383, "Fusion by Park n Shop", "88 Caine Road", "Retail", "Super Market");
retail[52] = new GLL(22.282148, 114.156682, "GAP", "31 Queen's Road Central", "Retail", "Clothes");
retail[53] = new GLL(22.284076, 114.152993, "Gaudalie", "3 Gough Street", "Retail", "Cosmetics");
retail[54] = new GLL(22.284028, 114.152494, "Goldyard", "9 Mee Lun Street", "Retail", "Clothing");
retail[55] = new GLL(22.282434, 114.153067, "Goods of Desire", "48 Hollywood Road", "Retail", "Homeware Retail");
retail[56] = new GLL(22.282669, 114.15282, "Graham Boutique", "56-58 Hollywood Road", "Retail", "Various Retail Products");
retail[57] = new GLL(22.283987, 114.153227, "Greenfingers Florist", "6 Aberdeen Street", "Retail", "Florist");
retail[58] = new GLL(22.284038, 114.152807, "Guess", "4-6 Gough Street", "Retail", "Clothing");
retail[59] = new GLL(22.283967, 114.154354, "Hei Man Lin Jewellery Co. Ltd.", "134 Queen's Road Central", "Retail", "Jewelry Story");
retail[60] = new GLL(22.284455, 114.153236, "Hi Angel Shop", "168 Wellington", "Retail", "Womens Clothing");
retail[61] = new GLL(22.283447, 114.154334, "Ho Kee Electrical Co.", "95 Wellington Road", "Retail", "Various Retail and Supplies");
retail[62] = new GLL(22.282118, 114.152367, "Ichi Ni San Shop", "16A Elgin Street", "Retail", "Pottery Shop");
retail[63] = new GLL(22.281302, 114.152221, "Indigo Living", "63-69 Caine Road", "Retail", "Furniture Store");
retail[64] = new GLL(22.282819, 114.155476, "Intimissimi", "72 Queen's Road Central", "Retail", "Clothes");
retail[65] = new GLL(22.28369, 114.153879, "JHC Concept Store", "128 Wellington Street", "Retail", "Various Retail Offered");
retail[66] = new GLL(22.283151, 114.154612, "Kam Bong Jewelry Co.", "14 Cochrane Street", "Retail", "Jewelry");
retail[67] = new GLL(22.284156, 114.153074, "Kincheng Jewelry Co.", "11 Aberdeen Street", "Retail", "Jewelry Producer Company");
retail[68] = new GLL(22.282947, 114.154441, "La Farfalla", "98 Wellington Street", "Retail", "Tailor for Men's Suits");
retail[69] = new GLL(22.282613, 114.154714, "Lane's Bridal", "1 Lyndhurst Terrace", "Retail", "Clothes");
retail[70] = new GLL(22.282855, 114.154479, "Lapel", "96 Wellington Street", "Retail", "Tailor");
retail[71] = new GLL(22.281533, 114.155967, "LensCrafters", "1-13 D'Aguilar St", "Retail", "Glasses Store");
retail[72] = new GLL(22.28239, 114.154287, "Les Nerieidas", "30 Lyndhurst Terrace", "Retail", "Jewelry Store");
retail[73] = new GLL(22.282644, 114.154109, "Linya Fashion", "38 Cochrane Street", "Retail", "Designer Clothing Store");
retail[74] = new GLL(22.284134, 114.152495, "Lovers and Friends", "24 Gough Street", "Retail", "Clothing and Accesories");
retail[75] = new GLL(22.282055, 114.153199, "Low Price Shop", "32 Hollywood Road", "Retail", "Souvenirs");
retail[76] = new GLL(22.283987, 114.154303, "Lu Yan Sang", "136 Queen's Road Central", "Retail", "Cosmetics");
retail[77] = new GLL(22.2826, 114.154094, "LUSH", "21 Lyndhurst Terrace", "Retail", "Fresh Handmade Cosmetics");
retail[78] = new GLL(22.284175, 114.152342, "Magis", "28 Gough Street", "Retail", "Furniture, Design, Lifestyle");
retail[79] = new GLL(22.28338, 114.152413, "Mammut", "74 Hollywood Road", "Retail", "Sportswear Store");
retail[80] = new GLL(22.283154, 114.155081, "Mannings", "88 Queen's Road Central", "Retail", "Cosmetic Store");
retail[81] = new GLL(22.282564, 114.150821, "Mansions Interior", "109B Caine Road", "Retail", "");
retail[82] = new GLL(22.284154, 114.152716, "Marco Visconti", "14 Gough Street", "Retail", "Womens Clothing and Accesories");
retail[83] = new GLL(22.282067, 114.153209, "Marks & Spencer", "32 Hollywood Road", "Retail", "Grocery Store");
retail[84] = new GLL(22.281541, 114.156426, "MCM", "30 Queen's Road Central", "Retail", "Bags");
retail[85] = new GLL(22.282192, 114.153844, "Mei Lun Jewelry and Jade", "27 Hollywood Road", "Retail", "Jewelry and Jade Pottery Store");
retail[86] = new GLL(22.282131, 114.152508, "Mint and Lemon", "32 Staunton Street", "Retail", "Women's Clothing Store");
retail[87] = new GLL(22.282635, 114.154192, "MisterChrono", "19 Lyndhurst Terrace", "Retail", "Leather Goods");
retail[88] = new GLL(22.283775, 114.152642, "Modele", "25 Aberdeen Street", "Retail", "Clothing Store");
retail[89] = new GLL(22.283971, 114.152478, "Morn Creations", "7 Mee Lun Street", "Retail", "Backpack Shop");
retail[90] = new GLL(22.281618, 114.155237, "Mountain Folk Craft", "12 Wo On Lane", "Retail", "");
retail[91] = new GLL(22.283634, 114.152723, "Mushroom Shop", "14 Aberdeen Street", "Retail", "Boutique");
retail[92] = new GLL(22.283317, 114.154372, "Name Unkown", "91 Wellington Street", "Retail", "Various Retail Sold Here");
retail[93] = new GLL(22.282436, 114.154043, "Nature Village Supplements", "36 Lyndhurst Terrace", "Retail", "Health Products");
retail[94] = new GLL(22.281327, 114.156001, "New Balance", "18 D'Aguilar St", "Retail", "Sports Shoes");
retail[95] = new GLL(22.284155, 114.156285, "Nike", "41 Connaught Road", "Retail", "Sports");
retail[96] = new GLL(22.284055, 114.152245, "Okura", "1 Shin Hing Street", "Retail", "Gift Shop that specializes in selling Designer Made Products");
retail[97] = new GLL(22.283724, 114.152574, "Orient Sense", "29 Aberdeen Street", "Retail", "Jewelry Store");
retail[98] = new GLL(22.281523, 114.155817, "Pandora", "1-13 D'Aguilar St", "Retail", "Jewelry");
retail[99] = new GLL(22.282426, 114.154353, "Parfumerie Tresor", "28 Lyndhurst Terrace", "Retail", "Perfume Store");
retail[100] = new GLL(22.282425, 114.153622, "Patagonia", "46 Lyndhurst Terrace", "Retail", "Men's Clothes");
retail[101] = new GLL(22.281615, 114.154876, "Persian Arts", "67 Wyndham Street", "Retail", "Carpet");
retail[102] = new GLL(22.284138, 114.152918, "Petit Bazaar", "9 Gough Street", "Retail", "Kids Clothing");
retail[103] = new GLL(22.283604, 114.152666, "Petite Petite", "18 Aberdeen Street", "Retail", "Clothing Store");
retail[104] = new GLL(22.281414, 114.156436, "Philipp Plein", "30 Queen's Road Central", "Retail", "Clothes");
retail[105] = new GLL(22.282849, 114.15503, "Pick me up", "50 Stanley Street", "Retail", "Clothes Store");
retail[106] = new GLL(22.282937, 114.152886, "Plant a Plant", "46 Peel Street", "Retail", "Replica Plants and Trees");
retail[107] = new GLL(22.28416, 114.152271, "Prologue", "3 Shin Hing Street", "Retail", "Tailored Suits: Men's Clothing Store");
retail[108] = new GLL(22.282967, 114.153023, "QuQu Boutique", "28 Peel Street", "Retail", "Clothing Store");
retail[109] = new GLL(22.282492, 114.155306, "Sam & Company", "38 Stanley Street", "Retail", "Stationery Store");
retail[110] = new GLL(22.28316, 114.155096, "SASA", "88 Queen's Road Central", "Retail", "Cosmetic Store");
retail[111] = new GLL(22.28418, 114.152678, "Sheer", "13 Gough Street", "Retail", "Lingerie");
retail[112] = new GLL(22.282569, 114.154691, "Sheryia Curtain", "1 Lyndhurst Terrace", "Retail", "Curtains and Fabric Store");
retail[113] = new GLL(22.282003, 114.157335, "Skechers", "20 Des Voeux Road Central", "Retail", "Shoes");
retail[114] = new GLL(22.282454, 114.153455, "Solitude", "48 Lyndhurst Terrace", "Retail", "Clothing Store");
retail[115] = new GLL(22.282217, 114.155794, "St Private i Salon", "1111 Stanley Street", "Retail", "Beauty Products Shop");
retail[116] = new GLL(22.283633, 114.152508, "Stockholm Shoes", "31 Aberdeen Street", "Retail", "European Shoe Store");
retail[117] = new GLL(22.282365, 114.156349, "Street Shops", "Chiu Lung Street", "Retail", "");
retail[118] = new GLL(22.283458, 114.156382, "Suning", "54-58 Des Voeux Road", "Retail", "Electronic Devices");
retail[119] = new GLL(22.282585, 114.154404, "The Candle Company", "11 Lyndhurst Terrace", "Retail", "Candle Store");
retail[120] = new GLL(22.28056, 114.157754, "The Landmark", "15 Queen's Road Central", "Retail", "Luxury Stores");
retail[121] = new GLL(22.282627, 114.15465, "The Vintage Concept", "78 Wellington Street", "Retail", "Watch Store");
retail[122] = new GLL(22.283947, 114.152877, "THEI", "10 Aberdeen Street", "Retail", "Clothes");
retail[123] = new GLL(22.282948, 114.154913, "Tin Cheung Camera Company", "50-72 Stanley Street", "Retail", "Photographic Equipments");
retail[124] = new GLL(22.28305, 114.155646, "TopShop", "59-65 Queen's Road Central", "Retail", "Clothes");
retail[125] = new GLL(22.284067, 114.152763, "Über Tunique Accesories", "12 Gough Street", "Retail", "Clothing Accesories");
retail[126] = new GLL(22.282409, 114.15415, "Under Armour", "38 Lyndhurst Terrace", "Retail", "Shoes");
retail[127] = new GLL(22.284417, 114.152396, "Velo6 - Bike Shop & Cafe", "6 On Wo Lane", "Retail", "Bike Shop and Cafe");
retail[128] = new GLL(22.282339, 114.152441, "Vera Wang Bride", "39 Staunton Street", "Retail", "Weeding Dress Store");
retail[129] = new GLL(22.283926, 114.155891, "Vickie", "3 Queen Victoria Street", "Retail", "Shoes");
retail[130] = new GLL(22.284514, 114.153184, "Vins", "172 Wellington St.", "Retail", "Wine Shop");
retail[131] = new GLL(22.284141, 114.152447, "Visionaire", "26 Gough Street", "Retail", "Design, Lifestyle");
retail[132] = new GLL(22.282519, 114.151118, "Wellcome Supermarket", "99 Caine Road", "Retail", "");
retail[133] = new GLL(22.282683, 114.152531, "Whatever It Takes", "14D Elgin Street", "Retail", "Fitness Equipment and Clothes");
retail[134] = new GLL(22.282267, 114.152519, "Winnie Couture", "37 Staunton Street", "Retail", "Wedding Dresses");
retail[135] = new GLL(22.281508, 114.151976, "Winnie's Curtains", "73-73A Caine Road", "Retail", "Jewelry and Curtains Retail");
retail[136] = new GLL(22.282219, 114.152339, "Wynne Clothes Store", "56 Peel Street", "Retail", "Clothing Store");
retail[137] = new GLL(22.283847, 114.154077, "Ying Kee Electric", "99c Wellington Street", "Retail", "Electric Supplies, Auto Parts Store");

services[0] = new GLL(22.282399, 114.1546, "12 Lyndhurst Terrace", "12 Lyndhurst Terrace", "Services", "Various Services");
services[1] = new GLL(22.282742, 114.15489, "Alfa House", "59 Wellington Street", "Services", "Small Business; Florist");
services[2] = new GLL(22.282767, 114.154873, "Alins Tailor", "59-61 Wellington Street", "Services", "Tailor");
services[3] = new GLL(22.282885, 114.153813, "Alta Gastronomic", "5 Gage Street", "Services", "Medicine");
services[4] = new GLL(22.282644, 114.152497, "Artland Plastic Advertising", "12 Elgin Street", "Services", "");
services[5] = new GLL(22.282883, 114.15698, "Bangkok Bank", "28 Des Voeux Road", "Services", "Bank");
services[6] = new GLL(22.280302, 114.160235, "Bank of China", "2A Des Voeux Road", "Services", "Bank");
services[7] = new GLL(22.281188, 114.156286, "Bank of China", "1 Wyndham Street", "Services", "");
services[8] = new GLL(22.283887, 114.156554, "Bank of China", "71 Des Voeux Road", "Services", "Bank");
services[9] = new GLL(22.283618, 114.153979, "Butterfly on Wellington", "122 Wellington Street", "Services", "Hotel");
services[10] = new GLL(22.28221, 114.155249, "Centaline Property", "39-41 Wellington Street", "Services", "Housing Services");
services[11] = new GLL(22.284066, 114.153021, "Central District Kai Fong Welfare Association", "11 Aberdeen Street", "Services", "");
services[12] = new GLL(22.283562, 114.156752, "China Citic Bank International", "61-65 Des Voeux Road Central", "Services", "Bank");
services[13] = new GLL(22.283969, 114.156077, "Chiyu Banking Corporation Ltd.", "78 Des Voeux Road", "Services", "Bank");
services[14] = new GLL(22.282573, 114.15706, "Chong Hing Bank", "24 Des Voeux Road Central", "Services", "Bank");
services[15] = new GLL(22.281862, 114.157419, "Citi Bank", "20 Pedder Street", "Services", "");
services[16] = new GLL(22.282183, 114.157844, "DahSing Bank", "19 Des Voeux Road Central", "Services", "Bank");
services[17] = new GLL(22.283238, 114.157072, "DBS", "45 Des Voeux Road Central", "Services", "Bank");
services[18] = new GLL(22.28179, 114.152854, "DK Aroma Therapy", "16A Staunton Street", "Services", "Aromatherapy Service");
services[19] = new GLL(22.282559, 114.154303, "Flight Center", "17 Lyndhurst Terrace", "Services", "Tour Guide Agency");
services[20] = new GLL(22.283107, 114.154802, "Hair Passion", "66-72 Stanley Street", "Services", "Haircut");
services[21] = new GLL(22.282182, 114.156091, "Hang Seng Bank", "50-52 Queen's Road", "Services", "Bank");
services[22] = new GLL(22.281999, 114.153661, "Healthy Foot", "24 Hollywood Road", "Services", "Foot Massage");
services[23] = new GLL(22.282128, 114.152508, "Hippfish", "32 Staunton Street", "Services", "Hair Stylist");
services[24] = new GLL(22.28263, 114.153743, "HSBC", "23-29 Lyndhurst Terrace", "Services", "Bank");
services[25] = new GLL(22.283947, 114.154365, "HSBC Bank", "132 Queen's Road Central", "Services", "Branch of HSBC Bank");
services[26] = new GLL(22.283347, 114.156115, "Hung Fat Pawn Shop", "6-8 Pottinger Street", "Services", "Pawn Shop");
services[27] = new GLL(22.283847, 114.154533, "ICBC", "122-126 Queen's Road Central", "Services", "Bank");
services[28] = new GLL(22.282399, 114.154256, "Jenny Packham", "32 Lyndhurst Terrace", "Services", "Wedding Dress Designer");
services[29] = new GLL(22.27974, 114.155217, "La Belle Salon", "1 Glenealy", "Services", "Hair & Nail Salon");
services[30] = new GLL(22.281162, 114.1523, "Lavande Nail Spa", "61 Caine Road", "Services", "Nail Salon");
services[31] = new GLL(22.280571, 114.15386, "Lee Wah Art & Frames", "5 Chancery Lane", "Services", "Frame Work");
services[32] = new GLL(22.282571, 114.154526, "Man Fong Picture Frame Co., Ltd.", "12-24 Lyndhurst Terrace", "Services", "Frame Work");
services[33] = new GLL(22.283346, 114.15453, "Michelle Rene", "15 Cochrane Street", "Services", "Hair Dresser");
services[34] = new GLL(22.283133, 114.154498, "Mina Dev'Wil", "28 Cochrane Street", "Services", "Hairdresser");
services[35] = new GLL(22.28302, 114.152876, "Ming Fat Realty", "57 Hollywood Road", "Services", "Real Estate Agency");
services[36] = new GLL(22.282999, 114.153297, "My Pal Laundary", "26 Peel Street", "Services", "Laundromat");
services[37] = new GLL(22.282072, 114.155639, "Noble hair", "20 Stanley Street", "Services", "Haircut");
services[38] = new GLL(22.282961, 114.150914, "O2", "17 Wa In Fong E", "Services", "Haircut");
services[39] = new GLL(22.28243, 114.15364, "Oriental Crystal Commercial Building", "46 Lyndhurst Terrace", "Services", "Various Retail and Services");
services[40] = new GLL(22.280235, 114.154572, "Ovolo Central", "2 Arbuthnot Road", "Services", "Hotel");
services[41] = new GLL(22.282185, 114.153791, "Professional Properties Co.", "27 Hollywood Road", "Services", "Housing Services");
services[42] = new GLL(22.283638, 114.152746, "Raw Hair", "14 Aberdeen Street", "Services", "Hair Salon");
services[43] = new GLL(22.281998, 114.152203, "Sawasdee Massage", "23 Elgin Street", "Services", "Massage Service");
services[44] = new GLL(22.283597, 114.153025, "Shing Hing Frozen Meat and Provision", "36 Gage Street", "Services", "Meat Retailer");
services[45] = new GLL(22.282609, 114.154121, "Soho Square", "21A-21B Lyndhurst Terrace", "Services", "Various Retail and Services");
services[46] = new GLL(22.282714, 114.157057, "Standard Chartered", "26 Des Voeux Road Central", "Services", "Bank");
services[47] = new GLL(22.283846, 114.154054, "Stationary Printing", "99 Wellington Street", "Services", "Printing Shop");
services[48] = new GLL(22.283871, 114.156087, "Tak Wing Pawn Shop", "72 Des Voeux Road Central", "Services", "Pawn Shop");
services[49] = new GLL(22.282047, 114.155436, "The Loop", "33 Wellington Street", "Services", "Haircut");
services[50] = new GLL(22.283097, 114.154514, "The Strand", "18 Cochrane Street", "Services", "Hairdresser/Beautician");
services[51] = new GLL(22.283162, 114.154519, "Thir2 Salon", "32 Cochrane Street", "Services", "Hair Salon");
services[52] = new GLL(22.280523, 114.155879, "Toni & Guy", "Wyndham Street", "Services", "Haircut");
services[53] = new GLL(22.283344, 114.154533, "Travel Expert", "15 Cochrane Street", "Services", "Overseas Travel Planner");
services[54] = new GLL(22.283779, 114.152653, "Wood Lik Printing Company", "23 Aberdeen Street", "Services", "Printing Service");
services[55] = new GLL(22.28392, 114.149539, "YMCA", "51 Bridges Street", "Services", "Community, Youth Organizations, Pool");
services[56] = new GLL(22.283152, 114.154762, "Zentro", "66 Stanley Street", "Services", "Haircut");

culturalAsset[0] = new GLL(22.2834, 114.154088, "118 Wellington Street", "118 Wellington Street", "Cultural Asset", "Contains Restaurants and other Services. Designated Heritage Site");
culturalAsset[1] = new GLL(22.282704, 114.152808, "Arch Angel Art", "58 Hollywood Road", "Cultural Asset", "Antique Shop");
culturalAsset[2] = new GLL(22.283098, 114.15282, "C.Y.Tse Antiques", "63 Hollywood Road", "Cultural Asset", "Antique Store");
culturalAsset[3] = new GLL(22.284481, 114.153239, "Chinese Crafts Shop", "168 Wellington Street", "Cultural Asset", "");
culturalAsset[4] = new GLL(22.281964, 114.154379, "Chu's", "1 Hollywood Road", "Cultural Asset", "Antique Store");
culturalAsset[5] = new GLL(22.282052, 114.150809, "Dr. Sun Yat-Sen Museum", "7 Castle Road", "Cultural Asset", "Museum");
culturalAsset[6] = new GLL(22.280343, 114.153712, "Fan Hing Christian Association Ltd.", "29-31 Caine Road", "Cultural Asset", "");
culturalAsset[7] = new GLL(22.283362, 114.154591, "Good Spring Company Limited", "8 Cochrane Street", "Cultural Asset", "Chinese Herbalist Store");
culturalAsset[8] = new GLL(22.283778, 114.151066, "Grand Ho", "108 Hollywood Road", "Cultural Asset", "Street Art Gallery");
culturalAsset[9] = new GLL(22.282189, 114.153826, "Honeychurch Antiques", "29 Hollywood Road", "Cultural Asset", "One of the oldest Antique Stores on Hong Kong");
culturalAsset[10] = new GLL(22.281098, 114.151996, "Hong Kong Baptist Church", "50 Caine Street", "Cultural Asset", "Baptist Church on Aberdeen. Seems to also have other facilities");
culturalAsset[11] = new GLL(22.282178, 114.151288, "House of Grace Hong Kong Baptist Church", "97 Caine Street", "Cultural Asset", "Baptist Church on Caine Street");
culturalAsset[12] = new GLL(22.28373, 114.155758, "JP Book Store", "9 Queen Victoria Street", "Cultural Asset", "");
culturalAsset[13] = new GLL(22.284095, 114.15135, "Lee Hing Antiques", "123 Hollywood Road", "Cultural Asset", "Antique Shop");
culturalAsset[14] = new GLL(22.280708, 114.153644, "Lok Man Rare Books", "6 Chancery Lane", "Cultural Asset", "Rare Books");
culturalAsset[15] = new GLL(22.283771, 114.152904, "Murder Site of Yeung Ku-Wan", "52 Gage Street", "Cultural Asset", "Site of the Assassination of Yeung Ku-Wan");
culturalAsset[16] = new GLL(22.283329, 114.152444, "Oi Ling's Antiques", "72 Hollywood Road", "Cultural Asset", "Antique Shop");
culturalAsset[17] = new GLL(22.283338, 114.152453, "Palais Royal Paris", "74A Hollywood Road", "Cultural Asset", "Antique Jewelry Store");
culturalAsset[18] = new GLL(22.284575, 114.153176, "Progressive Press", "174 Wellington Street", "Cultural Asset", "Printing Services");
culturalAsset[19] = new GLL(22.28223, 114.153717, "Star Company", "31-33 Hollywood Road", "Cultural Asset", "Wooden Carvings");
culturalAsset[20] = new GLL(22.283615, 114.153964, "Taste of Graham", "15-25 Graham Street", "Cultural Asset", "Street Market that attracts a great amount of foot traffic and acts as a center for nearby produce/meat stands");
culturalAsset[21] = new GLL(22.283424, 114.154061, "Tenement House", "120 Wellington Street", "Cultural Asset", "Tenement Building, one of the last buildings that have not been redeveloped. Is located near the Wet Markets, and was at one point located next to a Designated Cultural Site, which has now been torn down.");
culturalAsset[22] = new GLL(22.28134, 114.15283, "The Hong Kong Swatow Christian Church", "20 Shelley Street", "Cultural Asset", "Christian Church");
culturalAsset[23] = new GLL(22.282167, 114.15193, "Tung Shan Porcelain", "69-71 Peel Street", "Cultural Asset", "Porcelain Art Shop");
culturalAsset[24] = new GLL(22.283017, 114.154668, "Tung Sin Tan", "75-77 Wellington Street", "Cultural Asset", "Temple & Charity Organization");
culturalAsset[25] = new GLL(22.281484, 114.155552, "Yung Kee Restaurant", "32-40 Wellington Street", "Cultural Asset", "Famous Chinese Restaurant with 70 years history.");

gallery[0] = new GLL(22.283812, 114.152189, "Ancient Chinese Art", "97 Hollywood Road", "Gallery", "Art Gallery");
gallery[1] = new GLL(22.283666, 114.152465, "Art Futures Gallery", "85 Hollywood Road", "Gallery", "Art Gallery");
gallery[2] = new GLL(22.283755, 114.152313, "Cheong Ming Antiques", "87 Hollywood Road", "Gallery", "");
gallery[3] = new GLL(22.28199, 114.154436, "Connoisseur Art Gallery", "1 Hollywood Road", "Gallery", "");
gallery[4] = new GLL(22.28279, 114.152331, "Culture Club Gallery", "15 Elgin Street", "Gallery", "Art Gallery");
gallery[5] = new GLL(22.280307, 114.153357, "Find Art Studio", "28 Caine Road", "Gallery", "");
gallery[6] = new GLL(22.28017, 114.155619, "Fringe Club", "2 Lower Albert Road", "Gallery", "For over 30 years since established, the Fringe Club has become a vibrant contemporary arts space where artists create and show their work, and those who enjoy the arts come to meet and see shows. Facilities for exhibitions and performances here are offered rent-free to both emerging and professional artists in Hong Kong and from overseas");
gallery[7] = new GLL(22.283955, 114.152235, "Galerie Ora Ora", "7 Shin Hing Street", "Gallery", "Art gallery");
gallery[8] = new GLL(22.282231, 114.153721, "Gallery One", "31-33 Hollywood Road", "Gallery", "Antique Store and Art Gallery");
gallery[9] = new GLL(22.284498, 114.149827, "Hollywood Galleries", "173 Hollywood Road", "Gallery", "Art Gallery");
gallery[10] = new GLL(22.28409, 114.151359, "Joyce Gallery", "123 Hollywood Road", "Gallery", "Art Gallery");
gallery[11] = new GLL(22.283216, 114.152339, "Karin Webber Gallery", "20 Aberdeen Street", "Gallery", "Gallery on Aberdeen");
gallery[12] = new GLL(22.283238, 114.152669, "Kunquat Gallery", "73 Hollywood Road", "Gallery", "Art Gallery");
gallery[13] = new GLL(22.283375, 114.152425, "La Galerie", "74 Hollywood Road", "Gallery", "Art Gallery");
gallery[14] = new GLL(22.28012, 114.155013, "Opera Gallery", "52 Wyndham Street", "Gallery", "");
gallery[15] = new GLL(22.284202, 114.152593, "Rare by Oulton", "19 Gough Street", "Gallery", "Antiques & Rare objects");
gallery[16] = new GLL(22.282695, 114.152864, "Royal Selanger", "54 Hollywood Road", "Gallery", "Art Gallery");
gallery[17] = new GLL(22.284086, 114.150613, "Ruyi 149", "149 Hollywood Road", "Gallery", "Art Gallery");
gallery[18] = new GLL(22.28338, 114.150768, "Select-18", "18 Bridges Street", "Gallery", "Antique Gallery");
gallery[19] = new GLL(22.283107, 114.152248, "Soul Art Shop", "24-26 Aberdeen Street", "Gallery", "Art Shop outside the PMQ");
gallery[20] = new GLL(22.283764, 114.152301, "True Art and Curios", "89 Hollywood Road", "Gallery", "");
gallery[21] = new GLL(22.280753, 114.15335, "10 Chancery Lane", "10 Chancery Lane", "Gallery", "");
gallery[22] = new GLL(22.280051, 114.155159, "Wellington Gallery", "36 Wyndham Street", "Gallery", "");
gallery[23] = new GLL(22.282815, 114.153027, "White Stone Gallery", "57-59 Hollywood Road", "Gallery", "Art Gallery");
gallery[24] = new GLL(22.28198, 114.154377, "Yan Gallery", "1 Hollywood Road", "Gallery", "");
gallery[25] = new GLL(22.282657, 114.152919, "YellowKorner", "58 Hollywood Road", "Gallery", "Art Gallery");

residence[0] = new GLL(22.282945, 114.154728, "71-73 Wellington Street", "71-73 Wellington Street", "Residence", "Residence Building");
residence[1] = new GLL(22.278863, 114.154261, "Caritas House", "2-8 Caine Road", "Residence", "");
residence[2] = new GLL(22.28172, 114.152617, "Choy Lee House", "34 Elgin Street", "Residence", "Residence");
residence[3] = new GLL(22.280333, 114.153383, "Dragon Court X", "28 Caine Road", "Residence", "");
residence[4] = new GLL(22.282779, 114.153091, "Madera Hollywood", "53 Hollywood Road", "Residence", "Hotel");
residence[5] = new GLL(22.281843, 114.152566, "Million City", "26-30 Elgin Street", "Residence", "Residence");
residence[6] = new GLL(22.281775, 114.152303, "Residence", "39 Elgin Street", "Residence", "Residence");
residence[7] = new GLL(22.281531, 114.152324, "Residence", "45 Elgin Street", "Residence", "Residence");
residence[8] = new GLL(22.281137, 114.152602, "The Elgin", "51 Elgin Street", "Residence", "Residence");
residence[9] = new GLL(22.282393, 114.154152, "The Mood", "38 Lyndhurst Terrace", "Residence", "Serviced Apartments");
residence[10] = new GLL(22.283093, 114.152882, "The Soho", "69 Hollywood Road", "Residence", "Hotel");
residence[11] = new GLL(22.282815, 114.154521, "Tung Chai Building", "86-90 Wellington Street", "Residence", "Residence in Wellington");
residence[12] = new GLL(22.28376, 114.154111, "Yin Serviced Appartments", "97A Wellington Street", "Residence", "Residential Building located above shops");

recreation[0] = new GLL(22.281388, 114.152461, "Ayurvedo Spa", "49 Elgin Street", "Recreation", "Health Spa");
recreation[1] = new GLL(22.282119, 114.154001, "Buddha Lounge", "23 Hollywood Road", "Recreation", "Lounge");
recreation[2] = new GLL(22.283686, 114.153897, "Global Wellness", "128 Wellington Street", "Recreation", "Wellness");
recreation[3] = new GLL(22.282063, 114.153212, "Pure Fitness", "32 Hollywood Road", "Recreation", "Fitness Center");
recreation[4] = new GLL(22.282279, 114.152153, "Sideways Driving Club", "65 Peel Street", "Recreation", "Driving Club");
recreation[5] = new GLL(22.280015, 114.15524, "Studio Fitness", "34 Wyndham Street", "Recreation", "Gym");
recreation[6] = new GLL(22.281815, 114.155861, "The Hong Kong Jockey Club", "10-12 Stanley Street", "Recreation", "Jockey Club");
recreation[7] = new GLL(22.283359, 114.154558, "Various Recreation", "13-17 Cochrane Street", "Recreation", "Various Recreation Services");
recreation[8] = new GLL(22.284006, 114.152085, "Yoga BamBam", "10 Shin Hing Street", "Recreation", "Yoga Studio");

education[0] = new GLL(22.282428, 114.150882, "Cannan Nursery", "99 Caine Road", "Education", "");
education[1] = new GLL(22.283823, 114.149275, "Island Christian School", "70 Bridges Street", "Education", "");
education[2] = new GLL(22.283425, 114.150063, "Kings College Old Boys Association Primary School", "58 Bridges Street", "Education", "");
education[3] = new GLL(22.280497, 114.152947, "Sacred Heart Canossian School Private Section", "26 Caine Road", "Education", "Canossian School");
education[4] = new GLL(22.281593, 114.151958, "True Light Kindergarten", "75 Caine Street", "Education", "Kindergarten in Hong Kong");
education[5] = new GLL(22.282326, 114.152769, "Wow Tutors", "45 Graham Street", "Education", "Tutoring Services");


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
  for (let i = 0; i < 196; ++i) {
    foodAndBeverage[i].marker = L.marker([foodAndBeverage[i].lat, foodAndBeverage[i].lon], {icon: greenIcon}).addTo(mymap).on('click', () => foodAndBeverage[i].show());
  }
  
  /* initially show all Retail */
  for (let i = 0; i < 138; ++i) {
    retail[i].marker = L.marker([retail[i].lat, retail[i].lon], {icon: yellowIcon}).addTo(mymap).on('click', () => retail[i].show());
  }
  
  /* initially show all Services */
  for (let i = 0; i < 57; ++i) {
    services[i].marker = L.marker([services[i].lat, services[i].lon], {icon: violetIcon}).addTo(mymap).on('click', () => services[i].show());
  }
  
  /* initially show all Cultural Assets */
  for (let i = 0; i < 26; ++i) {
    culturalAsset[i].marker = L.marker([culturalAsset[i].lat, culturalAsset[i].lon], {icon: redIcon}).addTo(mymap).on('click', () => culturalAsset[i].show());
  }
  
  /* initially show all Galleries */
  for (let i = 0; i < 26; ++i) {
    gallery[i].marker = L.marker([gallery[i].lat, gallery[i].lon], {icon: orangeIcon}).addTo(mymap).on('click', () => gallery[i].show());
  }
  
  /* initially show all Residence */
  for (let i = 0; i < 13; ++i) {
    residence[i].marker = L.marker([residence[i].lat, residence[i].lon], {icon: greyIcon}).addTo(mymap).on('click', () => residence[i].show());
  }
  
  /* initially show all Recreation */
  for (let i = 0; i < 9; ++i) {
    recreation[i].marker = L.marker([recreation[i].lat, recreation[i].lon], {icon: redIcon}).addTo(mymap).on('click', () => recreation[i].show());
  }
  
  /* initially show all Education */
  for (let i = 0; i < 6; ++i) {
    education[i].marker = L.marker([education[i].lat, education[i].lon], {icon: blackIcon}).addTo(mymap).on('click', () => education[i].show());
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
  for (let i = 0; i < 196; ++i) {
    if (document.getElementById("fb-cb").checked) {
      foodAndBeverage[i].marker.addTo(mymap);
    } else {
      foodAndBeverage[i].marker.remove();
    }
  }
}

var toggleRet = () => {
  for (let i = 0; i < 138; ++i) {
    if (document.getElementById("fb-ret").checked) {
      retail[i].marker.addTo(mymap);
    } else {
      retail[i].marker.remove();
    }
  }
}

var toggleSer = () => {
  for (let i = 0; i < 57; ++i) {
    if (document.getElementById("fb-ser").checked) {
      services[i].marker.addTo(mymap);
    } else {
      services[i].marker.remove();
    }
  }
}

var toggleCA = () => {
  for (let i = 0; i < 26; ++i) {
    if (document.getElementById("fb-ca").checked) {
      culturalAsset[i].marker.addTo(mymap);
    } else {
      culturalAsset[i].marker.remove();
    }
  }
}

var toggleGal = () => {
  for (let i = 0; i < 26; ++i) {
    if (document.getElementById("fb-gal").checked) {
      gallery[i].marker.addTo(mymap);
    } else {
      gallery[i].marker.remove();
    }
  }
}

var toggleRes = () => {
  for (let i = 0; i < 13; ++i) {
    if (document.getElementById("fb-res").checked) {
      residence[i].marker.addTo(mymap);
    } else {
      residence[i].marker.remove();
    }
  }
}

var toggleRec = () => {
  for (let i = 0; i < 9; ++i) {
    if (document.getElementById("fb-rec").checked) {
      recreation[i].marker.addTo(mymap);
    } else {
      recreation[i].marker.remove();
    }
  }
}

var toggleEdu = () => {
  for (let i = 0; i < 6; ++i) {
    if (document.getElementById("fb-edu").checked) {
      education[i].marker.addTo(mymap);
    } else {
      education[i].marker.remove();
    }
  }
}
