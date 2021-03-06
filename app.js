
/**
 * Module dependencies.
 */
'use strict';

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , nodemailer = require('nodemailer/lib/nodemailer');

var app = express();

var data = 
[
    {
      "title":"URM37 V4.0 Ultrasonic Sensor",
      "price": 500,
      "model": 'SEN0001',
      "description": "URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function",
      "type"  : 'sensors',
      "image" : 'images/products/SEN0001.jpg'
    },
    
    {
      "title": 'Sharp GP2Y0A21 Distance Sensor (10-80cm)',
      "price": 520,
      "model": 'SEN0014',
      "description": "The Sharp distance sensors are a popular choice for many projects that require accurate distance measurements. This IR sensor is more economical than sonar rangefinders, yet it provides much better performance than other IR alternatives. Interfacing to most microcontrollers is straightforward: the single analog output can be connected to an analog-to-digital converter for taking distance measurements, or the output can be connected to a comparator for threshold detection. The detection range of this version is approximately 10 cm to 80 cm (4' to 32'); a plot of distance versus output voltage is shown below.",
      "type"  : 'sensors',
      "image" : 'images/products/SEN0014.png'
    },
    
    {
      "title":'LED Current Meter 10A',
      "model": 'DFR0130',
      "price": 300,
      "description": "URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function",
      "type"  : 'robotics',
      "image" : 'images/products/DFR0130.jpg'
    },
    {
      "title": 'UV Sensor',
      "price": 300,
      'model': 'TOY0044',
      "description": "This UV Sensor used GUVA-S12SD chip is suitable for detecting the UV raditation in sunlight. It can be used in UV Index Monitoring, DIY project, UV-A Lamp Monitoring, Plants growing Environmental monitoring...etc. It can detect the UV wavelength of 200-370nm, fast response, linear analog voltage signal output. Small size, easy for installing. With the diagram of the world health organization UV index grading standards, you can know the UV index from the sensor directly.",
      "type": 'sensors',
      "image": "images/products/TOY0044.jpg",
    },
    {
      "title": 'DS18B20 Temperature Sensor',
      "price": 300,
      'model': 'DFR0024',
      "description": 'While there are many types of temperature sensors available in the market, the DS18B20 Temperature Sensor form DALLAS is the best choice in applications which require high accuracy and high reliability. Its ultra-small size, low hardware overhead, strong anti-interference capability and high accuracy, together with other additional features makes DS18B20 even more popular among users. For electronic enthusiasts and hobbyists, the DS18B20 is a good start for learning and developing temperature-dependent prototypes.',
      "type": 'sensors',
      "image": 'images/products/DFR0024.jpg',
    },
    {
      "title": 'Analog Ambient Light Sensor',
      "price": 150,
      'model':'DFR0026',
      "description": 'This module help you to detect the light density and reflect the analog voltage signal back to Arduino controller. You can set the threshold of voltage level to trig other unit on Arduino project.',
      "type": 'sensors',
      "image": 'images/products/DFR0026.jpg',
    },
    {
      "title": 'Soil Moisture Sensor Immersion Gold',
      "price": 180,
      'model':'SEN0114',
      "description": 'The new soil moisture sensor uses Immersion Gold which protects the nickel from oxidation. Electroless nickel immersion gold (ENIG)  has several advantages over more conventional (and cheaper) surface platings such as HASL (solder), including excellent surface planarity (particularly helpful for PCBs with large BGA packages), good oxidation resistance, and usability for untreated contact surfaces such as membrane switches and contact points.',
      "type": 'sensors',
      "image": 'images/products/SEN0114.jpg',
    },
    {
      "title": 'Waterproof DS18B20 Digital temperature sensor',
      "price": 300,
      'model':'DFR0198',
      "description": 'This is a waterproofed version of the DS18B20 Temperature sensor. Handy for when you need to measure something far away, or in wet conditions. While the sensor is good up to 125°C the cable is jacketed in PVC so we suggest keeping it under 100°C. Because they are digital, you do nott get any signal degradation even over long distances! The DS18B20 provides 9 to 12-bit (configurable) temperature readings over a 1-Wire interface, so that only one wire (and ground) needs to be connected from a central microprocessor.Usable with 3.0-5.5V systems.',
      "type": 'sensors',
      "image": 'images/products/DFR0198.jpg',
    },
    {
      "title":'Real Time Clock Module',
      "price": 150,
      "model": 'DFR0151',
      "description": 'The module comes fully assembled and pre-programmed with the current time (ok, so its our current time - MST). The included Lithium coin cell battery (CR1225 41mAh) will run the module for a minimum of 9 years (17 years typical) without external 5V power. The DS1307 is accessed via the I2C protocol.',
      "type"  : 'robotics',
      "image" : 'images/products/DFR0151.jpg'
    },
    {
      "title": '360 Degree Motor (20kg)',
      "price": 800,
      'model':'SER0035',
      "description": "The DF15RSMG  equips with two pairs of the servo shells. One is a stardard shell with four M4 mounting holes. And the other one includes a shell with double bearing which is specially designed for the application of the robot arm or the joints.The shells of this kit are thickened to make it stable enough for motion system.",
      "type": 'robotics',
      "image": "images/products/SER0035.jpg",
    },
    
    {
      "title": 'Capacitive Touch Sensor',
      "price": 200,
      'model': 'DFR0030',
      "description": 'This little sensor can "feel" people and metal touch and feedback a high/low voltage level. Even isolated by some cloth and paper, it still can feel the touch. And the sensetivity well decrease as isolation get thick.',
      "type": 'sensors',
      "image": 'images/products/DFR0030.jpg',
    },
    {
      "title": 'Triple Axis Accelerometer BMA220 (Tiny)',
      "price": 200,
      'model':'SEN0168',
      "description": 'This Triple Axis Accelerometer with Bosch BMA220 is an ultra small triaxial, low-g acceleration sensor breakboard with SPI and I2C interface, aiming for lowpower consumer market applications. It allows measurement of accelerations in 3 perpendicular axes and thus senses tilt, motion, shock and vibration in cell phones, handhelds, computer peripherals, man-machine interfaces, virtual reality features and game controllers.',
      "type": 'sensors',
      "image": 'images/products/SEN0168.jpg',
    },
    {
      "title":'10 Segment LED Bar Graph',
      "price": 100,
      "model": 'FIT0188',
      "description": 'These 10 segment bar graph LEDs have many uses. With a compact footprint, and a simple hookup, they are easy for prototyping or finished products. Essentially, they are 10 individual red LEDs housed together.',
      "type"  : 'robotics',
      "image" : 'images/products/FIT0188.jpg'
    },
    {
      "title": 'Bluno ­Bluetooth 4.0 Micro­controller Compatible with Arduino Uno',
      "price": 1300,
      'model': 'DFR0267',
      "description": 'Its time to get Bluetooth 4.0 into your project and sync it up with your phone! For aficionados of smart devices and wearables with this new tech (BT4.0 BLE), now you can go further than hacking things apart to start prototyping with your Arduino. Bluno is first of its kind in intergrating BT 4.0(BLE) module into Arduino Uno, making it an ideal prototyping platform for both software and hardware developers to go BLE. You will be able to develop your own smart bracelet , smart pedometer and more. Through the low-power Bluetooth 4.0 technology, real-time low energy communication can be made really easy.',
      "type": 'boards',
      "image": "images/products/DFR0267.jpg",
    },
    {
      "title": 'LCD Keypad Shield for Arduino',
      "price": 400,
      'model': 'DFR0009',
      "description": 'This is a very popular LCD Keypad shield for Arduino and other variants. It includes a 2x16 LCD display and 6 momentary push buttons. Pins 4, 5, 6, 7, 8, 9 and 10 are used to interface with the LCD. Just one Analog Pin 0 is used to read the five pushbuttons. The LCD shield supports contrast adjustment and back-lit on/off functions. It also exposes five analog pins with DFRobot color code for easy analog sensor plugging and display. The on board LED indicates power on.',
      "type": 'boards',
      "image": 'images/products/DFR0009.jpg',
    },
    
    {
      "title": 'Digital Push Button',
      "price": 100,
      'model': 'DFR0029',
      "description": 'Press to release pleasure! Our redesigned digital push buttons come with LED, immersion gold surface, and bright colored hats. A captital D at left corner indicates that it is a digital sensor. An illustration of button painted in the back notifying its function. Pressing it is a real fun, especially with the plastic cap off. The long pressable life also ensures its durability.',
      "type": 'robotics',
      "image": 'images/products/DFR0029.jpg',
    },
    
    {
      "title": 'Analog Sound Sensor',
      "price": 250,
      'model': 'DFR0034',
      "description": 'Analog Sound Sensor is typically used in detecting the loudness in ambient, the Arduino can collect its output signal and actuate accordingly. You may use it to make some funny interactive works such as a "clap and buzz" to find your lost keys or remote control if you add a buzzer.',
      "type": 'sensors',
      "image": 'images/products/DFR0034.jpg',
    },
    
    {
      "title":'Arduino Mega2560 Rev3',
      "model": 'DFR0108',
      "price": 2350,
      "description": "The Arduino Mega 2560 is a microcontroller board based on the ATmega2560 (datasheet). It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Mega is compatible with most shields designed for the Arduino Uno, Duemilanove or Diecimila.",
      "type"  : 'boards',
      "image" : 'images/products/DFR0108.png'
    },
    
    {
      "title":'DFRduino UNO R3',
      "model": 'DFR0216',
      "price": 700,
      "description": "URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function",
      "type"  : 'boards',
      "image" : 'images/products/DFR0216.jpg'
    },
    
    {
      "title":'DFRobot Mega 2560 V3.0',
      "model": 'DFR0108',
      "price": 1400,
      "description": "DFRduino Mega 2560 V3.0 which is now fully compatible with Arduino Mega 2560 R3. The Arduino Mega is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 14 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; Connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. ",
      "type"  : 'boards',
      "image" : 'images/products/DFR0108.jpg'
    },
    
    {
      "title":'Line Tracking Sensor',
      "model": 'SEN0017',
      "price": 250,
      "description": "Line tracking is the most basic function of smart mobile robot. As you can see line tracking robot one of the easiest ways for a robot to successfully and accurately navigate. We designed this new generation of line tracking sensor to be your robot's powerful copilot all the way. It will guide your robot by telling white from black quickly and accurately, via TTL signal. With a drawed path and good programming can ensure results that are far more consistent than if the robot was simply told where to go without any reference.",
      "type"  : 'sensors',
      "image" : 'images/products/SEN0017.jpg'
    },
    {
      "title":'50A Current Sensor(AC/DC)',
      "model": 'SEN0098',
      "price": 500,
      "description": "This is a breakout board for the fully integrated Hall Effect based linear ACS758 current sensor. The sensor gives precise current measurement for both AC and DC signals.The thickness of the copper conductor allows survival of the device at high overcurrent conditions.",
      "type"  : 'sensors',
      "image" : 'images/products/SEN0098.jpg'
    },
    {
      "title":'WiDo ­Open Source IoT Node',
      "model": 'DFR0321',
      "price": 1200,
      "description": "Wido is an Arduino compatible WIFI IoT Node development board, which integrates with WG1300 WIFI solution. The microcontroller of Wido is ATMEL ATmega32U4.",
      "type"  : 'boards',
      "image" : 'images/products/DFR0321.jpg'
    },
    /*
    { //
      "title":'DF05BB Standard Servo',
      "model": 'SER0020',
      "price": 2400,
      "description": "URM37 V4.0 Ultrasonic Sensor comes with a temperature correction which is a very unique feature in its class. URM37 V4.0 (last version) has already been a very good realization of ultrasonic switch and serial (TTL and RS232 level optional), pulse output function, the module can also control a servo rotation to realize a spatial ultrasound scanner. On this basis we have to upgrade the function",
      "type"  : 'sensors',
      "image" : 'images/products/SER0020'
    },
    */
    {
      "title": 'Tilt/Pan Kit (5kg)',
      "price": 900,
      'model': 'FIT0045',
      "description": 'This DF05BB Pan and Tilt assembly for horizontal surface mount. Made using two DFRobot servo brackets. Perfect for your small remote piloted robot! Includes hardware and two DF05 ball bearing servos.',
      "type": 'robotics',
      "image": 'images/products/FIT0045.png',
    },
    {
      "title":'Analog LPG Gas Sensor(MQ6)',
      "model": 'SEN0131',
      "price": 300,
      "description": "The MQ6 is a simple-to-use liquefied petroleum gas (LPG) sensor. It can be used in gas leakage detecting equipment in consumer and industry applications,this sensor is suitable for detecting LPG, iso-butane, propane, LNG. Avoid the noise of alcohol, cooking fumes and cigarette smoke. The sensitivity can be adjusted by the potentiometer.",
      "type"  : 'sensors',
      "image" : 'images/products/SEN0131.jpg'
    },
    {
      "title":'Analog Gas Sensor(MQ4)',
      "model": 'SEN0129',
      "price": 300,
      "description": "The MQ4 is used in gas leakage detecting equipment in consumer and industry markets,this sensor is suitable for detecting CH4,Natural gas, LNG, avoid exposure to alcohol, cooking fumes, and cigarette smoke. The sensitivity can be adjusted by the potentiometer.",
      "type"  : 'sensors',
      "image" : 'images/products/SEN0131.jpg'
    },
    {
      "title":'DC­ to DC boost converter',
      "model": 'DFR0123',
      "price": 300,
      "description": "This is multipurpose boost converter, a breakout board. Supply voltage is as low as 3.7v and it boosts to as high as 34v.  With this module, you can now power your Arduino with our 3.7V lipo battery or use it to regulate any other project. The tiny form factor and its simplicty makes it for a very nice addition for all projects requiring an extra power module.",
      "type"  : 'robotics',
      "image" : 'images/products/DFR0123.jpg'
    },
    {
      "title":'GPS/GPRS/GSM Shield V3.0',
      "model": 'TEL0051',
      "price": 3000,
      "description": "This shield with a Quad-band GSM/GPRS engine works on frequencies EGSM 900MHz/DCS 1800MHz and GSM850 MHz/PCS 1900MHz. It also supports GPS technology for satellite navigation. It's possible for your robot and control system to send messages and use the GSM network.",
      "type"  : 'boards',
      "image" : 'images/products/TEL0051.jpg'
    },
    
    
    {
      "title":'MicroSD card module',
      "model": 'DFR0229',
      "price": 300,
      "description": "This is a Micro SD(TF) module from DFRobot. It is compatible with TF SD card (commonly used in Mobile Phone) which is the most tiny card in the market. SD module has various applications such as data logger, audio, video, graphics. This module will greatly expand the capbility an Arduino can do with their poor limited memory. ",
      "type"  : 'boards',
      "image" : 'images/products/DFR0229.jpg'
    },
    {
      "title":'DFPlayer ­ A Mini MP3 Player',
      "price": 320,
      "model": 'DFR0299',
      "description": "Sing for the moment! The DFPlayer Mini is a small and low cost MP3 module with an simplified output directly to the speaker. The module can be used as a stand alone module with attached battery, speaker and push buttons or used in combination with an Arduino UNO or any other with RX/TX capabilities. ",
      "type"  : 'boards',
      "image" : 'images/products/DFR0299.jpg'
    },
    
    {
      "title":'LED Voltage Meter',
      "price": 320,
      "model": 'DFR0130',
      "description": "This is a standalone DC voltage meter. It measures 3V-30V with 1% accuracy.  Best suited for battery level display. Just apply two wires on the power without any extra circuit or components, it gives the reading straight away.  Easy to use, and is a good company with robotic applications.",
      "type"  : 'robotics',
      "image" : 'images/products/DFR0130.jpg'
    },
    
    
    {
      "title":'Mini Bread Board Self Adhesive',
      "price": 170,
      "model": 'FIT0008',
      "description": "This is a very small breadboard with 170 tie points. This bread board is compatible with the Arduino Proto Shield. Strong self-adhesive backing. Measures 1.8x1.4.",
      "type"  : 'robotics',
      "image" : 'images/products/FIT0008.jpg'
    },
    
    
    {
      "title":'Arduino Yún',
      "model": 'DFR0297',
      "price": 4000,
      "description": "The Arduino Yún is a newcomer microcontroller board in the Arduino boards family. It is a microcontroller board based on the ATmega32u4 (datasheet) and the Atheros AR9331. The Atheros processor supports a Linux distribution based on OpenWRT named Linino. The board has built-in Ethernet and WiFi support, a USB-A port, micro-SD card slot, 20 digital input/output pins (of which 7 can be used as PWM outputs and 12 as analog inputs), a 16 MHz crystal oscillator, a micro USB connection, an ICSP header, and 3 reset buttons.",
      "type"  : 'boards',
      "image" : 'images/products/DFR0297.png'
    },
    
    {
      "title":'Relay Module V3.1',
      "model": 'DFR0017',
      "price": 250,
      "description": "Some of the most common applications with Arduino are: Home lighting, electrical appliances of high power and other equipments. The modular design makes it easy to integrate with a controller board. The Relay integrates a status LED, in order to acknoledge visually it's status ON or OFF. It can be controlled through the digital IO port, with a simple HIGH or LOW on Arduino compatible boards. Other boards will work requiring same voltage level. Other usages include control of solenoid valves, lamps, motors and other high current or high voltage devices.",
      "type"  : 'robotics',
      "image" : 'images/products/DFR0017.jpg'
    },
];







