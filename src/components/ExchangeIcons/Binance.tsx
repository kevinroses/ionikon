import React from 'react'

function Binance({ width, height }: { width?: number; height?: number }) {
  return (
    <svg width={width || 160} height={height || 32} viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.78598 13.4469L16.0005 7.23262L22.2184 13.4502L25.8344 9.83415L16.0005 0L6.16992 9.83087L9.78598 13.4469Z"
        fill="#F3BA2F"
      />
      <path d="M7.23221 15.9998L3.61621 12.3838L3.53575e-05 16L3.61603 19.616L7.23221 15.9998Z" fill="#F3BA2F" />
      <path
        d="M9.78592 18.5538L16.0005 24.7681L22.2181 18.5508L25.8361 22.1648L25.8344 22.1668L16.0005 32.0007L6.16961 22.1701L6.16455 22.1651L9.78592 18.5538Z"
        fill="#F3BA2F"
      />
      <path d="M28.385 19.6176L32.0012 16.0015L28.3852 12.3855L24.769 16.0016L28.385 19.6176Z" fill="#F3BA2F" />
      <path
        d="M19.6684 15.9985H19.6699L16.0005 12.3291L13.2888 15.0408H13.2885L12.9771 15.3525L12.3344 15.9952L12.3293 16.0003L12.3344 16.0056L16.0005 19.6717L19.6699 16.0023L19.6717 16.0003L19.6684 15.9985Z"
        fill="#F3BA2F"
      />
      <path
        d="M37.6384 7.75391H45.5032C47.4551 7.75391 48.9312 8.25485 49.9316 9.25674C50.7057 10.0327 51.0927 10.9944 51.0927 12.1416V12.1901C51.0927 12.6749 51.0328 13.1033 50.9122 13.4748C50.7919 13.8469 50.6312 14.1818 50.4302 14.4808C50.2298 14.78 49.9968 15.0426 49.7319 15.2686C49.4668 15.4951 49.1819 15.6892 48.8769 15.8504C49.858 16.2225 50.6304 16.7272 51.1935 17.3656C51.7564 18.0043 52.0382 18.8892 52.0382 20.0202V20.0685C52.0382 20.8445 51.8891 21.5231 51.5906 22.1052C51.2921 22.6867 50.8645 23.1718 50.3077 23.5597C49.7508 23.9477 49.0813 24.2384 48.2988 24.4325C47.5163 24.6263 46.6491 24.7231 45.6975 24.7231H37.6384V7.75391ZM44.7169 14.6142C45.5413 14.6142 46.196 14.4732 46.6805 14.1901C47.1652 13.9073 47.4076 13.4506 47.4076 12.8205V12.772C47.4076 12.2066 47.1973 11.7744 46.7773 11.4751C46.357 11.1761 45.7509 11.0265 44.9593 11.0265H41.2745V14.6142H44.7169ZM45.7109 21.4508C46.5351 21.4508 47.1812 21.3017 47.6503 21.0024C48.1189 20.7034 48.3534 20.2386 48.3534 19.6083V19.56C48.3534 18.9943 48.135 18.546 47.6988 18.2144C47.2623 17.8835 46.5594 17.7177 45.5896 17.7177H41.2745V21.4511H45.7109V21.4508Z"
        fill="#F3BA2F"
      />
      <path d="M56.7222 7.75391H60.4558V24.7236H56.7222V7.75391Z" fill="#F3BA2F" />
      <path
        d="M66.1104 7.75391H69.5523L77.504 18.2025V7.75391H81.1888V24.7236H78.0133L69.7949 13.9359V24.7236H66.1104V7.75391Z"
        fill="#F3BA2F"
      />
      <path
        d="M92.4916 7.6333H95.9337L103.207 24.7241H99.3036L97.752 20.9182H90.5763L89.0249 24.7241H85.2183L92.4916 7.6333ZM96.4188 17.6209L94.164 12.1181L91.91 17.6209H96.4188Z"
        fill="#F3BA2F"
      />
      <path
        d="M107.237 7.75391H110.68L118.631 18.2025V7.75391H122.316V24.7236H119.14L110.922 13.9359V24.7236H107.237V7.75391Z"
        fill="#F3BA2F"
      />
      <path
        d="M135.752 25.0142C134.507 25.0142 133.352 24.7877 132.285 24.3356C131.218 23.8834 130.297 23.2649 129.521 22.4809C128.745 21.6971 128.139 20.7718 127.703 19.7052C127.267 18.6384 127.049 17.499 127.049 16.2868V16.2385C127.049 15.0264 127.267 13.8913 127.703 12.8325C128.139 11.774 128.745 10.8447 129.521 10.0447C130.297 9.24476 131.226 8.61416 132.309 8.15365C133.391 7.69314 134.588 7.46289 135.897 7.46289C136.688 7.46289 137.411 7.52785 138.066 7.65675C138.721 7.78641 139.314 7.96384 139.848 8.19004C140.382 8.41651 140.874 8.69124 141.327 9.01426C141.779 9.33777 142.2 9.69314 142.588 10.0811L140.212 12.8204C139.549 12.2226 138.874 11.7535 138.188 11.4143C137.5 11.0752 136.729 10.9053 135.873 10.9053C135.161 10.9053 134.503 11.0428 133.897 11.3175C133.291 11.5923 132.77 11.9719 132.333 12.4567C131.897 12.9414 131.558 13.5033 131.315 14.1415C131.073 14.7802 130.952 15.4629 130.952 16.19V16.2383C130.952 16.9654 131.073 17.6527 131.315 18.2987C131.558 18.9455 131.892 19.5109 132.321 19.9956C132.749 20.4804 133.266 20.8646 133.872 21.1474C134.479 21.4305 135.145 21.5715 135.873 21.5715C136.843 21.5715 137.662 21.3938 138.333 21.0382C139.004 20.6831 139.671 20.1981 140.333 19.5837L142.709 21.9837C142.272 22.4526 141.819 22.8729 141.351 23.2442C140.882 23.6162 140.369 23.9352 139.812 24.2021C139.254 24.4685 138.644 24.671 137.982 24.8079C137.318 24.9452 136.575 25.0142 135.752 25.0142Z"
        fill="#F3BA2F"
      />
      <path
        d="M147.103 7.75391H159.878V11.0753H150.788V14.5177H158.788V17.8388H150.788V21.4025H160V24.7236H147.103V7.75391Z"
        fill="#F3BA2F"
      />
    </svg>
  )
}

export default Binance
