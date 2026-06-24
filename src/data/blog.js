const blogPosts = [
  {
    slug: 'radar-vs-ultrasonic-level-measurement',
    title: 'Radar vs Ultrasonic Level Measurement: Which Technology to Choose?',
    category: 'Level Measurement',
    author: 'Sensor Measure Team',
    date: '2025-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=400&fit=crop',
    excerpt: 'Confused between radar and ultrasonic level sensors? This comprehensive comparison covers working principles, accuracy, cost, and best use cases to help you make the right choice.',
    tags: ['Radar Level Transmitter', 'Ultrasonic Level Sensor', 'Level Measurement', 'Industrial Sensors'],
    seo: {
      title: 'Radar vs Ultrasonic Level Measurement: Complete Comparison Guide',
      description: 'Compare radar vs ultrasonic level sensors: technology, accuracy, price, pros & cons. Learn which level measurement technology is best for your application.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'When it comes to non-contact level measurement, two technologies dominate the industrial market: radar and ultrasonic. Both are widely used, both are proven, and both have their sweet spots. But choosing the wrong one can lead to inaccurate readings, frequent maintenance, or unnecessary cost. In this guide, we break down the key differences to help you make an informed decision.'
      },
      {
        type: 'heading',
        text: 'How They Work: The Fundamental Difference'
      },
      {
        type: 'paragraph',
        text: 'Ultrasonic level sensors work by emitting high-frequency sound waves (typically 20-200 kHz) from a transducer toward the material surface. The sound wave reflects back, and the sensor calculates distance based on the time-of-flight principle — the same way bats navigate. The key limitation is that sound waves need a medium to travel through (air or gas), and their speed varies with temperature and composition of that medium.'
      },
      {
        type: 'paragraph',
        text: 'Radar level transmitters, on the other hand, use electromagnetic microwave signals. FMCW (Frequency Modulated Continuous Wave) radar emits a continuous signal with varying frequency, while pulse radar sends short microwave pulses. Because electromagnetic waves travel at the speed of light and are unaffected by the medium they pass through, radar is fundamentally more robust in challenging process conditions.'
      },
      {
        type: 'heading',
        text: 'Accuracy Comparison'
      },
      {
        type: 'paragraph',
        text: 'Radar level transmitters generally offer superior accuracy. Modern 80GHz FMCW radar sensors achieve ±1 mm accuracy, while 120GHz models reach ±0.5 mm. Pulse radar at 26GHz typically delivers ±5 mm. Ultrasonic sensors, by comparison, usually offer ±0.2% of the measuring range — which means on a 20-meter range, the error can be ±40 mm.'
      },
      {
        type: 'paragraph',
        text: 'This accuracy difference becomes critical in applications like custody transfer, inventory management, or precision dosing, where every millimeter matters.'
      },
      {
        type: 'heading',
        text: 'Performance in Challenging Conditions'
      },
      {
        type: 'paragraph',
        text: 'This is where radar truly outshines ultrasonic technology. Radar is virtually immune to:'
      },
      {
        type: 'list',
        items: [
          'Dust and powder in the air (common in silos and cement plants)',
          'Steam and condensation (common in boilers and hot processes)',
          'Foam on the liquid surface (common in chemical and wastewater applications)',
          'Temperature gradients and pressure variations',
          'Vapor layers with different gas compositions',
        ]
      },
      {
        type: 'paragraph',
        text: 'Ultrasonic sensors struggle in all these conditions. Dust absorbs sound waves, steam causes false reflections, foam disrupts the echo, and temperature changes affect sound velocity (though built-in temperature compensation helps). If your application involves any of these conditions, radar is the clear winner.'
      },
      {
        type: 'heading',
        text: 'Cost Considerations'
      },
      {
        type: 'paragraph',
        text: 'Ultrasonic level sensors are significantly more affordable than radar transmitters. A basic ultrasonic level transmitter may cost 50-70% less than an equivalent 80GHz FMCW radar sensor. For clean, simple applications like water tank level monitoring, open channel flow measurement, or basic storage tank level — ultrasonic is the more cost-effective choice.'
      },
      {
        type: 'paragraph',
        text: 'However, when you factor in the total cost of ownership — including maintenance, downtime from sensor failures, and the cost of inaccurate measurements — radar often proves more economical in demanding applications over the long term.'
      },
      {
        type: 'heading',
        text: 'When to Choose Ultrasonic'
      },
      {
        type: 'list',
        items: [
          'Water and wastewater treatment (clean liquids, atmospheric pressure)',
          'Open channels and weirs for flow measurement',
          'Storage tanks at ambient temperature and atmospheric pressure',
          'Budget-constrained projects with moderate accuracy requirements',
          'Applications where the air space above the material is clean and stable',
        ]
      },
      {
        type: 'heading',
        text: 'When to Choose Radar'
      },
      {
        type: 'list',
        items: [
          'Tanks with dust, steam, foam, or condensation',
          'High-temperature or high-pressure processes',
          'Tanks with internal obstructions (agitators, heating coils)',
          'Precision measurement requiring ±1-5 mm accuracy',
          'Hydrocarbon and solvent storage (flammable vapors)',
          'Bulk solids in tall silos (cement, grain, aggregates)',
          'Applications where maintenance access is difficult',
        ]
      },
      {
        type: 'heading',
        text: 'Summary: Making the Right Choice'
      },
      {
        type: 'paragraph',
        text: 'The decision between radar and ultrasonic comes down to your application conditions, accuracy requirements, and budget. For clean, simple, cost-sensitive applications, ultrasonic is perfectly adequate. For challenging industrial environments where reliability and accuracy are paramount, radar — especially 80GHz FMCW — is the technology of choice.'
      },
      {
        type: 'paragraph',
        text: 'At Sensor Measure, we manufacture both radar and ultrasonic level sensors, so we can give you honest, unbiased advice based on your specific needs. Contact us at Freya@sensor-measure.com for a personalized recommendation.'
      },
    ]
  },
  {
    slug: 'how-to-choose-pressure-transmitter',
    title: 'How to Choose the Right Pressure Transmitter for Your Application',
    category: 'Pressure Measurement',
    author: 'Sensor Measure Team',
    date: '2025-01-20',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop',
    excerpt: 'From pressure range and accuracy to wetted materials and output signals, this guide covers everything you need to know when selecting an industrial pressure transmitter.',
    tags: ['Pressure Transmitter', 'Pressure Sensor', '4-20mA', 'Industrial Measurement'],
    seo: {
      title: 'How to Choose a Pressure Transmitter: Complete Selection Guide',
      description: 'Complete guide to selecting industrial pressure transmitters. Covers pressure range, accuracy, output signals, materials, certifications, and application considerations.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Selecting the right pressure transmitter is critical for process safety, measurement accuracy, and long-term reliability. With dozens of specifications and options to consider, the selection process can feel overwhelming. This guide breaks down the key factors to help you choose with confidence.'
      },
      {
        type: 'heading',
        text: '1. Determine Your Pressure Type'
      },
      {
        type: 'paragraph',
        text: 'First, identify what type of pressure you need to measure:'
      },
      {
        type: 'list',
        items: [
          'Gauge pressure: Measured relative to atmospheric pressure (most common)',
          'Absolute pressure: Measured relative to perfect vacuum (for low-pressure and vacuum applications)',
          'Differential pressure: The difference between two pressure points (for flow and level measurement)',
          'Sealed gauge: Referenced to a sealed chamber at atmospheric pressure (for high-pressure applications)',
        ]
      },
      {
        type: 'heading',
        text: '2. Define the Pressure Range'
      },
      {
        type: 'paragraph',
        text: 'Choose a transmitter with a range that comfortably covers your operating pressure. As a rule of thumb, the normal operating pressure should be in the middle 60-70% of the transmitter range. This ensures accuracy while leaving headroom for pressure spikes. For example, if your normal operating pressure is 6 MPa, a 0-10 MPa transmitter would be appropriate.'
      },
      {
        type: 'paragraph',
        text: 'Also consider the maximum possible pressure (including spikes and water hammer effects). The transmitter burst pressure rating should exceed this value with a safety margin.'
      },
      {
        type: 'heading',
        text: '3. Select the Accuracy Class'
      },
      {
        type: 'paragraph',
        text: 'Pressure transmitter accuracy is typically specified as a percentage of full scale (FS):'
      },
      {
        type: 'list',
        items: [
          '±0.1% FS: High-precision applications (custody transfer, calibration labs)',
          '±0.25% FS: Standard industrial applications (most common)',
          '±0.5% FS: General-purpose applications with moderate requirements',
          '±1.0% FS: Basic monitoring where precision is not critical',
        ]
      },
      {
        type: 'paragraph',
        text: 'Remember that accuracy is specified at reference conditions. In real-world applications, temperature effects and long-term stability add to the total measurement uncertainty.'
      },
      {
        type: 'heading',
        text: '4. Choose the Output Signal'
      },
      {
        type: 'paragraph',
        text: 'The 4-20mA two-wire current loop is the industry standard for pressure transmitters, offering excellent noise immunity and long-distance transmission (up to several kilometers). Other options include:'
      },
      {
        type: 'list',
        items: [
          '4-20mA + HART: Adds digital communication for configuration and diagnostics without extra wiring',
          '0-10V: Voltage output for short-distance applications (less noise-immune than 4-20mA)',
          'RS485 Modbus RTU: Digital output for PLC and IoT integration',
          'IO-Link: For industrial automation networks',
        ]
      },
      {
        type: 'heading',
        text: '5. Consider Wetted Materials'
      },
      {
        type: 'paragraph',
        text: 'The diaphragm and process connection materials must be compatible with the measured medium. The most common options are:'
      },
      {
        type: 'list',
        items: [
          '316L Stainless Steel: Good general-purpose choice for water, air, oils, and mild chemicals',
          'Ceramic (Al2O3 96%): Excellent for aggressive chemicals, high temperature, and vacuum applications',
          'Hastelloy C-276: For highly corrosive media (acids, chlorides)',
          'Tantalum: For extreme chemical resistance (hydrochloric acid, sulfuric acid)',
        ]
      },
      {
        type: 'heading',
        text: '6. Process Connection and Temperature'
      },
      {
        type: 'paragraph',
        text: 'Common process connections include G1/4, G1/2, M20x1.5, and 1/2 NPT. Ensure the connection matches your piping standard. Also verify that the transmitter operating temperature range covers your process temperature. For high-temperature media (above 125C), consider a transmitter with a cooling element or a remote diaphragm seal system.'
      },
      {
        type: 'heading',
        text: '7. Certifications for Hazardous Areas'
      },
      {
        type: 'paragraph',
        text: 'If the transmitter will be installed in a hazardous (classified) area with flammable gases or dust, you need an explosion-proof certified transmitter. Common certifications include ATEX, IECEx, and UL. Our SMPT-2088 pressure transmitter is available with Ex d IIC T6 certification for Zone 1 hazardous areas.'
      },
      {
        type: 'heading',
        text: 'Summary'
      },
      {
        type: 'paragraph',
        text: 'Choosing the right pressure transmitter requires careful consideration of pressure type, range, accuracy, output, materials, and certifications. When in doubt, consult with the manufacturer — a good supplier will help you select the optimal configuration for your application. Contact us at Freya@sensor-measure.com for expert guidance.'
      },
    ]
  },
  {
    slug: '80ghz-fmcw-radar-technology-guide',
    title: '80GHz FMCW Radar Level Transmitter: The Complete Technology Guide',
    category: 'Radar Technology',
    author: 'Sensor Measure Team',
    date: '2025-01-25',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=400&fit=crop',
    excerpt: 'Discover why 80GHz FMCW radar technology is revolutionizing industrial level measurement. Learn about beam angle, frequency, accuracy, and applications in this in-depth guide.',
    tags: ['80GHz Radar', 'FMCW', 'Radar Level Transmitter', 'Level Measurement'],
    seo: {
      title: '80GHz FMCW Radar Level Transmitter: Complete Technology Guide',
      description: 'Complete guide to 80GHz FMCW radar level transmitters. Learn about beam angle, frequency, accuracy, advantages over 26GHz radar, and industrial applications.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'The 80GHz FMCW radar level transmitter represents a significant leap forward in industrial level measurement technology. Since its introduction, it has rapidly replaced older 26GHz pulse radar sensors in many applications. But what makes 80GHz so special, and is it worth the investment? This guide explains everything you need to know.'
      },
      {
        type: 'heading',
        text: 'Understanding FMCW Technology'
      },
      {
        type: 'paragraph',
        text: 'FMCW stands for Frequency Modulated Continuous Wave. Unlike pulse radar, which sends short bursts of energy and measures the time-of-flight, FMCW radar continuously transmits a signal whose frequency changes linearly over time. When the reflected signal returns, it is mixed with the currently transmitted signal, creating a beat frequency that is directly proportional to the distance.'
      },
      {
        type: 'paragraph',
        text: 'This continuous-wave approach offers several advantages over pulse radar: higher accuracy, better signal-to-noise ratio, and the ability to measure very short distances with minimal dead zone. FMCW is the same technology used in automotive adaptive cruise control systems.'
      },
      {
        type: 'heading',
        text: 'Why 80GHz? The Frequency Advantage'
      },
      {
        type: 'paragraph',
        text: 'The frequency of a radar signal determines two critical properties: beam angle and antenna size. Higher frequency means a narrower beam for the same antenna size, or equivalently, a smaller antenna for the same beam angle.'
      },
      {
        type: 'list',
        items: [
          '26GHz radar: 8-10 degree beam angle, requires larger horn antenna',
          '80GHz radar: 3 degree beam angle, compact lens antenna fits in DN40 nozzles',
          '120GHz radar: 1.5 degree beam angle, fits in even smaller nozzles (DN25)',
        ]
      },
      {
        type: 'paragraph',
        text: 'The ultra-narrow 3-degree beam of 80GHz radar is a game-changer. It means the radar signal can avoid internal tank obstructions like agitators, heating coils, ladders, and inlet pipes. This allows installation in tanks where older radar sensors simply could not work due to interference from internal structures.'
      },
      {
        type: 'heading',
        text: 'Key Advantages of 80GHz FMCW Radar'
      },
      {
        type: 'paragraph',
        text: 'Let us examine the specific benefits that make 80GHz FMCW the preferred choice for demanding applications:'
      },
      {
        type: 'list',
        items: [
          'Superior accuracy: ±1 mm compared to ±5 mm for 26GHz pulse radar',
          'Narrow beam: 3-degree beam angle avoids internal tank obstructions',
          'Compact size: Small antenna fits in standard DN40 and larger nozzles',
          'Long range: Measuring range up to 120 meters for tall silos',
          'Immunity to process conditions: Unaffected by dust, steam, foam, condensation',
          'Low dielectric media: Better reflection from low dielectric materials (plastics, powders)',
          'Bluetooth configuration: Wireless setup via smartphone app',
        ]
      },
      {
        type: 'heading',
        text: 'Applications Where 80GHz Excels'
      },
      {
        type: 'paragraph',
        text: 'The 80GHz FMCW radar is particularly valuable in applications that challenge other measurement technologies:'
      },
      {
        type: 'list',
        items: [
          'Cement and aggregate silos with heavy dust',
          'Chemical storage tanks with corrosive vapors',
          'Steam boilers and condensate tanks',
          'Plastic pellet and powder silos (low dielectric media)',
          'Tall storage silos (up to 120 meters)',
          'Tanks with agitators or internal heating coils',
          'Food and beverage processing (hygienic versions)',
        ]
      },
      {
        type: 'heading',
        text: '80GHz vs 26GHz: When Does It Matter?'
      },
      {
        type: 'paragraph',
        text: 'For simple, clean liquid applications at moderate temperatures and atmospheric pressure, a 26GHz pulse radar (like our SMPR-26G) may be perfectly adequate and more cost-effective. However, for any application involving dust, steam, foam, internal obstructions, long range, or low-dielectric media, the 80GHz FMCW radar delivers dramatically better performance and reliability.'
      },
      {
        type: 'paragraph',
        text: 'The price gap between 80GHz and 26GHz has narrowed significantly in recent years as 80GHz technology has matured and gained volume. For many industrial applications, the performance advantage of 80GHz now justifies the modest price premium.'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'The 80GHz FMCW radar level transmitter is not just an incremental improvement — it is a fundamental technology shift that solves many of the limitations that have plagued radar level measurement for decades. For new installations or replacements of unreliable sensors, 80GHz FMCW is the technology of choice for most industrial applications.'
      },
      {
        type: 'paragraph',
        text: 'Our SMRD-80G 80GHz FMCW Radar Level Transmitter offers all the advantages described in this guide at a competitive factory-direct price. Contact us at Freya@sensor-measure.com for specifications, pricing, and application assistance.'
      },
    ]
  },
  {
    slug: 'pressure-transducer-4-20ma-guide',
    title: 'Pressure Transducer 4-20mA: The Complete Integration Guide',
    category: 'Pressure Measurement',
    author: 'Sensor Measure Team',
    date: '2025-02-01',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop',
    excerpt: 'Learn everything about 4-20mA pressure transducers: wiring, scaling, calibration, and common troubleshooting tips for seamless PLC integration.',
    tags: ['Pressure Transducer', '4-20mA', 'PLC Integration', 'Industrial Automation'],
    seo: {
      title: 'Pressure Transducer 4-20mA: Complete Wiring & Integration Guide',
      description: 'Complete guide to 4-20mA pressure transducers. Learn wiring, scaling, calibration, troubleshooting, and PLC integration for industrial pressure measurement.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'The 4-20mA current loop is the backbone of industrial process measurement. Despite being decades old, it remains the most reliable and widely used method for transmitting analog sensor signals. This guide covers everything you need to know about integrating a 4-20mA pressure transducer into your control system.'
      },
      {
        type: 'heading',
        text: 'Why 4-20mA?'
      },
      {
        type: 'paragraph',
        text: 'The 4-20mA current loop offers several advantages over voltage signals:'
      },
      {
        type: 'list',
        items: [
          'Noise immunity: Current signals are far less susceptible to electromagnetic interference than voltage signals',
          'Long-distance transmission: 4-20mA can be transmitted over several kilometers without signal degradation',
          'Wire-break detection: A 0mA reading immediately indicates a broken wire or power failure',
          'Two-wire simplicity: Power and signal share the same two wires, reducing installation cost',
          'Universal compatibility: Virtually all PLCs, DCS systems, and indicators support 4-20mA inputs',
        ]
      },
      {
        type: 'heading',
        text: 'Wiring a 4-20mA Pressure Transducer'
      },
      {
        type: 'paragraph',
        text: 'A two-wire 4-20mA pressure transducer is connected in series with the power supply and the measuring circuit. The transducer regulates the current in the loop between 4mA (at zero pressure) and 20mA (at full-scale pressure). The PLC analog input typically contains a precision resistor (often 250 ohms) that converts the current to a voltage (1-5V for 4-20mA) for the ADC to read.'
      },
      {
        type: 'paragraph',
        text: 'Typical wiring: 24VDC positive terminal connects to the transducer positive terminal. The transducer negative terminal connects to the PLC analog input positive. The PLC analog input negative connects to the 24VDC negative terminal. Always check your PLC input module specifications — some require external loop power, others provide it internally.'
      },
      {
        type: 'heading',
        text: 'Signal Scaling'
      },
      {
        type: 'paragraph',
        text: 'To convert the 4-20mA signal to engineering units (pressure), you need to know the transducer range. For example, a 0-10 MPa transducer outputs:'
      },
      {
        type: 'list',
        items: [
          '4mA = 0 MPa (0% of range)',
          '8mA = 2.5 MPa (25% of range)',
          '12mA = 5.0 MPa (50% of range)',
          '16mA = 7.5 MPa (75% of range)',
          '20mA = 10.0 MPa (100% of range)',
        ]
      },
      {
        type: 'paragraph',
        text: 'In your PLC program, scale the raw analog input (typically 0-32767 or 0-27648 depending on the PLC) to the 4-20mA range first, then to the engineering units. Most PLCs have built-in scaling blocks (SCP in Allen-Bradley, NORM_X and SCALE_X in Siemens) for this purpose.'
      },
      {
        type: 'heading',
        text: 'Calibration and Verification'
      },
      {
        type: 'paragraph',
        text: 'After installation, verify the transducer calibration using a calibrated pressure source. Apply zero pressure and check that the output reads 4mA. Apply full-scale pressure and verify 20mA output. If there is a significant offset, check the transducer zero and span adjustments (if available) or contact the manufacturer.'
      },
      {
        type: 'paragraph',
        text: 'For critical applications, a 5-point calibration check (0%, 25%, 50%, 75%, 100%) is recommended. Document the results for future reference and traceability.'
      },
      {
        type: 'heading',
        text: 'Common Troubleshooting'
      },
      {
        type: 'list',
        items: [
          'Output stuck at 0mA: Check wiring continuity, power supply voltage, and loop resistance',
          'Output stuck at 4mA: Verify pressure is actually applied; check for blocked impulse line',
          'Output stuck at 20mA or higher: Pressure exceeds range, or transducer is faulty',
          'Erratic readings: Check for loose connections, ground loops, or electromagnetic interference',
          'Inaccurate readings: Check calibration, temperature effects, and mounting position',
        ]
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'The 4-20mA pressure transducer remains the gold standard for industrial pressure measurement. Proper wiring, scaling, and calibration ensure accurate and reliable measurements for years of service. Our SMPT-2088 pressure transmitter offers ±0.1% FS accuracy with 4-20mA output and optional HART communication. Contact us at Freya@sensor-measure.com for more information.'
      },
    ]
  },
  {
    slug: 'ultrasonic-level-sensor-installation-guide',
    title: 'Ultrasonic Level Sensor Installation: 10 Best Practices',
    category: 'Level Measurement',
    author: 'Sensor Measure Team',
    date: '2025-02-05',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581092921461-7d7c4a1e14e3?w=800&h=400&fit=crop',
    excerpt: 'Proper installation is critical for ultrasonic level sensor accuracy. Follow these 10 best practices to ensure reliable, long-term performance.',
    tags: ['Ultrasonic Level Sensor', 'Installation', 'Level Measurement', 'Best Practices'],
    seo: {
      title: 'Ultrasonic Level Sensor Installation: 10 Best Practices Guide',
      description: 'Learn the 10 best practices for installing ultrasonic level sensors. Covering mounting, positioning, dead zone, false echo suppression, and maintenance tips.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Even the best ultrasonic level sensor will perform poorly if installed incorrectly. Unlike radar sensors, ultrasonic technology is sensitive to mounting position, air temperature, and physical obstructions. Follow these 10 best practices to get the most from your ultrasonic level sensor.'
      },
      {
        type: 'heading',
        text: '1. Mount Above the Maximum Level'
      },
      {
        type: 'paragraph',
        text: 'The sensor must be mounted high enough that the maximum material level never enters the beam path dead zone. The dead zone (typically 0.3-0.5 meters) is the area directly below the sensor where measurements are unreliable. Check the sensor specification for the exact dead zone value.'
      },
      {
        type: 'heading',
        text: '2. Position Away from Inlets and Outlets'
      },
      {
        type: 'paragraph',
        text: 'Avoid mounting the sensor directly above fill inlets, discharge outlets, or agitators. The turbulence and surface disturbance from these will create false reflections and erratic readings. Ideally, position the sensor at least one-third of the tank radius away from the center.'
      },
      {
        type: 'heading',
        text: '3. Ensure the Beam Path Is Clear'
      },
      {
        type: 'paragraph',
        text: 'The ultrasonic beam (typically 5-8 degrees) must have a clear path to the material surface. Check for internal tank structures like ladders, heating coils, baffles, and support brackets that could intercept the beam. Use the beam angle and mounting height to calculate the beam diameter at the surface.'
      },
      {
        type: 'heading',
        text: '4. Mount Perpendicular to the Surface'
      },
      {
        type: 'paragraph',
        text: 'The sensor face must be parallel to the material surface for proper echo reflection. A tilted sensor will reflect the sound wave away from the transducer, resulting in weak or lost echoes. Use a leveling bubble during installation to ensure perpendicular mounting.'
      },
      {
        type: 'heading',
        text: '5. Use the Right Mounting Hardware'
      },
      {
        type: 'paragraph',
        text: 'Use a mounting bracket or flange that allows slight angular adjustment for leveling. Avoid rigid mounting that cannot be adjusted. For tall tanks with temperature gradients, consider a stilling well to guide the ultrasonic signal and eliminate side-wall reflections.'
      },
      {
        type: 'heading',
        text: '6. Configure False Echo Suppression'
      },
      {
        type: 'paragraph',
        text: 'Most modern ultrasonic sensors have a false echo mapping feature. During commissioning, run this function with the tank empty to map and suppress fixed false echoes from internal structures. This dramatically improves measurement reliability in complex tanks.'
      },
      {
        type: 'heading',
        text: '7. Account for Temperature Effects'
      },
      {
        type: 'paragraph',
        text: 'Sound velocity changes with temperature (approximately 0.17% per degree C). The built-in temperature sensor compensates for this, but rapid temperature changes or large gradients can still cause errors. For tanks with significant temperature variations, consider a radar sensor instead.'
      },
      {
        type: 'heading',
        text: '8. Avoid Foam and Condensation'
      },
      {
        type: 'paragraph',
        text: 'Foam absorbs ultrasonic waves, and condensation on the sensor face disrupts the signal. If foam is present, use a stilling well or switch to radar technology. For condensation-prone environments, mount the sensor slightly tilted (2-3 degrees) so condensation runs off, or select a sensor with a self-cleaning transducer design.'
      },
      {
        type: 'heading',
        text: '9. Provide Proper Cable Protection'
      },
      {
        type: 'paragraph',
        text: 'Use weatherproof cable glands and route cables through conduit in harsh environments. Avoid running signal cables alongside high-voltage power lines to prevent electromagnetic interference. For outdoor installations, protect the cable from UV damage with UV-resistant conduit.'
      },
      {
        type: 'heading',
        text: '10. Document and Maintain'
      },
      {
        type: 'paragraph',
        text: 'Record the installation details: mounting height, tank dimensions, configured parameters, and false echo map. Schedule periodic inspection to clean the sensor face and verify calibration. A clean sensor face is essential for reliable ultrasonic measurement.'
      },
      {
        type: 'heading',
        text: 'Conclusion'
      },
      {
        type: 'paragraph',
        text: 'Proper installation is just as important as selecting the right sensor. By following these best practices, you can ensure years of reliable service from your ultrasonic level sensor. For application-specific advice, contact us at Freya@sensor-measure.com — our engineering team is ready to help.'
      },
    ]
  },
  {
    slug: 'guided-wave-radar-interface-measurement',
    title: 'Guided Wave Radar for Oil-Water Interface Measurement: Application Guide',
    category: 'Radar Technology',
    author: 'Sensor Measure Team',
    date: '2025-02-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=400&fit=crop',
    excerpt: 'Guided wave radar is the most reliable technology for oil-water interface measurement. Learn how it works, probe selection, and installation tips for accurate results.',
    tags: ['Guided Wave Radar', 'Interface Measurement', 'Oil-Water Interface', 'TDR'],
    seo: {
      title: 'Guided Wave Radar Oil-Water Interface Measurement Guide',
      description: 'Complete guide to using guided wave radar for oil-water interface measurement. Learn TDR technology, probe selection, installation, and calibration tips.',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Oil-water interface measurement is one of the most challenging applications in level measurement. The ability to accurately detect the boundary between two liquids of different densities is critical in oil production, refinery separation tanks, and wastewater treatment. Guided wave radar (GWR) has emerged as the most reliable technology for this application. Here is why.'
      },
      {
        type: 'heading',
        text: 'The Interface Measurement Challenge'
      },
      {
        type: 'paragraph',
        text: 'In a typical oil-water separator, three distinct layers exist: gas (air) at the top, oil in the middle, and water at the bottom. Measuring the oil-water interface requires a sensor that can detect not just one surface, but two — the top surface of the oil and the boundary between oil and water.'
      },
      {
        type: 'paragraph',
        text: 'Traditional technologies struggle with this. Float-based sensors are mechanical and prone to failure. Capacitance probes are affected by emulsion layers. Ultrasonic sensors cannot see through the oil layer. Only guided wave radar can reliably measure both the total level and the interface level simultaneously.'
      },
      {
        type: 'heading',
        text: 'How Guided Wave Radar Works'
      },
      {
        type: 'paragraph',
        text: 'Guided wave radar uses Time Domain Reflectometry (TDR). A microwave pulse is generated and guided along a probe (rod or cable) that extends into the liquid. When the pulse encounters a change in dielectric constant — such as at the air-oil interface or the oil-water interface — part of the energy is reflected back. The sensor measures the time of each reflection to determine the distance to each interface.'
      },
      {
        type: 'paragraph',
        text: 'The key to interface measurement is the dielectric constant difference. Air has a dielectric constant of 1, oil typically 2-3, and water approximately 80. The large difference between oil and water creates a strong, easily detectable reflection at the interface.'
      },
      {
        type: 'heading',
        text: 'Probe Selection for Interface Measurement'
      },
      {
        type: 'paragraph',
        text: 'Choosing the right probe is critical for reliable interface measurement:'
      },
      {
        type: 'list',
        items: [
          'Coaxial probe: Best for interface measurement due to focused signal, but limited to clean liquids (no solids)',
          'Twin rod (parallel rod) probe: Good for interface measurement with some solids tolerance',
          'Single rod probe: Less ideal for interface measurement, better for simple level',
          'Cable probe: For deep tanks (up to 35 meters), but less effective for interface measurement',
        ]
      },
      {
        type: 'paragraph',
        text: 'For most oil-water interface applications, a coaxial or twin rod probe is recommended. The coaxial probe provides the strongest interface reflection but requires the liquid to be free of solids that could clog the probe.'
      },
      {
        type: 'heading',
        text: 'Installation Best Practices'
      },
      {
        type: 'list',
        items: [
          'Install in a stilling well or bypass chamber for stable measurements away from turbulence',
          'Ensure the probe extends below the lowest expected interface level',
          'Keep the probe away from tank walls (minimum 200mm clearance for rod probes)',
          'Avoid mounting near inlet/outlet nozzles where flow could affect the probe',
          'Use a proper sealing flange rated for the tank pressure',
        ]
      },
      {
        type: 'heading',
        text: 'Handling Emulsion Layers'
      },
      {
        type: 'paragraph',
        text: 'In real-world oil-water separators, the interface is often not a sharp boundary but a gradient emulsion layer. The thickness of this emulsion depends on the oil viscosity, separation time, and chemical treatment. Guided wave radar can detect the top and bottom of the emulsion layer, providing valuable information about separator performance.'
      },
      {
        type: 'paragraph',
        text: 'If the emulsion layer is very thick (>100mm), the interface signal may weaken. In such cases, consider a coaxial probe for maximum sensitivity, or use a sensor with advanced echo processing algorithms that can track the emulsion boundary.'
      },
      {
        type: 'heading',
        text: 'Our Solution'
      },
      {
        type: 'paragraph',
        text: 'Our SMGW-26G Guided Wave Radar Level Transmitter is specifically designed for interface measurement applications. With rod, cable, and coaxial probe options, it handles temperatures up to +350C and pressures up to 40 MPa. The advanced echo processing algorithm automatically detects and tracks the interface level, even in the presence of emulsion layers.'
      },
      {
        type: 'paragraph',
        text: 'For more information about guided wave radar for interface measurement, contact us at Freya@sensor-measure.com. Our application engineers will help you select the right probe type and configuration for your specific separator or tank.'
      },
    ]
  },
]

export default blogPosts