app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(express.cookieParser('your secret here'));
  //app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
// recipes
app.get('/recipes', function(req, res) {
    res.send(data);
});

app.post('/email', function(req, res) {


  var name = req.body.name;
  var address = req.body.address;
  var items = req.body.items; // array of {prod, quantity, amount }


  console.log("items: "+items);
  console.log("name: "+name);
  console.log("address: "+address);

  var htmlStr = '<div>'+
        '<p>Name: '+name+'</p>'+
        '<p>Address: '+address+'</p>'+
        '<p>Item Info: </p>';

        var itemsStr = "<table>";

        itemsStr += "<th><tr><td>Item</td><td></td><td>Quantity</td><td>Amount</td></tr></th>"


        var total = 0; 
        for(var i = 0; i < items.length; i++){
            itemsStr += "<tr>";
            itemsStr += "<td>"+items[i].productName+"</td>";

            itemsStr += "<td>"+items[i].quantity+"</td>";
            itemsStr += "<td> "+(items[i].quantity * items[i].amount)+"</td>";

            total += (items[i].quantity * items[i].amount);

            itemsStr += "</tr>";
        }
        itemsStr += "</table>";

      htmlStr += itemsStr;

      htmlStr += "<p>Total: "+total+"</p>";
     htmlStr +=  '</div>';


  try{
  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport("SMTP",{
    service: 'Gmail',
    auth: {
        user: 'frd.concepcion@gmail.com',
        pass: 'F3rdin@nd'
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: name, //'frd.concepcion@gmail.com', // sender address
      to: 'tonnyquintos@gmail.com', // list of receivers
      subject: 'Hello ', // Subject line
      text: 'Hello world', // plaintext body
      html: htmlStr// html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
          console.log(error);
      } else {
          console.log('Message sent: ' + info.response);
      }
  });

}catch(e){
  console.log("error ");
  console.log(e);
}

});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
