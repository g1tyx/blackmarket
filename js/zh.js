/**
 * 20190319@JAR:
 * 
 * 1.汉化字典'cnItems:obj',
 * 2.采集新词'cnItem:fun';
 * 
 */

//1.汉化杂项
var cnItems = {
    _STYLE_: [
        '符号', '待归类', '地图', '防具', '武器', '道具', '属性', '敌人'
    ],
    _OTHER_: [],

    //1.0.符号
    '': '',
    '---': '———',

    //1.1.待归类
    'Advanced Biology Laboratory': '高级生物学实验室',
    'Amezcua State-of-the-Art Lab': '阿梅兹夸最先进的实验室',
    'ammo stock x2': '弹夹容量 x2',
    'Ammunition Pouch': '弹药袋',
    'Another cocaine price upgrade...': '另一个可卡因价格升级...',
    'Another meth price upgrade...': '另一个冰毒价格升级...',
    'Another weed price upgrade...': '另一个大麻价格升级...',
    'Antoher weed price upgrade...': '另一个大麻价格升级...',
    'Automatic Ejection System': '自动弹射系统',
    'Automatic Selector': '自动选择器',
    'Backyard': '后院',
    'Barrel': '枪管',
    'Basement Lab': '地下室实验室',
    'Beakers': '烧杯',
    'Beakers II': '烧杯 II',
    'Billionaire': '亿万富翁',
    'Biologist': '生物学家',
    'Biologists': '生物学家',
    'Biologists II': '生物学家 II',
    'Brand New Equipment': '全新设备',
    'Brazilian Farm': '巴西农场',
    'BuzzFire Trigger Kit': '蜂鸣触发套件',
    'Camera Review System': '摄像检查系统',
    'Cessna Transport Aircraft': '塞斯纳运输机',
    'Chemical Burner': '化学燃烧器',
    'Chemical Press': '化学出版社',
    'Chemical Warehouse': '化学仓库',
    'Chemist': '化学家',
    'Chemist II': '化学家 II',
    'Close-Quarter Range Instructor': '近距离射击教官',
    'Close-Quarter Range Tower': '近距离发射塔',
    'Closet Grow Room': '培养室',
    'Cocaine': '可卡因',
    'Cocaine Base Filter': '可卡因基础过滤',
    'Cocaine Drying Machine': '可卡因烘干机器',
    'cocaine price x2': '可卡因价格 x2',
    'cocaine price x3': '可卡因价格 x3',
    'Competition Shooter Series Kit': '射击比赛系列装备',
    'Competitive Series Ejector': '竞争系列喷射器',
    'Decillionnaire (L33t hax0r)': 'Decillionnaire (L33t hax0r)',
    'Digital Impact System': '数字冲击系统',
    'Earn $1.000 billion of total money': '累计获得 $1.000 billion 金钱',
    'Earn $1.000 decillion of total money': '累计获得 $1.000 decillion 金钱',
    'Earn $1.000 million of total money': '累计获得 $1.000 million 金钱',
    'Earn $1.000 nonillion of total money': '累计获得 $1.000 nonillion 金钱',
    'Earn $1.000 octillion of total money': '累计获得 $1.000 octillion 金钱',
    'Earn $1.000 quadrillion of total money': '累计获得 $1.000 quadrillion 金钱',
    'Earn $1.000 quintillion of total money': '累计获得 $1.000 quintillion 金钱',
    'Earn $1.000 septillion of total money': '累计获得 $1.000 septillion 金钱',
    'Earn $1.000 sextillion of total money': '累计获得 $1.000 sextillion 金钱',
    'Earn $1.000 trillion of total money': '累计获得 $1.000 trillion 金钱',
    'Earn 1,000 experience': '获得 1 经验',
    'Earn 1.000 billion experience': '获得 1.000 billion 经验',
    'Earn 1.000 million experience': '获得 1.000 million 经验',
    'Earn 1.000 quadrillion experience': '获得 1.000 quadrillion 经验',
    'Earn 1.000 trillion experience': '获得 1.000 trillion 经验',
    'Earn 100 experience': '获得 100 经验',
    'Earn 100,000 experience': '获得 100,000 经验',
    'Earn 100.000 million experience': '获得 100.000 million 经验',
    'Earn 100.000 trillion experience': '获得 100.000 trillion 经验',
    'Earn 25 experience': '获得 25 经验',
    'Earn 25,000 experience': '获得 25,000 经验',
    'Earn 250.000 billion experience': '获得 250.000 billion 经验',
    'Earn 5.000 quadrillion experience': '获得 5.000 quadrillion 经验',
    'Earn 50.000 quadrillion experience': '获得 50.000 quadrillion 经验',
    'Earn 500.000 trillion experience': '获得 500.000 trillion 经验',
    'Experienced I': '经验丰富 I',
    'Experienced II': '经验丰富 II',
    'Experienced III': '经验丰富 III',
    'Experienced IV': '经验丰富 IV',
    'Experienced IX': '经验丰富 IX',
    'Experienced V': '经验丰富 V',
    'Experienced VI': '经验丰富 VI',
    'Experienced VII': '经验丰富 VII',
    'Experienced VIII': '经验丰富 VIII',
    'Experienced X': '经验丰富 X',
    'Extra Magazine': '额外弹匣',
    'Extra Workers': '额外工人',
    'Faster Targets': '更快的目标',
    'Field Expansion': '区域扩张',
    'Field Expansion I': '区域扩张 I',
    'Field Expansion II': '区域扩张 II',
    'Field Expansion III': '区域扩张 III',
    'Field Expansion IV': '区域扩张 IV',
    'Field Expansion V': '区域扩张 V',
    'Field Expansion VI': '区域扩张 VI',
    'Fully Automatic Kit': '全自动套件',
    'Gasoline Container': '汽油容器',
    'Genetically Modified Weed I': '转基因大麻 I',
    'Genetically Modified Weed II': '转基因大麻 II',
    'Genetically Modified Weed III': '转基因大麻 III',
    'Genetically Modified Weed IV': '转基因大麻 IV',
    'Genetically Modified Weed V': '转基因大麻 V',
    'Glow-in-the-Dark Paper Targets': '在黑暗中发光的纸靶',
    'Gold Industries PlatinumX Ejector': '黄金工业用铂喷射器',
    'Graduated Cylinders': '量筒',
    'Green House': '温室',
    'Grip': '把手',
    'Hammer Upgrade': '锤子升级',
    'Harvesting Equipment': '收获设备',
    'Harvesting Equipment II': '收获设备 II',
    'High-Tech Lab': '高科技实验室',
    'High-Tech Security System': '高科技安全系统',
    'Hydraulic Press': '液压机',
    'Indoor Range': '室内范围',
    'Indoor Range Armory': '室内范围军械库',
    'Indoor Range Bar': '室内范围条',
    'Indoor Range II': '室内范围 II',
    'Indoor Range III': '室内范围 III',
    'Indoor Range Upgrade': '室内范围升级',
    'Industrial Refrigerator': '工业冰箱',
    'Integrated Ejection Switch': '集成喷射开关',
    'Internal Hammer': '内部锤',
    'Ivy League Chemists': '常春藤联盟化学家',
    'Jungle Lab': '丛林实验室',
    'Kidnap more Workers': '绑架更多工人',
    'Kitchen Upgrade': '厨房升级',
    'LR Magazine Extension kit': '左右弹匣扩展套件',
    'Magazine': '弹匣',
    'Magazine Ejector': '弹匣弹射器',
    'Magazine Ejector Upgrade': '弹匣弹射器升级',
    'Master Reloader I': '装弹大师 I',
    'Master Reloader II': '装弹大师 II',
    'Master Reloader III': '装弹大师 III',
    'Master Reloader IV': '装弹大师 IV',
    'Master Reloader IX': '装弹大师 IX',
    'Master Reloader V': '装弹大师 V',
    'Master Reloader VI': '装弹大师 VI',
    'Master Reloader VII': '装弹大师 VII',
    'Master Reloader VIII': '装弹大师 VIII',
    'Master Reloader X': '装弹大师 X',
    'Meth': '冰毒',
    'meth price x2': '冰毒价格 x2',
    'meth price x3': '冰毒价格 x3',
    'meth price x4': '冰毒价格 x4',
    'Microwave Oven': '微波炉',
    'Miles Gear Triple Slot Magazine': '迈尔斯齿轮三槽弹匣',
    'Millionaire': '百万富翁',
    'Mobile RV Lab': '移动式房车实验室',
    'Moving Targets': '移动目标',
    'Moving Targets II': '移动目标 II',
    'Nonillionaire (rly?)': 'Nonillionaire (rly?)',
    'Octillionaire': 'Octillionaire',
    'Packaging Machine': '包装机',
    'Paper Targets': '纸靶',
    'Paper Targets II': '纸靶 II',
    'Personal Trainer': '私人教练',
    'Prestigious I': '声名显赫 I',
    'Prestigious II': '声名显赫 II',
    'Prestigious III': '声名显赫 III',
    'Prestigious IV': '声名显赫 IV',
    'Prestigious V': '声名显赫 V',
    'Professional Chemical Lab': '专业化学实验室',
    'Professional Underground Lab': '专业地下实验室',
    'Professional Underground Lab II': '专业地下实验室 II',
    'Quadrillionaire': 'Quadrillionaire',
    'Quintillionaire': 'Quintillionaire',
    'Reload 1 time': '装弹 1 次',
    'Reload 1,000 times': '装弹 1,000 次',
    'Reload 10 times': '装弹 10 次',
    'Reload 10,000 times': '装弹 10,000 次',
    'Reload 100 times': '装弹 100 次',
    'Reload 100,000 times': '装弹 100,000 次',
    'Reload 15.000 million times': '装弹 15.000 million 次',
    'Reload 2,500 times': '装弹 2,500 次',
    'Reload 2.500 million times': '装弹 2.500 million 次',
    'Reload 200,000 times': '装弹 200,000 次',
    'Reload 25 times': '装弹 25 次',
    'Reload 25,000 times': '装弹 25,000 次',
    'Reload 25.000 million times': '装弹 25.000 million 次',
    'Reload 250 times': '装弹 250 次',
    'Reload 50 times': '装弹 50 次',
    'Reload 50,000 times': '装弹 50,000 次',
    'Reload 500 times': '装弹 500 次',
    'Reload 500,000 times': '装弹 500,000 次',
    'Reload 7.500 million times': '装弹 7.500 million 次',
    'Reload 750,000 times': '装弹 750,000 次',
    'reload time /1.10': '装弹时间 /1.10',
    'reload time /1.25': '装弹时间 /1.25',
    'reload time /1.50': '装弹时间 /1.50',
    'Reloader I': '装弹 I',
    'Reloader II': '装弹 II',
    'Reloader III': '装弹 III',
    'Reloader IV': '装弹 IV',
    'Reloader IX': '装弹 IX',
    'Reloader V': '装弹 V',
    'Reloader VI': '装弹 VI',
    'Reloader VII': '装弹 VII',
    'Reloader VIII': '装弹 VIII',
    'Reloader X': '装弹 X',
    'Research Institution': '研究机构',
    'Rifle Range Tower': '步枪范围塔',
    'Safety Equipment': '安全设备',
    'Selector Switch Upgrade': '选择器开关升级',
    'Septillionaire': 'Septillionaire',
    'Sextillionaire': 'Sextillionaire',
    'Shoot 1 time': '射击 1 次',
    'Shoot 1,000 times': '射击 1,000 次',
    'Shoot 1.000 billion times': '射击 1.000 billion 次',
    'Shoot 1.337 billion times': '射击 1.337 billion 次',
    'Shoot 1.500 million times': '射击 1.500 million 次',
    'Shoot 10,000 times': '射击 10,000 次',
    'Shoot 10.000 million times': '射击 10.000 million 次',
    'Shoot 100 times': '射击 100 次',
    'Shoot 100,000 times': '射击 100,000 次',
    'Shoot 2,500 times': '射击 2,500 次',
    'Shoot 25 times': '射击 25 次',
    'Shoot 250,000 times': '射击 250,000 次',
    'Shoot 250.000 million times': '射击 250.000 million 次',
    'Shoot 5,000 times': '射击 5,000 次',
    'Shoot 5.000 billion times': '射击 5.000 billion 次',
    'Shoot 5.000 million times': '射击 5.000 million 次',
    'Shoot 50,000 times': '射击 50,000 次',
    'Shoot 50.000 million times': '射击 50.000 million 次',
    'Shoot 500 times': '射击 500 次',
    'Shoot 750,000 times': '射击 750,000 次',
    'shoot reward x1.5': '射击奖励 x1.5',
    'shoot reward x2': '射击奖励 x2',
    'shoot reward x2.66': '射击奖励 x2.66',
    'shoot reward x2.88': '射击奖励 x2.88',
    'shoot reward x3': '射击奖励 x3',
    'shoot reward x4': '射击奖励 x4',
    'shoot reward x5': '射击奖励 x5',
    'shoot time /1.10': '射击时间 x1.10',
    'shoot time /1.25': '射击时间 x1.25',
    'shoot time /1.5': '射击时间 x1.5',
    'Shooter Elite I': '精英射手 I',
    'Shooter Elite II': '精英射手 II',
    'Shooter Elite III': '精英射手 III',
    'Shooter Elite IV': '精英射手 IV',
    'Shooter Elite IX': '精英射手 IX',
    'Shooter Elite V': '精英射手 V',
    'Shooter Elite VI': '精英射手 VI',
    'Shooter Elite VII': '精英射手 VII',
    'Shooter Elite VIII': '精英射手 VIII',
    'Shooter Elite X': '精英射手 X',
    'Shooter I': '射手 I',
    'Shooter II': '射手 II',
    'Shooter III': '射手 III',
    'Shooter IV': '射手 IV',
    'Shooter IX': '射手 IX',
    'Shooter V': '射手 V',
    'Shooter VI': '射手 VI',
    'Shooter VII': '射手 VII',
    'Shooter VIII': '射手 VIII',
    'Shooter X': '射手 X',
    'Small Chemical Lab': '小化学实验室',
    'Sniper Range Digital Overhaul': '狙击范围数字大修',
    'Sniper School': '狙击手学校',
    'Special Operations Ejection System': '特种作战弹射系统',
    'Special Operations Kit': '特种作战套件',
    'Storage Equipment': '存储设备',
    'Storage Flask': '存储瓶',
    'Storage Flask II': '存储瓶 II',
    'Tower Digital Impact System': '塔式数字冲击系统',
    'Tower Laser Range Finder': '塔式激光测距仪',
    'Transport Mules': '骡子运输',
    'Trash Can o\'Mixing': '可混合垃圾桶',
    'Trigger': '扳机',
    'Trigger Assembly Upgrade': '扳机装置升级',
    'Trillionaire': 'Trillionaire',
    'Tubes, Lots of Tubes': '管子，很多管子',
    'Weed': '大麻',
    'weed price x2': '大麻价格 x2',
    'weed price x3': '大麻价格 x3',
    'weed price x5': '大麻价格 x5',
    'Weston Select Trigger': '韦斯顿选择扳机',
    'Worker Smoke Area': '工人吸烟区',
    'Worker Training': '工人培训',
    'Wulframe Signature Series Ejector': '框架签名系列喷射器',
    'X250 Dual Sport Magazine': 'x250 双重弹匣',
    'no rank': '无',
    'Drug Advisor': '毒品顾问',
    '200 Acre Outdoor Rifle Range': '200英亩的户外步枪靶场',
    'All drugs prices x2': '所有毒品价格 x2',
    'All drugs prices x3': '所有毒品价格 x3',
    'All drugs prices x4': '所有毒品价格 x4',
    'Enable auto-reloading': '启用自动装弹',
    'Enable auto-shooting': '启用自动射击',
    'Shoot earn 1% of $/sec': '射击获得 1% 金钱/秒',
    'Shoot earn 2% of $/sec': '射击获得 2% 金钱/秒',
    'Shoot earn 4% of $/sec': '射击获得 4% 金钱/秒',
    'Backyard Dealer': '后院经销商',
    'Bolivian Farm': '玻利维亚农场',
    'Casino Owner': '赌场老板',
    'Cocaine Field': '可卡因农场',
    'Columbian Estate': '哥伦比亚庄园',
    'Dark Alley': '黑暗巷子',
    'Downtown Dealer': '市中心经销商',
    'Drug Trafficking Syndicate': '贩毒集团',
    'Executive\'s Club Chairman': '行政俱乐部主席',
    'Local Club Chauffeur': '当地俱乐部司机',
    'Local Gangsters': '当地黑帮',
    'Mafia Associates': '黑手党协会',
    'Meth House': '冰毒室',
    'Nightclub Owner': '夜总会老板',
    'Small Farm': '小农场',
    'Small Time Dealer': '实时经销商',
    'Dealer I': '经销商 I',
    'Dealer II': '经销商 II',
    'Dealer III': '经销商 III',
    'Drug Baron': '毒品主管',
    'Drug Emperor': '毒品男爵',
    'Drug Kingpin': '毒品皇帝',
    'Drug Mastermind': '毒品盟主',
    'Drug Supplier I': '毒品供应商 I',
    'Drug Supplier II': '毒品供应商 II',
    'Drug Supplier III': '毒品供应商 III',
    'Enforcer Captain': '执法队长',
    'Gang Leader': '团伙头目',
    'Gang Under-boss': '团伙二头目',
    'Junior Enforcer': '初级执法者',
    'Legendary Drug-lord I': '传奇毒枭 I',
    'Legendary Drug-lord II': '传奇毒枭 II',
    'Legendary Drug-lord III': '传奇毒枭 III',
    'Legendary Drug-lord IV': '传奇毒枭 IV',
    'Legendary Drug-lord V': '传奇毒枭 V',
    'Mafia Associate': '黑手党助理',
    'Mafia Boss': '黑手党老大',
    'Mafia Captain': '黑手党队长',
    'Mafia Consigliere': '黑手党军师',
    'Mafia Don': '黑手党唐',
    'Mafia Drug Advisor': '黑手党毒品顾问',
    'Mafia Lieutenant': '黑手党中将',
    'Mafia Under-boss': '黑手党二老板',
    'Petty Thief I': '小盗贼 I',
    'Petty Thief II': '小盗贼 II',
    'Petty Thief III': '小盗贼 III',
    'Prestigious Drug-lord I': '久负盛名的毒枭 I',
    'Prestigious Drug-lord II': '久负盛名的毒枭 II',
    'Prestigious Drug-lord III': '久负盛名的毒枭 III',
    'Prospective Supplier': '准供应商',
    'Senior Enforcer': '高级执法者',
    'Street Rat I': '过街老鼠 I',
    'Street Rat II': '过街老鼠 II',
    'Street Rat III': '过街老鼠 III',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //1.2.地图
    '': '',
    '': '',

    //1.3.防具
    //1.4.武器
    //1.5.道具

    //1.6.属性（30）
    '': '',

    //1.7.敌人 

};
//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    if (
        s < 65 || (s > 90 && s < 97) || (s > 122)

    ) return text;
    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return cnItems[i];
    }

    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (text == cnItems._OTHER_[i])
            return text;
    }

    //未收录则保存
    cnItems._OTHER_.push(text);
    cnItems._OTHER_.sort(
        function (a, b) {
            return a.localeCompare(b)
        }
    );

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return text;
};
