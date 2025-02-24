const {config} = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
    build: `WebdriverIO Sauce Connect build-${new Date().getTime()}`,
    // tunnelIdentifier: 'tunnel-1',
    screenResolution: '1600x1200',
};

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';

// ============================================
// Add the Sauce Service, see
// https://webdriver.io/docs/sauce-service.html
// for more details
// ============================================
// config.services = config.services.concat([
//     // Add the service as an array so you can provide options
//     [
//         'sauce',
//         // Enable Sauce Connect
//         {
//             //sauceConnect: true,
//             // Provide specific Sauce Connect options
//             // Go to
//             // https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide
//             // for more options
//             // Options need to be camelCase, so `--addtional-arg foo` will become `additionalArg: "foo"`
//             // sauceConnectOpts: {
//             //     // This will write the sc logs to a file
//             //     logfile: './sc.log',
//             //     // ...
//             // }
//         },
//     ],
// ]);

config.capabilities = [
    {
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            // Set tunnelIdentifier 
            //tunnelIdentifier: 'tunnel-1',
            ...defaultBrowserSauceOptions,
        },
    }
];

exports.config = config;
