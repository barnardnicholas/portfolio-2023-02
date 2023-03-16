import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';
import { standardTransitions } from '@/theme/constants';

const ReactSpringIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
  const theme = useTheme();
  const containerStyle: CSSProperties = {
    width: '1rem',
    height: '1rem',
    ...style,
  };
  const pathStyle: CSSProperties = {
    fill: theme.palette.text.primary,
    transition: standardTransitions(theme),
  };
  return (
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      style={containerStyle}
    >
      <g>
        <circle style={pathStyle} cx="127.769784" cy="127.769784" r="127.769784"></circle>
        <path
          d="M113.641241,191.300085 C113.087079,191.59257 112.500392,191.664749 111.802002,191.494768 C111.061853,191.295453 110.277505,190.602787 110.01132,189.934808 C109.773038,189.354649 109.791058,187.759355 110.134817,186.39637 C108.315802,185.992124 104.731664,185.111858 102.943382,184.619542 C89.9483458,181.04449 79.9868054,176.156506 74.8472192,170.918259 C72.0688125,168.086517 70.8797571,165.474336 70.8925558,162.65717 C70.9057185,160.577805 71.5342215,158.874625 73.1322945,156.828592 C74.4434624,155.150152 76.8994505,153.116522 79.6799643,151.424389 C76.2653205,150.502069 71.1925177,148.950602 68.4239957,147.96744 C63.8366791,146.325064 58.4527436,143.825709 55.750534,142.07746 C51.0273835,139.041052 48.0326464,135.804511 46.1822859,131.872509 C45.0424656,129.459252 44.5478458,127.169419 44.6629512,124.995895 C44.7801579,122.78269 45.5258668,120.679598 46.9173424,118.679759 C49.1986277,115.405174 53.7208708,111.99716 60.2724498,108.695046 C61.6504361,107.996465 63.8341487,107.00531 65.4823023,106.289614 C60.8521963,103.161197 57.8299223,99.2928909 56.8877376,95.4882596 C56.5871516,94.2628357 56.5534391,91.7993322 56.8159211,90.6624241 C58.4099524,83.8971707 67.4802431,76.4893751 82.684609,70.1638849 C83.9008452,69.655859 87.4117719,68.3132683 89.1808777,67.6684975 C89.0687315,65.6539064 89.5233033,64.4420604 91.3232979,62.521631 C92.5071763,61.286966 93.751506,60.599306 95.2527351,60.3326066 C95.9402233,60.2127526 96.4339156,60.2473572 96.7954894,60.3634248 C97.3836938,60.5522423 97.7767923,60.9252805 98.015828,61.5648958 C98.2356981,62.1671396 98.224684,62.6450032 97.9547011,63.2035485 C97.7996979,63.5242214 97.5021452,63.9110551 96.9476551,64.451917 C96.5114841,64.8706903 96.3639197,65.0256625 96.2644405,65.4066465 L96.3948748,65.4066465 C99.2496824,64.5295876 105.706865,62.9848816 109.827377,62.1938195 C124.902759,59.3055262 142.649425,58.1720666 156.005013,59.2491876 C168.101217,60.2177625 181.350676,62.9760072 185.603057,65.3519622 C186.882171,66.0604771 187.904202,67.0547944 188.444432,68.0430539 C188.855686,68.8241264 188.92739,69.0702527 188.92739,70.3654556 C188.92739,71.7348438 188.849691,71.928716 188.434299,72.697041 C187.047486,75.2487295 183.095692,77.0353004 173.562949,78.4741969 C161.369299,80.3170911 141.734314,81.2168799 126.852039,80.6026011 C112.199405,80.0052447 101.196075,77.9707545 95.1027055,74.8178122 C94.3683533,74.4367835 94.1465081,74.158161 93.9618976,74.1957919 C93.7713014,74.232303 92.2825328,74.7365236 90.6423696,75.286248 C81.6314053,78.3514173 74.4392205,81.8079609 69.8518181,85.3261293 C68.5851774,86.294346 66.7474346,88.060837 65.9591764,89.0762258 C65.2965067,89.9252881 64.6332249,91.1487185 64.5568286,91.8202859 C64.4542465,92.6481087 64.8836561,93.5321688 65.6227815,94.477881 C66.5551816,95.6708885 68.0028754,96.9221353 69.9041141,98.1937801 C71.1923534,99.050064 74.833211,101.001993 76.3778953,101.652263 L78.3763681,101.23894 C88.1447168,97.8217847 99.9430579,94.8410152 111.649019,92.8308921 C127.461483,90.1173627 146.885517,88.4528595 165.360536,88.2522927 C176.369154,88.1335633 182.705675,88.5664696 189.473479,89.8842784 C194.757125,90.9123377 199.887599,92.7592608 202.0543,94.369742 C203.600028,95.5086683 204.628675,96.8279316 205.155847,98.225351 C205.711465,99.6981746 205.72828,101.272311 205.157749,102.873182 C203.671268,107.041023 197.804829,110.812292 187.932196,113.592652 C178.595867,116.221976 165.710825,118.063067 150.090656,118.873862 C140.76584,119.369714 127.178268,119.42807 119.62506,119.014823 C100.33873,117.947821 85.5587085,115.347704 75.0990745,111.209226 L74.3868131,110.924839 C69.6145189,112.603979 62.6847785,115.720988 59.4789489,117.597983 C56.8114315,119.169049 54.4667772,120.958322 53.3596883,122.332434 C52.6730517,123.180557 52.267416,123.96595 52.2043888,124.821947 C52.138949,125.710712 52.4317104,126.646968 52.9959508,127.749227 C53.8877038,129.468418 55.981886,131.768619 57.8920232,133.168569 C63.7862784,137.482765 74.7339198,141.592757 88.9617815,144.907931 L92.0441943,145.621443 L94.0367721,144.941119 C107.196199,140.411303 125.321619,136.917956 142.845105,135.545939 C152.560729,134.788787 163.611193,134.695442 171.689886,135.31061 C178.107424,135.798191 183.591086,136.609069 188.260807,137.751318 C192.383675,138.769616 195.452465,139.97654 197.577046,141.40536 C199.945704,142.998325 201.202607,144.88115 201.555754,147.067871 C201.825486,148.739037 201.444637,150.334076 200.458722,151.75616 C199.557328,153.056332 198.125833,154.219241 196.187775,155.123732 C190.550806,157.734092 180.256563,159.369636 164.212615,160.121034 C160.214442,160.298205 146.539529,160.298325 142.30712,160.121049 C124.61786,159.342317 107.901162,157.40648 92.5725648,154.373948 L89.6727637,153.797527 L88.6791478,154.229019 C85.7981203,155.485815 82.7245754,157.207953 80.7518952,158.67017 C79.5981736,159.526285 78.2721888,160.899457 77.8806674,161.718388 C77.67038,162.147037 77.6509275,162.231844 77.6785088,162.66094 C77.7324893,163.422004 78.0322971,163.942956 78.7648459,164.871696 C81.9432437,168.946715 90.2985885,173.339519 100.800602,176.618 C104.801589,177.864639 109.1227,178.959625 113.478423,179.833511 L115.586095,180.257086 C119.695302,178.532187 124.654213,177.870859 132.957014,177.87086 C142.503096,177.882754 152.946674,179.217492 156.178782,179.983059 C159.95385,180.877233 162.621606,182.676839 163.109394,183.859254 C163.409857,184.624369 163.435622,185.448393 163.230595,186.192426 C163.015814,186.97186 162.551275,187.653512 161.917067,188.081393 C160.984578,188.714986 158.132523,189.314906 153.918849,189.608004 C150.941349,189.821377 142.241456,189.893523 138.276648,189.73947 C131.053723,189.467258 126.06041,189.017261 119.489613,188.058865 L117.418141,187.760106 C116.336982,188.340095 115.541985,189.136762 114.981763,189.983339 C114.530101,190.656788 114.086459,191.065099 113.641241,191.300085 Z M150.280415,151.94489 C155.201776,152.026924 157.237422,152.015084 163.792891,151.886146 C171.704438,151.723013 179.926181,150.968135 185.517739,149.895951 C188.260011,149.372925 190.699754,148.731335 192.290259,147.861583 C191.423582,147.466666 190.246249,147.044501 189.064042,146.694096 C183.337396,145.019867 175.847397,143.933734 165.413987,143.258949 C162.259778,143.04853 147.405856,143.060961 143.864304,143.259543 C131.942776,143.949509 121.522387,145.270203 111.446388,147.387248 C110.164358,147.65851 108.646117,148.001203 107.192178,148.342429 C121.249602,150.448827 136.182469,151.697737 150.280415,151.94489 L150.280415,151.94489 Z M175.174878,107.619406 C186.250518,105.8931 194.706091,103.225545 197.799912,100.86873 C197.521689,100.675125 197.157072,100.454908 196.81007,100.28064 C193.34574,98.5095066 186.727422,97.2480812 178.333759,96.697639 C174.88212,96.4755798 162.159732,96.5123093 156.423792,96.7578434 C128.985312,97.9713023 108.044939,100.851391 89.6472381,105.992597 C94.6333028,107.191635 101.175167,108.324389 107.011206,108.976758 C117.978217,110.205702 130.56409,110.685142 142.437962,110.322322 C155.647801,109.924273 165.767474,109.082775 175.174878,107.619406 Z M152.640652,71.7566814 C161.679366,71.4472754 169.426425,70.77514 174.792459,69.8568907 C174.063648,69.683069 173.323548,69.5163178 172.637922,69.3743332 C160.781409,66.9131866 148.433245,66.1461845 134.563382,67.0326075 C126.425709,67.5552899 118.377526,68.5519106 110.932293,69.9714475 C116.66816,70.8796641 123.448043,71.4531893 132.307407,71.7920219 C134.618801,71.8857805 149.769103,71.8620416 152.640652,71.7566814 L152.640652,71.7566814 Z"
          style={pathStyle}
          transform="translate(125.112908, 125.216966) scale(-1, 1) rotate(-140.000000) translate(-125.112908, -125.216966) "
        ></path>
        <ellipse
          style={pathStyle}
          cx="127.877321"
          cy="127.957171"
          rx="41.5508462"
          ry="41.6306961"
        ></ellipse>
        <path
          d="M207.37897,124.788213 C208.191171,125.109778 208.375344,125.208311 209.255505,126.257358 C210.087965,127.249496 210.191286,127.484132 210.378406,128.346981 C210.599781,129.451281 210.455942,130.869778 209.931603,132.234866 C208.201301,136.788167 199.824576,147.417692 191.180984,155.935125 C181.642314,165.345059 167.319022,175.883971 153.914014,183.36175 C150.248978,185.404409 144.309594,188.371614 141.558976,189.534849 L141.45897,189.618647 L134.578832,192.439252 C133.886334,192.690912 132.920858,193.032192 131.926682,193.377937 L131.262327,193.608161 C129.935836,194.066192 128.65483,194.498518 127.998342,194.703286 C112.285283,199.63101 100.575401,199.786452 95.0056518,195.62857 L100.191217,189.765801 C100.681485,190.231206 101.97585,190.742101 103.029318,190.966607 C104.285928,191.237709 106.829168,191.409727 108.421709,191.337163 C114.197364,191.083557 121.928748,189.108305 130.801819,185.664276 C132.411488,185.031091 133.876213,184.46034 134.045652,184.365859 L149.761105,176.69341 C156.376955,172.995223 163.182688,168.585393 169.752495,163.755096 C180.947246,155.518711 189.913508,146.993911 197.414124,137.487286 C197.848035,136.937899 198.307914,136.334365 198.754348,135.732673 L207.37897,124.788213 Z M200.79314,90.9223597 C202.259154,91.7818935 203.258106,92.9987223 203.779315,94.4840748 C204.273635,95.893364 204.333675,97.5650993 203.881715,99.4311367 C203.257001,102.057623 200.514118,106.770233 197.127367,110.954083 C192.789917,116.313876 188.214147,120.71855 179.704817,127.70385 C165.423148,139.425704 149.473612,150.636109 135.616276,158.721473 C125.356938,164.70598 114.402901,170.006469 104.723338,173.667822 L102.926734,174.635649 L91.5995626,178.08686 C89.8768115,178.59794 87.566918,179.24236 86.0622273,179.593024 C78.9209324,181.274705 73.266095,181.570855 69.4135712,180.528806 C67.0622388,179.8912 65.1391079,178.759459 63.626682,177.139476 C62.1415137,175.548409 61.0484489,173.476282 60.3705094,170.895102 L68.2403914,169.673853 C68.5166504,170.880921 68.8942043,171.786314 69.5156029,172.425209 C70.114164,173.040345 70.9296806,173.381249 72.0008288,173.589548 C73.732236,173.930636 76.678446,173.794164 79.7318446,173.283085 C83.394118,172.660213 90.706141,170.593612 95.4412201,168.812294 L110.301744,162.78156 C127.699983,154.893997 145.592541,143.640127 167.391586,126.932535 C171.943413,123.433623 181.712852,115.283983 184.214285,112.895263 C190.290325,107.07817 194.549502,101.857796 196.064875,98.274164 C196.218659,97.9176058 196.35642,97.5144518 196.445191,97.1873612 L200.79314,90.9223597 Z M165.772155,56.4962901 C167.410924,56.9198504 168.758515,57.9289324 169.625968,59.3826072 C170.761024,61.2847424 171.008553,63.534964 170.217899,66.2778475 C169.508835,68.7380259 167.93379,71.6350619 165.430147,75.0652777 C162.587073,78.9419281 158.907488,83.088023 154.304829,87.5866245 C148.511678,93.2506705 139.986509,100.282383 132.05714,105.94735 C117.751528,116.160276 101.621134,125.13501 88.6286734,130.123695 L86.6650245,130.883223 L79.7467626,132.972662 L73.4635281,134.385635 C70.2458475,134.876639 67.057082,134.89745 64.973905,134.454515 C62.4345324,133.914337 60.8581986,133.013548 59.5115281,131.429111 C57.6909813,129.279263 56.9227971,126.513911 57.230918,122.558803 L64.1186072,124.672553 C64.1545209,125.854941 64.2596835,126.446688 64.7075914,127.064403 C64.9623022,127.410832 65.0315511,127.463321 65.4682245,127.656518 C66.2946072,128.032046 68.193059,128.231689 69.6270273,128.145865 C70.5861745,128.087994 72.1616404,127.81614 73.7242248,127.506628 L74.2437461,127.402305 C76.3130181,126.981367 78.2351034,126.528313 78.5185646,126.461103 L78.5544288,126.452581 L78.5544288,126.452581 L96.5201036,119.061917 L96.5601222,119.041481 C96.9001965,118.867781 99.3190676,117.631434 100.392886,117.059039 C109.472414,112.204063 118.303862,106.517732 127.879735,99.3832518 C130.720414,97.2590043 142.107073,87.720518 144.388236,85.5318101 C151.946866,78.3085583 156.986383,72.6620086 160.297071,67.6983712 C160.977404,66.6701353 161.384794,65.6041439 162.01798,64.7302446 L165.772155,56.4962901 Z"
          style={pathStyle}
        ></path>
      </g>
    </svg>
  );
};

export default ReactSpringIcon;
