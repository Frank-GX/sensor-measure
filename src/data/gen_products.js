const fs = require('fs');
const f = 'C:/Users/22397/WorkBuddy/传感器/sensor-measure-site/src/data/products.js';

// Build the complete 21-category product data
const P = {};

// ============ HELPER: create category ============
function cat(slug, title, desc, icon, seoTitle, seoDesc) {
  return { slug, title, description: desc, icon, seo: { title: seoTitle, description: seoDesc }, items: [] };
}
function prod(s, n, m, img, specs, feats, apps, desc, tags) {
  return { slug:s, name:n, model:m, image:img, specs, features:feats, applications:apps, description:desc, filterTags:tags };
}

// 1. WATER QUALITY SENSOR
P['water-quality-sensor'] = cat('water-quality-sensor', 'Water Quality Sensors',
  'Comprehensive water quality monitoring instruments including pH/ORP meters, dissolved oxygen sensors, turbidity sensors, COD analyzers, and multi-parameter probes for environmental, industrial, and aquaculture applications.',
  '💧', 'Water Quality Sensor Manufacturer | pH, DO, Turbidity, COD Sensor',
  'Professional water quality sensor manufacturer. pH/ORP meter, dissolved oxygen sensor, turbidity sensor, COD analyzer, multi-parameter monitor. RS485/4-20mA output, IP68 protection. OEM/ODM available. Global shipping.');
P['water-quality-sensor'].items.push(
  prod('ph-orp-meter-4-20ma-lcd', 'High Precision pH/ORP Meter with LCD Display', 'SMWQ-PH500',
    'https://www.fluid-meter.com/img/kph500-high-precision-ph-orp-meter.jpg',
    [{l:'Measuring Range',v:'pH: 0-14 / ORP: -2000~+2000 mV'},{l:'Resolution',v:'pH: 0.01 / ORP: 1 mV'},{l:'Accuracy',v:'+/-0.03pH / +/-10mV'},{l:'Output Signal',v:'4-20mA / RS485 Modbus / HART'},{l:'Temperature Compensation',v:'Automatic (Pt1000/NTC)'},{l:'Display',v:'LCD with Chinese menu / TFT color LCD (optional)'},{l:'Power Supply',v:'AC220V or DC24V'},{l:'Protection Grade',v:'IP65 / IP67 (optional)'},{l:'Sensor Material',v:'PVC / PPS / 316L SS (optional)'},{l:'Cable Length',v:'Standard 5m (extendable up to 30m)'}],
    ['Dual-channel measurement: simultaneous pH and ORP detection in single probe','Advanced composite electrode eliminates "K" value drift for long-term stability','Unaffected by water color, turbidity, colloids, oxidants or reducing agents','LCD display with intuitive Chinese menu for easy on-site operation','Multiple output options: dual 4-20mA, relay alarm, RS485 communication','Automatic temperature compensation ensures accuracy across 0-60C operating range','IP68-rated submersible sensor for reliable long-term deployment'],
    ['Aquaculture & fish farming','Municipal water treatment','Industrial wastewater monitoring','Swimming pools & spas','Environmental monitoring stations','Chemical process control'],
    `The SMWQ-PH500 High Precision pH/ORP Meter is engineered for demanding water quality monitoring where reliability and accuracy are critical. This dual-parameter instrument simultaneously measures both pH level and Oxidation-Reduction Potential (ORP) through an advanced composite electrode system. The sensor employs potentiometric measurement combined with microcomputer-based signal processing. Unlike conventional electrodes that suffer from variable "K" value drift over time, the PH500 uses a proprietary composite electrode architecture that maintains calibration stability for extended periods — significantly reducing maintenance frequency and operational costs. Built for versatility, this meter performs reliably across clean water, wastewater, industrial process streams, and chemical reagent solutions.`,
    {outputSignal:['4-20mA','RS485 Modbus','HART'],protectionGrade:'IP65',measuringRange:'pH 0-14',powerSupply:'AC220V/DC24V',applicationAreas:['Water Treatment','Environmental Monitoring','Aquaculture','Industrial Process']})
);
P['water-quality-sensor'].items.push(
  prod('fluorescence-dissolved-oxygen-sensor','Fluorescence Dissolved Oxygen Sensor','SMWQ-DO200',
    'https://www.fluid-meter.com/img/fluorescence-do-sensor.jpg',
    [{l:'Principle',v:'Ultraviolet Fluorescence (optical)'},{l:'Measuring Range',v:'0-20 mg/L (ppm) / 0-200% saturation'},{l:'Accuracy',v:'+/-1% of reading or +/-0.1 mg/L'},{l:'Resolution',v:'0.01 mg/L'},{l:'Response Time (T90)',v:'< 30 seconds'},{l:'Output Signal',v:'RS485 Modbus / 4-20mA'},{l:'Temperature Compensation',v:'Automatic (-5 to +50C)'},{l:'Pressure Rating',v:'0-6 bar (60m depth rated)'},{l:'Protection Grade',v:'IP68 (fully submersible)'},{l:'Electrolyte Required',v:'No — optical method, maintenance-free'}],
    ['Optical fluorescence method — no electrolyte refills, no membrane replacement needed','Extremely low maintenance compared to electrochemical DO sensors','Fast response time under 30 seconds enables real-time process control','Unaffected by hydrogen sulfide (H2S) that poisons traditional Clark cells','Automatic temperature compensation across full operating range','IP68 waterproof rating suitable for continuous submerged operation','RS485 Modbus digital output for noise-free long-distance transmission'],
    ['Fish farming & aquaculture','Biological wastewater treatment (aeration control)','Surface water environmental monitoring','Laboratory research','Drinking water quality assessment','River and lake ecology studies'],
    `The SMWQ-DO200 Fluorescence Dissolved Oxygen Sensor leverages cutting-edge optical fluorescence technology to deliver accurate, low-maintenance DO measurements. Unlike traditional electrochemical sensors that require frequent electrolyte changes and membrane replacements, this optical probe operates entirely without consumables. The measurement principle: blue light excitation causes dissolved oxygen molecules in the sample to emit red fluorescence. The intensity of this fluorescent response correlates directly with oxygen concentration. By measuring fluorescence decay rather than electrical current, the sensor avoids drift, poisoning, and fouling issues that plague galvanic and polarographic DO sensors.`,
    {outputSignal:['4-20mA','RS485 Modbus'],protectionGrade:'IP68',measuringRange:'0-20 mg/L DO',powerSupply:'DC12-24V',applicationAreas:['Aquaculture','Water Treatment','Environmental Monitoring','Wastewater']})
);

console.log('Phase 1 done: Water Quality Sensors');
fs.writeFileSync(f, 'const products = {\n  // Generated by sensor-measure.com product builder\n  // 21 categories matching competitor fluid-meter.com\n\n');
fs.appendFileSync(f, "  // ======== 1. WATER QUALITY SENSOR ========\n");
fs.appendFileSync(f, JSON.stringify(P['water-quality-sensor'], null, 2).replace(/"/g, "'") + ',\n\n');
