const products = {
  'radar-level-transmitters': {
    title: 'Radar Level Transmitters',
    description: 'High-accuracy non-contact level measurement using FMCW and pulse radar technology. Ideal for harsh industrial environments with dust, steam, high temperature and pressure.',
    icon: '📡',
    seo: {
      title: 'Radar Level Transmitter Manufacturer | FMCW & 80GHz Radar Sensors',
      description: 'Professional radar level transmitter manufacturer. FMCW 80GHz & 120GHz radar level sensors for liquids and solids. CE certified, OEM/ODM available. Global shipping.',
    },
    items: [
      {
        slug: '80ghz-fmcw-radar-level-transmitter',
        name: '80GHz FMCW Radar Level Transmitter',
        model: 'SMRD-80G',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
        specs: [
          { label: 'Frequency', value: '76-81 GHz (FMCW)' },
          { label: 'Measuring Range', value: '0.1 - 120 m' },
          { label: 'Accuracy', value: '±1 mm' },
          { label: 'Beam Angle', value: '3°' },
          { label: 'Output Signal', value: '4-20mA / HART / RS485 Modbus' },
          { label: 'Process Temperature', value: '-40 to +200 °C' },
          { label: 'Process Pressure', value: '-0.1 to 4.0 MPa' },
          { label: 'Protection Grade', value: 'IP67' },
          { label: 'Housing Material', value: 'Aluminum / 316L SS' },
          { label: 'Antenna Material', value: 'PTFE / 316L SS' },
          { label: 'Power Supply', value: '24 VDC (18-36 VDC)' },
          { label: 'Certification', value: 'CE, RoHS, Ex ia IIC T6 (optional)' },
        ],
        features: [
          '80GHz FMCW technology with ultra-narrow 3° beam angle for precise targeting',
          'Non-contact measurement, unaffected by dust, steam, foam, or turbulence',
          'Measuring range up to 120 meters with ±1mm accuracy',
          'Compact antenna design fits in small tank nozzles (DN40+)',
          'Bluetooth wireless commissioning via smartphone app',
          'Built-in echo display and diagnostic functions',
          'Suitable for liquids, solids, powders, and granules',
          'Optional Ex-proof certification for hazardous areas',
        ],
        applications: ['Chemical storage tanks', 'Silos and hoppers', 'Oil and gas tanks', 'Water treatment', 'Cement and aggregates'],
        description: `The SMRD-80G 80GHz FMCW Radar Level Transmitter represents the latest generation of high-frequency radar technology for industrial level measurement. Operating in the 76-81 GHz frequency band with Frequency Modulated Continuous Wave (FMCW) technology, it delivers exceptional measurement precision and reliability even in the most challenging process conditions.

Unlike conventional 26GHz radar sensors, the 80GHz frequency provides a significantly narrower beam angle of just 3°, allowing the sensor to avoid internal tank obstructions such as agitators, heating coils, and ladders. This makes it ideal for installations in small tanks, narrow silos, and vessels with complex internal structures.

The SMRD-80G is virtually immune to process conditions that typically challenge other technologies. It performs consistently in the presence of dust, steam, condensation, foam, and temperature gradients — conditions where ultrasonic sensors often fail. With a measurement range of up to 120 meters and ±1mm accuracy, it handles everything from small day tanks to massive storage silos.

Bluetooth connectivity enables wireless setup and diagnostics via a smartphone app, eliminating the need for physical access to the transmitter in hazardous or hard-to-reach locations. The built-in echo curve display and diagnostic tools simplify troubleshooting and commissioning.`,
      },
      {
        slug: '120ghz-fmcw-radar-level-transmitter',
        name: '120GHz FMCW Radar Level Transmitter',
        model: 'SMRD-120G',
        image: 'https://images.unsplash.com/photo-1581092921461-7d7c4a1e14e3?w=600&h=400&fit=crop',
        specs: [
          { label: 'Frequency', value: '120-126 GHz (FMCW)' },
          { label: 'Measuring Range', value: '0.05 - 80 m' },
          { label: 'Accuracy', value: '±0.5 mm' },
          { label: 'Beam Angle', value: '1.5°' },
          { label: 'Output Signal', value: '4-20mA / HART / RS485 Modbus' },
          { label: 'Process Temperature', value: '-40 to +200 °C' },
          { label: 'Process Pressure', value: '-0.1 to 2.5 MPa' },
          { label: 'Protection Grade', value: 'IP68' },
          { label: 'Housing Material', value: 'Aluminum / 316L SS' },
          { label: 'Antenna Material', value: 'PTFE / 316L SS' },
          { label: 'Power Supply', value: '24 VDC (18-36 VDC)' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Industry-leading 120GHz FMCW technology with ultra-narrow 1.5° beam',
          'Sub-millimeter accuracy (±0.5mm) for precision applications',
          'Perfect for very small tanks and narrow spaces',
          'Minimal dead zone of only 50mm',
          'Excellent performance on low dielectric media',
          'Bluetooth app configuration',
          'Compact and lightweight design',
          'Ideal for hygienic and pharmaceutical applications',
        ],
        applications: ['Food and beverage processing', 'Pharmaceutical manufacturing', 'Small process vessels', 'Hygienic applications', 'Precision chemical dosing'],
        description: `The SMRD-120G is our premium 120GHz FMCW radar level transmitter, pushing the boundaries of high-frequency radar measurement. Operating at 120-126 GHz, it provides an industry-leading 1.5° beam angle — the narrowest available — making it the perfect solution for small tanks, narrow nozzles, and vessels with tight internal clearances.

With sub-millimeter accuracy of ±0.5mm and a minimal dead zone of just 50mm, the SMRD-120G excels in precision applications where every millimeter matters. The ultra-high frequency enables excellent reflection from low dielectric media, making it suitable for materials that are challenging for conventional radar sensors.

The compact lens antenna design is ideal for hygienic applications in the food, beverage, and pharmaceutical industries, where flush mounting and cleanability are essential requirements. The IP68 protection rating ensures reliable operation even in washdown environments.`,
      },
      {
        slug: 'guided-wave-radar-level-transmitter',
        name: 'Guided Wave Radar Level Transmitter',
        model: 'SMGW-26G',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&h=400&fit=crop',
        specs: [
          { label: 'Technology', value: 'TDR / Guided Wave Radar' },
          { label: 'Measuring Range', value: '0.3 - 35 m (rod/cable)' },
          { label: 'Accuracy', value: '±3 mm' },
          { label: 'Output Signal', value: '4-20mA / HART / RS485 Modbus' },
          { label: 'Process Temperature', value: '-40 to +350 °C' },
          { label: 'Process Pressure', value: '-0.1 to 40 MPa' },
          { label: 'Protection Grade', value: 'IP67' },
          { label: 'Probe Type', value: 'Rod / Cable / Coaxial' },
          { label: 'Probe Material', value: '316L SS / PTFE coated' },
          { label: 'Housing Material', value: 'Aluminum / 316L SS' },
          { label: 'Power Supply', value: '24 VDC (18-36 VDC)' },
          { label: 'Certification', value: 'CE, RoHS, Ex ia IIC T6 (optional)' },
        ],
        features: [
          'TDR guided wave technology with direct contact measurement',
          'Unaffected by foam, vapor, and turbulence',
          'Excellent for low dielectric liquids and interface measurement',
          'Wide temperature range up to +350°C',
          'High pressure rating up to 40 MPa',
          'Rod, cable, and coaxial probe options for various applications',
          'Suitable for bypass chambers and stilling wells',
          'Optional high-temperature and high-pressure configurations',
        ],
        applications: ['Oil-water interface measurement', 'High temperature/pressure vessels', 'Bypass chambers', 'LPG and LNG storage', 'Steam boilers'],
        description: `The SMGW-26G Guided Wave Radar Level Transmitter uses Time Domain Reflectometry (TDR) technology, where a microwave pulse is guided along a probe that contacts the measured medium. This direct-contact approach makes it completely immune to surface conditions such as foam, vapor, and turbulence that can affect non-contact radar sensors.

Guided wave radar is the preferred choice for applications involving extreme process conditions — it handles temperatures up to +350°C and pressures up to 40 MPa, making it suitable for steam boilers, high-pressure reactors, and superheated liquid applications. It also excels at interface measurement, detecting the boundary between oil and water layers in separation tanks.

Our SMGW-26G offers multiple probe configurations: rigid rod probes for shorter ranges and clean liquids, flexible cable probes for tall tanks up to 35 meters, and coaxial probes for low dielectric fluids and interface applications.`,
      },
      {
        slug: '26ghz-pulse-radar-level-transmitter',
        name: '26GHz Pulse Radar Level Transmitter',
        model: 'SMPR-26G',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        specs: [
          { label: 'Frequency', value: '26 GHz (Pulse)' },
          { label: 'Measuring Range', value: '0.3 - 70 m' },
          { label: 'Accuracy', value: '±5 mm' },
          { label: 'Beam Angle', value: '8°' },
          { label: 'Output Signal', value: '4-20mA / HART / RS485 Modbus' },
          { label: 'Process Temperature', value: '-40 to +150 °C' },
          { label: 'Process Pressure', value: '-0.1 to 3.0 MPa' },
          { label: 'Protection Grade', value: 'IP67' },
          { label: 'Housing Material', value: 'Aluminum' },
          { label: 'Antenna Material', value: 'PTFE / 316L SS' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Cost-effective 26GHz pulse radar technology',
          'Reliable performance in standard industrial applications',
          'Measuring range up to 70 meters',
          'Simple commissioning and operation',
          'Good chemical resistance with PTFE antenna',
          'Proven technology with millions of installations worldwide',
          'Compact design with horn antenna options',
          'Low cost of ownership',
        ],
        applications: ['Storage tanks', 'Water treatment', 'Chemical processing', 'Bulk solids storage', 'General industrial'],
        description: `The SMPR-26G 26GHz Pulse Radar Level Transmitter is our cost-effective radar solution for standard industrial level measurement applications. Using proven pulse radar technology at 26GHz, it delivers reliable performance with excellent value for general-purpose applications where extreme precision is not required.

The 26GHz frequency provides a good balance of beam focusing and resistance to condensation, making it suitable for a wide range of liquid and solid applications. The modular horn antenna design allows antenna size selection based on the application range and tank connection requirements.

This transmitter is ideal for customers who need the benefits of non-contact radar measurement — reliability, low maintenance, and versatility — without the premium cost of 80GHz or 120GHz FMCW technology. It is widely used in water treatment plants, chemical storage facilities, and general manufacturing operations.`,
      },
    ],
  },

  'ultrasonic-level-sensors': {
    title: 'Ultrasonic Level Sensors',
    description: 'Versatile non-contact level measurement using ultrasonic technology. Cost-effective solution for liquids and solids in open and closed tanks, channels, and reservoirs.',
    icon: '🔊',
    seo: {
      title: 'Ultrasonic Level Sensor Manufacturer | Non-Contact Level Measurement',
      description: 'Professional ultrasonic level sensor manufacturer. Non-contact level measurement for water, wastewater, chemicals, and bulk solids. CE certified. Global shipping.',
    },
    items: [
      {
        slug: 'ultrasonic-level-transmitter',
        name: 'Ultrasonic Level Transmitter',
        model: 'SMUS-20T',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
        specs: [
          { label: 'Measuring Range', value: '0.3 - 20 m (liquid) / 0.3 - 10 m (solid)' },
          { label: 'Accuracy', value: '±0.2% of range' },
          { label: 'Frequency', value: '20-50 kHz' },
          { label: 'Beam Angle', value: '5-8°' },
          { label: 'Output Signal', value: '4-20mA / RS485 Modbus' },
          { label: 'Process Temperature', value: '-20 to +70 °C' },
          { label: 'Process Pressure', value: 'Atmospheric' },
          { label: 'Protection Grade', value: 'IP67' },
          { label: 'Housing Material', value: 'PP / Aluminum' },
          { label: 'Transducer Material', value: 'PVDF / PTFE' },
          { label: 'Power Supply', value: '24 VDC / 220 VAC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Non-contact measurement with no moving parts',
          'Cost-effective alternative to radar for clean applications',
          'Easy installation and simple configuration',
          'Built-in temperature compensation for accuracy',
          'Digital display with programming buttons',
          'Suitable for corrosive liquids with PVDF/PTFE transducer',
          'Fail-safe output options (3.9mA / 20.5mA / hold)',
          'False echo suppression for complex tank geometries',
        ],
        applications: ['Water and wastewater treatment', 'Water storage tanks', 'Chemical storage', 'Open channels and weirs', 'Fuel and diesel tanks'],
        description: `The SMUS-20T Ultrasonic Level Transmitter is our core ultrasonic level measurement product, offering reliable non-contact level measurement at an attractive price point. Using ultrasonic sound waves that reflect off the material surface, it calculates level based on the time-of-flight principle.

This technology is ideal for clean liquids and bulk solids in applications where process conditions are moderate. The built-in temperature sensor automatically compensates for sound velocity changes due to ambient temperature variations, ensuring consistent accuracy across the operating temperature range.

The SMUS-20T is available in multiple range configurations from 5 to 20 meters, with transducer options in PVDF for general chemical compatibility and PTFE for aggressive media. The 2-wire 4-20mA output with HART communication makes it compatible with virtually all industrial control systems.`,
      },
      {
        slug: 'ultrasonic-level-sensor-water-tank',
        name: 'Ultrasonic Water Tank Level Sensor',
        model: 'SMUS-10W',
        image: 'https://images.unsplash.com/photo-1581092921461-7d7c4a1e14e3?w=600&h=400&fit=crop',
        specs: [
          { label: 'Measuring Range', value: '0.15 - 10 m' },
          { label: 'Accuracy', value: '±0.25% of range' },
          { label: 'Frequency', value: '40-50 kHz' },
          { label: 'Output Signal', value: '4-20mA / RS485 / Relay' },
          { label: 'Process Temperature', value: '-20 to +60 °C' },
          { label: 'Protection Grade', value: 'IP65' },
          { label: 'Housing Material', value: 'ABS / PP' },
          { label: 'Power Supply', value: '24 VDC / 220 VAC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Compact and cost-effective design for water applications',
          'Integrated display for local reading',
          'Simple 2-wire or 4-wire connection',
          'Multiple output options including relay alarms',
          'Corrosion-resistant PP housing',
          'Quick and easy installation',
          'Low power consumption',
          'IP65 protection for outdoor installation',
        ],
        applications: ['Water tanks and reservoirs', 'Rainwater collection', 'Irrigation systems', 'Cooling towers', 'Swimming pools'],
        description: `The SMUS-10W is our specialized ultrasonic level sensor designed specifically for water tank and general water level monitoring applications. It combines essential level measurement features with an economical price point, making it ideal for water management projects where cost efficiency is a priority.

With a 10-meter maximum range, compact ABS/PP housing, and IP65 protection, the SMUS-10W is perfectly suited for outdoor water tank installations. The integrated relay outputs allow direct control of pumps and alarms without an external controller, simplifying system design and reducing installation costs.`,
      },
    ],
  },

  'pressure-sensors': {
    title: 'Pressure Sensors & Transmitters',
    description: 'High-precision pressure measurement instruments for industrial process control. Including pressure transmitters, differential pressure sensors, and submersible level transmitters.',
    icon: '⚡',
    seo: {
      title: 'Pressure Sensor & Transmitter Manufacturer | Industrial Pressure Measurement',
      description: 'Professional pressure sensor and transmitter manufacturer. 4-20mA pressure transducers, differential pressure sensors, submersible level transmitters. CE certified, OEM/ODM.',
    },
    items: [
      {
        slug: 'pressure-transmitter-4-20ma',
        name: 'Industrial Pressure Transmitter 4-20mA',
        model: 'SMPT-2088',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        specs: [
          { label: 'Pressure Range', value: '-0.1 to 0...100 MPa' },
          { label: 'Accuracy', value: '±0.1% FS / ±0.25% FS' },
          { label: 'Output Signal', value: '4-20mA / 0-10V / RS485' },
          { label: 'Process Connection', value: 'G1/4, G1/2, M20×1.5, 1/2 NPT, etc.' },
          { label: 'Process Temperature', value: '-40 to +125 °C' },
          { label: 'Sensor Type', value: 'Piezoresistive / Ceramic Capacitive' },
          { label: 'Diaphragm Material', value: '316L SS / Ceramic Al₂O₃ 96%' },
          { label: 'Housing Material', value: '316L SS / Aluminum' },
          { label: 'Protection Grade', value: 'IP65 / IP67' },
          { label: 'Power Supply', value: '24 VDC (12-36 VDC)' },
          { label: 'Certification', value: 'CE, RoHS, Ex d IIC T6 (optional)' },
        ],
        features: [
          'High accuracy ±0.1% or ±0.25% FS options available',
          'Wide pressure range coverage from vacuum to 100 MPa',
          '316L stainless steel or ceramic sensing element',
          'Compact and robust industrial design',
          'HART communication protocol support (optional)',
          'Temperature compensation for stable readings',
          'Explosion-proof version available for hazardous areas',
          'Custom pressure ranges and connections on request',
        ],
        applications: ['Hydraulic and pneumatic systems', 'Pump and compressor monitoring', 'Process control', 'Oil and gas pipelines', 'HVAC systems'],
        description: `The SMPT-2088 Industrial Pressure Transmitter is our versatile 4-20mA pressure measurement instrument, based on proven piezoresistive or ceramic capacitive sensing technology. It converts pressure into a standard 4-20mA analog signal for seamless integration with PLCs, DCS systems, and industrial controllers.

Available in gauge, absolute, and sealed gauge configurations, the SMPT-2088 covers pressure ranges from -0.1 MPa vacuum to 100 MPa high pressure. The 316L stainless steel wetted parts ensure compatibility with a wide range of fluids, while the compact design allows installation in space-constrained applications.

Accuracy options of ±0.1% or ±0.25% FS meet different application requirements and budget considerations. The optional HART communication enables remote configuration, diagnostics, and multi-variable data access without additional wiring.`,
      },
      {
        slug: 'differential-pressure-transmitter',
        name: 'Differential Pressure Transmitter',
        model: 'SMDP-3051',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&h=400&fit=crop',
        specs: [
          { label: 'DP Range', value: '0-0.1 kPa to 0-40 MPa' },
          { label: 'Accuracy', value: '±0.075% FS' },
          { label: 'Output Signal', value: '4-20mA / HART / RS485' },
          { label: 'Static Pressure', value: 'Up to 40 MPa' },
          { label: 'Process Connection', value: '1/4 NPT / Flange / Manifold' },
          { label: 'Diaphragm Material', value: '316L SS / Hastelloy C-276 / Tantalum' },
          { label: 'Process Temperature', value: '-40 to +120 °C' },
          { label: 'Protection Grade', value: 'IP67' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS, Ex d IIC T6 (optional)' },
        ],
        features: [
          'High accuracy ±0.075% for precision applications',
          'Wide turndown ratio up to 100:1',
          'Large LCD display with local configuration buttons',
          'HART communication for remote setup and diagnostics',
          'Multiple diaphragm material options for aggressive media',
          'Built-in square root extraction for flow measurement',
          'Explosion-proof design available',
          'Optional remote seal for high-temperature applications',
        ],
        applications: ['Flow measurement with orifice plates', 'Filter condition monitoring', 'Tank level measurement', 'Density measurement', 'Distillation columns'],
        description: `The SMDP-3051 Differential Pressure Transmitter is our high-precision instrument for measuring pressure differences in industrial processes. With ±0.075% FS accuracy and a turndown ratio up to 100:1, it is suitable for the most demanding applications including custody transfer flow measurement.

The SMDP-3051 is commonly paired with primary flow elements (orifice plates, venturi tubes, pitot tubes) for flow measurement of liquids, gases, and steam. It also serves as an accurate tank level measurement device through hydrostatic pressure measurement, and as a filter condition monitor by measuring the pressure drop across filter elements.

The large backlit LCD display and local pushbuttons allow field configuration without a communicator, while HART protocol enables full remote access to all parameters, diagnostics, and multi-variable data.`,
      },
      {
        slug: 'submersible-level-transmitter',
        name: 'Submersible Level Transmitter',
        model: 'SMSL-26',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
        specs: [
          { label: 'Level Range', value: '0-1m to 0-200m H₂O' },
          { label: 'Accuracy', value: '±0.25% FS' },
          { label: 'Output Signal', value: '4-20mA / RS485' },
          { label: 'Sensor Type', value: 'Piezoresistive silicon' },
          { label: 'Cable Material', value: 'PU / FEP / PE' },
          { label: 'Diaphragm Material', value: '316L SS' },
          { label: 'Housing Material', value: '316L SS' },
          { label: 'Protection Grade', value: 'IP68' },
          { label: 'Process Temperature', value: '0 to +50 °C' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'IP68 fully submersible design for continuous immersion',
          'Measuring ranges from 1m to 200m water column',
          'Built-in lightning and surge protection',
          'Vented cable for atmospheric pressure compensation',
          '316L stainless steel for corrosion resistance',
          'Compact diameter for narrow borehole installation',
          'Anti-clogging design with protective cap',
          'Long cable lengths up to 300m available',
        ],
        applications: ['Deep wells and boreholes', 'Groundwater monitoring', 'Rivers, lakes and reservoirs', 'Wastewater lift stations', 'Seawater level monitoring'],
        description: `The SMSL-26 Submersible Level Transmitter is designed for continuous liquid level measurement in deep wells, boreholes, tanks, and open water bodies. The transmitter is lowered into the liquid, and hydrostatic pressure is measured to determine the liquid level above the sensor.

With IP68 permanent immersion rating, 316L stainless steel construction, and a vented cable for barometric compensation, the SMSL-26 delivers reliable measurements even in harsh field conditions. Available in standard ranges from 1 meter to 200 meters of water column, it covers applications from shallow groundwater monitoring to deep well level measurement.

The submersible design makes it ideal for applications where top-mounted sensors are impractical — narrow boreholes, tanks without top access, and open water bodies where no mounting structure exists above the water surface.`,
      },
    ],
  },

  'distance-sensors': {
    title: 'Distance Sensors',
    description: 'High-precision non-contact distance measurement sensors using laser and ultrasonic technology. Ideal for industrial automation, positioning, and object detection applications.',
    icon: '📏',
    seo: {
      title: 'Distance Sensor Manufacturer | Laser & Ultrasonic Distance Measurement',
      description: 'Professional distance sensor manufacturer. Laser distance sensors, ultrasonic distance sensors, long-range industrial distance measurement. CE certified, OEM/ODM. Global shipping.',
    },
    items: [
      {
        slug: 'laser-distance-sensor',
        name: 'Laser Distance Sensor',
        model: 'SMLD-100',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        specs: [
          { label: 'Technology', value: 'Laser Time-of-Flight (ToF)' },
          { label: 'Measuring Range', value: '0.05 - 100 m (natural surface)' },
          { label: 'Accuracy', value: '±1 mm' },
          { label: 'Laser Class', value: 'Class 2 (eye-safe, 635nm red laser)' },
          { label: 'Output Signal', value: '4-20mA / RS232 / RS485 / SSI' },
          { label: 'Response Time', value: '< 10 ms' },
          { label: 'Operating Temperature', value: '-10 to +50 °C' },
          { label: 'Protection Grade', value: 'IP65' },
          { label: 'Housing Material', value: 'Aluminum' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Precision laser ToF measurement with ±1mm accuracy',
          '100-meter range on natural surfaces without reflector',
          'Fast response time < 10ms for dynamic measurements',
          'Multiple output interfaces for flexible integration',
          'Eye-safe Class 2 laser — no special safety precautions required',
          'Compact aluminum housing with IP65 protection',
          'Works on almost any surface: dark, bright, rough, smooth',
          'Heating option available for outdoor cold climate use',
        ],
        applications: ['Factory automation and positioning', 'Warehouse and logistics', 'Crane and hoist positioning', 'Fill level monitoring', 'Thickness measurement'],
        description: `The SMLD-100 Laser Distance Sensor uses advanced laser Time-of-Flight technology to deliver fast, accurate distance measurements across a 100-meter range on natural surfaces. Unlike sensors that require reflectors or targets, the SMLD-100 works on virtually any surface — dark, bright, rough, or smooth.

With ±1mm accuracy and sub-10ms response time, it is ideal for dynamic positioning applications in factory automation, crane positioning, robotic systems, and warehouse logistics. The eye-safe Class 2 red laser (635nm) eliminates the need for special safety equipment or operator training.

Multiple output interfaces — 4-20mA analog, RS232, RS485 Modbus, and SSI — provide flexible integration options for PLCs, industrial computers, and custom controllers. The compact aluminum housing with IP65 protection ensures reliable operation in industrial environments.`,
      },
      {
        slug: 'ultrasonic-distance-sensor',
        name: 'Ultrasonic Distance Sensor',
        model: 'SMUD-80',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&h=400&fit=crop',
        specs: [
          { label: 'Technology', value: 'Ultrasonic Time-of-Flight' },
          { label: 'Measuring Range', value: '0.3 - 8 m' },
          { label: 'Accuracy', value: '±0.5% of range' },
          { label: 'Frequency', value: '40-200 kHz' },
          { label: 'Output Signal', value: '4-20mA / 0-10V / RS485 / Switching' },
          { label: 'Operating Temperature', value: '-20 to +60 °C' },
          { label: 'Protection Grade', value: 'IP67' },
          { label: 'Housing Material', value: 'PBT / ABS' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Robust ultrasonic technology for industrial environments',
          'Unaffected by target color, transparency, or surface finish',
          'Works in dusty and humid environments',
          'Synchronization input for multiple sensor installations',
          'Teach-in buttons for easy setup',
          'Analog and digital outputs in one device',
          'Compact and lightweight design',
          'Excellent for transparent object detection',
        ],
        applications: ['Object detection and positioning', 'Fill level in small tanks', 'Transparent object detection', 'Stack height monitoring', 'Conveyor belt presence detection'],
        description: `The SMUD-80 Ultrasonic Distance Sensor provides reliable distance measurement and object detection for industrial automation applications. Using ultrasonic sound waves, it measures distance independent of target color, transparency, or surface reflectivity — properties that challenge optical sensors.

With its IP67-rated PBT/ABS housing and operating temperature range of -20 to +60°C, the SMUD-80 performs reliably in dusty, humid, and dirty industrial environments where optical sensors may fail. It is particularly effective for detecting transparent objects like glass bottles, clear plastic containers, and transparent films.

The built-in teach-in function allows fast configuration without a PC or additional equipment, while the synchronization input prevents cross-talk when multiple sensors are installed in close proximity.`,
      },
    ],
  },

  'environmental-sensors': {
    title: 'Environmental Sensors',
    description: 'Comprehensive environmental monitoring sensors for temperature, humidity, gas detection, and water quality. Essential instruments for environmental compliance and process optimization.',
    icon: '🌡️',
    seo: {
      title: 'Environmental Sensor Manufacturer | Temperature, Humidity, Gas & Water Quality',
      description: 'Professional environmental sensor manufacturer. Temperature sensors, humidity sensors, CO2 & gas detectors, water quality sensors. CE certified. OEM/ODM available.',
    },
    items: [
      {
        slug: 'temperature-humidity-transmitter',
        name: 'Temperature & Humidity Transmitter',
        model: 'SMTH-485',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
        specs: [
          { label: 'Temperature Range', value: '-40 to +125 °C' },
          { label: 'Temperature Accuracy', value: '±0.2 °C (0-70 °C)' },
          { label: 'Humidity Range', value: '0-100% RH' },
          { label: 'Humidity Accuracy', value: '±2% RH (10-90% RH)' },
          { label: 'Output Signal', value: 'RS485 Modbus / 4-20mA / 0-10V' },
          { label: 'Sensor Element', value: 'Sensirion / Swiss digital sensor' },
          { label: 'Response Time', value: '< 8s (τ63)' },
          { label: 'Protection Grade', value: 'IP65' },
          { label: 'Housing Material', value: 'PC / Aluminum' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'Combined temperature and humidity in one compact sensor',
          'Swiss-made Sensirion sensor element for long-term stability',
          'RS485 Modbus RTU output for digital integration',
          'Wall-mount, duct-mount, and remote probe versions available',
          'LCD display option for local reading',
          'Excellent long-term stability with minimal drift',
          'Wide operating range for diverse applications',
          'IP65 protection for harsh environments',
        ],
        applications: ['HVAC and building automation', 'Greenhouses and agriculture', 'Cold chain monitoring', 'Cleanrooms and laboratories', 'Server rooms and data centers'],
        description: `The SMTH-485 Temperature and Humidity Transmitter combines precision temperature and relative humidity measurement in a single compact instrument. Using a Swiss-made Sensirion digital sensor element, it delivers industry-leading accuracy and long-term stability.

Available in wall-mount, duct-mount, and remote probe configurations, the SMTH-485 adapts to various installation requirements. The RS485 Modbus RTU interface allows easy integration into building management systems, PLC networks, and IoT platforms. Optional 4-20mA or 0-10V analog outputs are available for traditional control systems.

The sensor element features a factory-calibrated digital output with excellent long-term stability and minimal drift, ensuring reliable measurements over years of operation without recalibration. The IP65-rated housing protects against dust and water ingress, making it suitable for outdoor agricultural and industrial applications.`,
      },
      {
        slug: 'co2-gas-sensor',
        name: 'CO₂ Gas Sensor / Transmitter',
        model: 'SMGS-CO2',
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&h=400&fit=crop',
        specs: [
          { label: 'Gas Type', value: 'Carbon Dioxide (CO₂)' },
          { label: 'Detection Principle', value: 'NDIR (Non-Dispersive Infrared)' },
          { label: 'Measuring Range', value: '0-2000 / 0-5000 / 0-10000 ppm' },
          { label: 'Accuracy', value: '±50 ppm + 3% of reading' },
          { label: 'Output Signal', value: 'RS485 Modbus / 4-20mA / Relay' },
          { label: 'Operating Temperature', value: '0 to +50 °C' },
          { label: 'Protection Grade', value: 'IP30 (indoor) / IP65 (duct)' },
          { label: 'Power Supply', value: '24 VDC' },
          { label: 'Certification', value: 'CE, RoHS' },
        ],
        features: [
          'NDIR sensor technology with automatic baseline correction',
          'Long sensor life > 10 years with minimal maintenance',
          'Three relay outputs for alarm and ventilation control',
          'Large LCD display with CO₂, temperature, and humidity',
          'Wall-mount and duct-mount versions available',
          'ABC (Automatic Baseline Correction) algorithm',
          'Optional temperature and humidity measurement',
          'Low power consumption',
        ],
        applications: ['Indoor air quality monitoring', 'HVAC demand-controlled ventilation', 'Greenhouses and agriculture', 'Office and classroom IAQ', 'Parking garage ventilation'],
        description: `The SMGS-CO2 Carbon Dioxide Gas Sensor uses proven NDIR (Non-Dispersive Infrared) technology to provide accurate CO₂ concentration measurements for indoor air quality, building ventilation control, and environmental monitoring applications.

The self-calibrating ABC (Automatic Baseline Correction) algorithm automatically compensates for sensor drift, maintaining accuracy over years of continuous operation with minimal maintenance. The sensor's expected lifetime exceeds 10 years under normal operating conditions.

Three independent relay outputs enable direct control of ventilation fans, damper actuators, and alarm indicators without an external controller. The large backlit LCD simultaneously displays CO₂ concentration, temperature, and humidity (optional), providing a complete indoor environment overview at a glance.`,
      },
    ],
  },
}

export default products
