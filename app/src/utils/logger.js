const a5_0x4120d0=a5_0x3967;(function(_0x49d65f,_0xbd2ca7){const _0x51d60c=a5_0x3967,_0x33432e=_0x49d65f();while(!![]){try{const _0x440b03=-parseInt(_0x51d60c(0x1f4))/0x1*(-parseInt(_0x51d60c(0x1f0))/0x2)+-parseInt(_0x51d60c(0x1ee))/0x3+-parseInt(_0x51d60c(0x1f3))/0x4*(-parseInt(_0x51d60c(0x1e5))/0x5)+parseInt(_0x51d60c(0x1f9))/0x6*(parseInt(_0x51d60c(0x1ea))/0x7)+parseInt(_0x51d60c(0x1f7))/0x8+-parseInt(_0x51d60c(0x1f6))/0x9+parseInt(_0x51d60c(0x1e8))/0xa;if(_0x440b03===_0xbd2ca7)break;else _0x33432e['push'](_0x33432e['shift']());}catch(_0x4379ac){_0x33432e['push'](_0x33432e['shift']());}}}(a5_0x3889,0x8ca25));function a5_0x3889(){const _0x59e645=['168IVAzPD',']:\x20','10137501QKYSuQ','4822624sbZNKY','clear','456gOApVM','message','5msjjVc','log/app.log','truncate','1215380MmpgCB','File','102956ehiyWc','debug','YYYY-MM-DD\x20HH:mm:ss','logger','3111600qMAdVZ','info','3426aQlWkj','Log\x20file\x20cleared','error','2438672BkoRBM'];a5_0x3889=function(){return _0x59e645;};return a5_0x3889();}import{createLogger,format,transports}from'winston';import a5_0x3d53f3 from'fs';function a5_0x3967(_0x1961b1,_0x20eada){const _0x388965=a5_0x3889();return a5_0x3967=function(_0x396775,_0x36700b){_0x396775=_0x396775-0x1e5;let _0x5c28c3=_0x388965[_0x396775];return _0x5c28c3;},a5_0x3967(_0x1961b1,_0x20eada);}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x45606e,message:_0x690c71,timestamp:_0x868f9})=>{const _0x341fc5=a5_0x3967;return _0x868f9+'\x20['+_0x45606e+_0x341fc5(0x1f5)+_0x690c71;});class Logger{constructor(){const _0x109d0a=a5_0x3967;this[_0x109d0a(0x1ed)]=createLogger({'level':_0x109d0a(0x1eb),'format':combine(timestamp({'format':_0x109d0a(0x1ec)}),colorize(),customFormat),'transports':[new transports[(_0x109d0a(0x1e9))]({'filename':_0x109d0a(0x1e6)})],'exceptionHandlers':[new transports[(_0x109d0a(0x1e9))]({'filename':'log/app.log'})],'rejectionHandlers':[new transports[(_0x109d0a(0x1e9))]({'filename':_0x109d0a(0x1e6)})]});}[a5_0x4120d0(0x1ef)](_0x49a120){const _0x8e9c18=a5_0x4120d0;this[_0x8e9c18(0x1ed)][_0x8e9c18(0x1ef)](_0x49a120);}['warn'](_0x49ae55){const _0x2b6880=a5_0x4120d0;this[_0x2b6880(0x1ed)]['warn'](_0x49ae55);}[a5_0x4120d0(0x1f2)](_0x2d1775){const _0x4b8612=a5_0x4120d0;this[_0x4b8612(0x1ed)]['error'](_0x2d1775);}[a5_0x4120d0(0x1eb)](_0x5aa4cb){const _0x570715=a5_0x4120d0;this[_0x570715(0x1ed)][_0x570715(0x1eb)](_0x5aa4cb);}['setLevel'](_0x4c44b7){const _0xb207b4=a5_0x4120d0;this[_0xb207b4(0x1ed)]['level']=_0x4c44b7;}[a5_0x4120d0(0x1f8)](){const _0x4afd01=a5_0x4120d0;a5_0x3d53f3[_0x4afd01(0x1e7)](_0x4afd01(0x1e6),0x0,_0x5eb602=>{const _0x6b7e76=_0x4afd01;_0x5eb602?this['logger'][_0x6b7e76(0x1f2)]('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x5eb602[_0x6b7e76(0x1fa)]):this['logger'][_0x6b7e76(0x1ef)](_0x6b7e76(0x1f1));});}}export default new Logger();