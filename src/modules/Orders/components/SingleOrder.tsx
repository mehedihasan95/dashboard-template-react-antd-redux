import React, { useRef } from "react";

import SingleContainer from "../../../common/Container/SingleContainer";
import PrintButton from "../../../common/Antd/Button/PrintButton";
import { useDownloadPDF } from "../../../hooks/useDownloadPDF";
import PDFButton from "../../../common/Antd/Button/PDFButton";
import { Space } from "antd";
import A4PageContainer from "../../../common/A4PageContainer/A4PageContainer";

const SingleOrder: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const downloadPDF = useDownloadPDF();

  return (
    <React.Fragment>
      <SingleContainer
        title='Single order view'
        children={
          <A4PageContainer
            ref={ref}
            children={
              <>
                <h1>
                  Who needs Michelin stars? Serve these dishes and get ready for
                  rave reviews!
                </h1>
                <p>
                  This collection of dishes brings together a variety of tastes
                  from the nutty crunch of a stir-fried salad to the aromatic
                  richness of traditional mutton rezala. With easy-to-follow
                  steps and ingredients that bring out the best of each dish,
                  these recipes are sure to impress.
                </p>
                <p>
                  Wash the chicken breast and cut into medium-size chunks. Apply
                  salt, mustard oil, lemon juice, and red chilli powder on the
                  chicken pieces and keep aside for 10-15 minutes. Combine the
                  coriander leaves, spinach, mint leaves, ginger, garlic, and
                  green chillies. Grind into a smooth paste. Now, add curd and
                  spices. Coat the chicken pieces very well in it. Cover the
                  marinated chicken and keep it aside at least for 20 minutes.
                </p>
                <p>
                  Soak the wooden skewers in normal water for about 4-5 minutes.
                  Apply some oil on the skewers and arrange the pieces of
                  chicken onto the skewers. Spread some more oil on top of the
                  chicken pieces.
                </p>
                <p>
                  Preheat the oven to 350° F for 5 minutes and place the skewers
                  in the oven. Leave to grill for about 15-18 minutes. Keep
                  checking and turn the skewer sticks to cook evenly from all
                  sides. Grill until the chicken is well done.
                </p>
              </>
            }
          />
        }
        extra={
          <Space>
            <PrintButton />
            <PDFButton onClick={() => downloadPDF(ref, "example.pdf")} />
          </Space>
        }
      />
    </React.Fragment>
  );
};

export default SingleOrder;
