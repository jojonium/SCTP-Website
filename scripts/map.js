/* globals */
var mymap;
var historicSites  = new Array(22);

/* Graded Historic Site class */
class GHS {
  constructor(lat, lon, name, grade, type, comments) {
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.grade = grade;
    this.type = type;
    this.comments = comments;
  }
}

/* function for displaying the details of a Graded Historic Site */
var showGHS = (index) => {
  document.getElementById("rb-title").innerHTML = historicSites[index].name;
  document.getElementById("rb-subtitle").innerHTML = historicSites[index].type;
  /*document.getElementById("rb-subsubtitle").innerHTML = (historicSites[index].grade > 0) ? "AMO Historic Site, Grade " + historicSites[index].grade : historicSites[index].grade;*/
  document.getElementById("rb-content").innerHTML = historicSites[index].comments;
  document.getElementById("rb-source").innerHTML = `Source: <a href="http://www5.lcsd.gov.hk/internet/index.html">Geographic Information System on Hong Kong Heritage</a>`;
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

/* Initialize the map */
window.onload = () => {
  mymap = L.map('mapDiv').setView([22.282, 114.154], 17);
  L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: `&copy;
    <a href="https://www.openstreetmap.org/copyright">
      OpenStreetMap
    </a>`,
  subdomains: ['a','b','c']
  }).addTo( mymap );

  var triangle = L.polygon([
    [22.28366, 114.15095],
    [22.27983, 114.15420],
    [22.28463, 114.15649]
  ]).addTo(mymap);
  
  /* initially show all historic sites */
  for (let i = 0; i < 22; ++i) {
    historicSites[i].marker = L.marker([historicSites[i].lat, historicSites[i].lon]).addTo(mymap).on('click', () => showGHS(i));
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
