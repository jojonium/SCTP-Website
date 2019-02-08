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
        Mateo Carvajal, Zhi Hui, and Peter Nolan
      </a>. Updated by Joseph Petitti`;
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
  for (let i = 0; i < 195; ++i) {
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
  for (let i = 0; i < 195; ++i) {
    if (document.getElementById("fb-cb").checked) {
      foodAndBeverage[i].marker.addTo(mymap);
    } else {
      foodAndBeverage[i].marker.remove();
    }
  }
}
