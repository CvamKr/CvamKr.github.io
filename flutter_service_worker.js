'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ed20d984b757ad5291963389fc209864",
".git/config": "59ed6c3ca5602cfe90f773a71d07587b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1fc2ae2b89a9be43e98ed054d1a76bc6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "842d30e33a16b20a64250840a728f659",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce9114241a7f637679e67d20671338db",
".git/logs/refs/heads/main": "ce9114241a7f637679e67d20671338db",
".git/logs/refs/remotes/originWeb/main": "c885d936aedbef087e23de994a2220dc",
".git/objects/07/8b63a76f25ddf45fe4ee7a83dfc5401faf12be": "f5c08902d2e132b4df018f2034f43ccf",
".git/objects/0a/a4b4c7621bbf8bb9c3b82b203e703cf10d1aa6": "9f617a949668cc8977f8b7584ab86ade",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/11/6d828b5d62546a7cb67e46668a0e5da9f5422e": "1cfcb8de13cdc5227ee5aeac06e33a32",
".git/objects/14/cf41bcc2c7ae0c1e82ae2be340863eb8892985": "7dd3d149669800cb8d8b6f12dc71385d",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/1a/7fd50d68aa36696b4a9fc0eaa6ad52bb2ef610": "53faddc4bf41362f1aca5a5e58b8b67b",
".git/objects/1b/f48d16f2be8297a3455d6533fd5dd1329f1df0": "b59d597dbe13a82a80a71bd14711d7e1",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/93ef131ce7ece1aeec9f28dabdb2c8375e0789": "1d7b0586fb0e327d7b82ba8311072546",
".git/objects/1d/f249cd48e205d90b405e23441b25ef5e63a809": "ba5bc72b4f0f78b1378ec0f421608c7b",
".git/objects/1f/f973dc9853fba5688f470b82728048f54105a9": "023c3389abd27d03067f5c2409800ec4",
".git/objects/27/fb9a62854b634d3952a7d5c0038396e0a33a28": "5e34db41a8ab27a418845383b45acb83",
".git/objects/28/3c9576dff35c58e9cd46812fc069106c00b3fc": "38615eef9a11a3fab5e6ea14c21e876d",
".git/objects/2a/568f10744c31dc3ddb41da7d51efd79a1df2fe": "e826ccb85767ddc7fb7524330635f6e9",
".git/objects/2a/9572645536ca3c1442d7a4bebef70a97b1f7f9": "077f7552fee5150e2861375732832a3c",
".git/objects/2a/b88ea532fbb92de9a5996cc1fa8efa0b976c52": "c7e87d12a513bcbcbeb6792ce96a38a6",
".git/objects/2c/2f63f8229130229277c1e5f871e44d399c4c54": "e69c56a88c3b6ca3958252c6e8198ae3",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/33/73e6920b038812029c731ab5e47712fc598ef5": "bf06161860a48b1dc763feccf858e49c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/922583100a7ed04beac4def5811bec65345a4a": "83d3b0ad27384ba5ed9b674b2b11ebe1",
".git/objects/4b/f7e366e3ab60f6f349abc01b2a05dd820b4009": "86512f7434e92970771da0208749554c",
".git/objects/4d/2d7c754eee1c479d1940bdd0a9e33f95271b31": "4343b1c097634712d9993bbe15f089d6",
".git/objects/4f/7a953ffc58d72d5a23cdef72902c39491ba807": "aca9ac52bf15ca99aea775a349db5109",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5f/49c6cdac77c894eab1b88b2501c11a27e829fe": "5ceeff7440e623cf1c56a2c3c833fdd5",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/6a/f89cff04b528eccc752b7beff9c19b5110ea9b": "51ffe40fa97b3989333ddc334ce70788",
".git/objects/72/5529af6c057b5832a7f8869dc7e362d6bd3d29": "130159b8627b9cbfa17b5d3912a31953",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/76/69180f141618a4d85d43c60b1b8487ab118665": "d714b358dc9ae12b7d4649cdf46eff1f",
".git/objects/7c/7048102015e345c1dda7ba1ec8d2f75b20eb57": "dcc36602b0a277358f024d1eb8d39a3d",
".git/objects/7f/f5f27e2482d93f52a5a361d4859f551a1be7e3": "23f5eefad28aa5ec1a9972d0550b941d",
".git/objects/81/1acf9f5bb21ca9de77dea0e5e18c72841cd828": "80fc32224309cb929a65c63a0cd952d9",
".git/objects/84/a231e3aebe8f9fa1916e642e25a3edd0233653": "a439d16039d535592e5bc5abe2c88514",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/24f1405eee2f40bdbd074bb7f5f3ec4c9b5765": "8de397d259d3902a0d24eab672dd2597",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/9a/e62ab871ae916cc681bb9917a734f3eb14fed4": "5488b831b113f82eca6f1cea71722d1e",
".git/objects/9b/930a3aa9d1b6ec75a9391f9c3077065f994f5c": "2c124230e8b3d50030d02dddeb4f882f",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/ecd2c4c59fb00de0d4ebe29feed44d32d2c0c7": "892f499815fe268b8a315d8993e484fe",
".git/objects/a5/665a712df635db0e8ff60d631dca42501a133f": "acbcc1adcf8f7d6f183d8278152adb04",
".git/objects/a6/cefeeddfdc40ed7ff9855949843a9dd247fd02": "251f60c49f7c39c29a276cdb91bb3f64",
".git/objects/aa/8bc8cc99d254550a3aba2e3560d2d605038c6d": "e2594ac61faa57d801c0f42c62cd1154",
".git/objects/ac/198f30d794b3cd14627aa5c32ec12f1e6cfa8a": "695362de2d29a63e4cf236d33f859b05",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b1/6258b92a27436d7069252e2fb7c5ec80e76e68": "121655dd872e76584aeaddde5cf6e977",
".git/objects/b1/7a0ad3c76db48fec836acd0aa0d23af07e5c34": "b24e35b5febaf1c652734cf2da15942e",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/b7/023ff333621a6c22a2d2937c8415cd3f357b8d": "b0c23f9441c8d928839e7a83c48cc083",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/61db4b0e5a10c810899a6c023813b5c72b8598": "c606da17e4949bc2fc7ed80be2042c96",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/4075b812aad6dd86fef1af00ff10d8aefc7b6e": "07cce2d70c009b8296eccf17156490d9",
".git/objects/bf/4d85f3899dd567bf6d4656d426d002c18c5746": "c74bde081d68e73248a7b8f9c58647f9",
".git/objects/c2/416cf09b5ea2f78ccd0ad24afd62dff231fe21": "2dd698f38cc16f4d715c7212c5625dc1",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c6/2362cf43d676598262fe73a8ab837fc3f4c60c": "8cca3515b50fe55a42507a4e689faa8c",
".git/objects/ca/a8f65c770049194bced172b9ac60364bde7485": "48712ba0a5d61fd77420d4f97d2b0d99",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d1/45feccf9a4e0e1bcee7e5fc47a7ce114ac7399": "0b1bd255771dcf5a7d90629cc1e18fc5",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dd/939572c5e5208037de898021679f37b4ba9b73": "9eb5e34aa8aa098d71a4562cb5394da3",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/ad32a234e426bfd25538338f4105c64528705f": "562204313cf73e7b8aa9c07862a12684",
".git/objects/e2/11556af711216e9336d845eceaf33d24fc11c7": "1b81ecd9213ce9e45e49fc49183e98b9",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/127d626d85fdfb918e00b9036abf9a14c46286": "072fa0e9f3b65ca90038b8346669a922",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e8/fdce881c2155948dc13e64047fa0320c68f543": "af2386f6cd9a5892339ba451c3ed58c7",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/ea/782d4c36270c8c2f8013673bee49a67e58de45": "a5c9cf9ef57d6c7516d535c32fb58ce5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/fbf63cb5f87896bd8e9f0dcb2550c743f77424": "678104dfc73b4c34ad0d79da4d14db91",
".git/objects/f3/77dec7e3f3d57845f353f5aba4defe6211cd4a": "f23c8ebbfbc64732b6e50a9f26074480",
".git/objects/fb/ba57c8bf09dfa723c2363a6dbed9abba9951fb": "53b7decdcc3cd1cd4b93c2a73929eb76",
".git/objects/fc/03a69551d4a157e61ee0a5f6a1edf4d273662c": "408d1b5b85b0132cf15885e56cc6b210",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "dce789775d93109175d6051a3b5241ac",
".git/refs/heads/main": "dce789775d93109175d6051a3b5241ac",
".git/refs/remotes/originWeb/main": "dce789775d93109175d6051a3b5241ac",
"assets/AssetManifest.bin": "7d18ab755e36822ba3ec3ebd5e0d4026",
"assets/AssetManifest.json": "c930cea632d774585f0b7709852dc9e5",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/FontManifest.json": "82eb5d2308d53fe6d8b701711333aec6",
"assets/fonts/MaterialIcons-Regular.otf": "9f736969b2f399765b324f0c696b6ee8",
"assets/NOTICES": "a72dc652a5091822c368192d080e1f97",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/2.0x/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/2.0x/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/2.0x/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/2.0x/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-black-logo.png": "fd557bc349d7b0ac2dc09bdf89903362",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-logo.png": "f3482792f84398f4879483d8d3159d54",
"assets/packages/social_login_buttons/lib/assets/3.0x/facebook-logo.png": "d23205c8421608e83f9f7c420f3e2e89",
"assets/packages/social_login_buttons/lib/assets/3.0x/github-logo.png": "93f12731517d2d6ad022935490d84e88",
"assets/packages/social_login_buttons/lib/assets/3.0x/google-logo.png": "a6b32c1f07fa2fc81ce254986b971691",
"assets/packages/social_login_buttons/lib/assets/3.0x/microsoft-logo.png": "d00462accd7b9bc230de54830c4b47a1",
"assets/packages/social_login_buttons/lib/assets/3.0x/twitter-logo.png": "27294190740a30f2b76ee5257f39ad74",
"assets/packages/social_login_buttons/lib/assets/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c35d07daf2ae18f9dddbd53dc63a5015",
"/": "c35d07daf2ae18f9dddbd53dc63a5015",
"main.dart.js": "220f6a160d65f832b448e852effe4cd8",
"manifest.json": "c1bff231f83038be26fa630b311aeff2",
"version.json": "426410503b8f124758446f3100883f74"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
