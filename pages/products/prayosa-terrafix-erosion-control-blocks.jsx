import React from "react";
import styles from "../../styles/utils.module.scss";
import image1 from "../../public/product-2-1.jpg";
import image2 from "../../public/product-2-2.jpg";
import image3 from "../../public/product-2-3.jpg";
import image4 from "../../public/product-2-4.png";
import image5 from "../../public/product-2-5.png";
import image6 from "../../public/product-2-6.png";
import image9 from "../../public/product-2-9.jpg";
import image10 from "../../public/product-2-10.jpg";
import image11 from "../../public/product-2-11.jpg";
import image12 from "../../public/product-2-12.jpg";
import image13 from "../../public/product-2-13.jpg";
import image14 from "../../public/product-2-14.jpg";
import image15 from "../../public/product-2-15.jpg";
import Slider from "../../components/Slider";

const erosionControlBlocks = () => {
  const set1 = [{ img: image1 }, { img: image2 }, { img: image3 }];
  const set2 = [{ img: image4 }, { img: image5 }, { img: image6 }];
  const set3 = [
    { img: image9 },
    { img: image10 },
    { img: image11 },
    { img: image12 },
    { img: image13 },
    { img: image14 },
    { img: image15 },
  ];

  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Products</p>
          <h1 className={styles.title}>
            PraYoSa Terrafix Erosion Control Blocks
          </h1>
        </div>
        <Slider images={set1} />
        <p className={styles.text}>
          Terrafix is an interlocking environmentally acceptable element, made
          of high strength concrete. It was specifically designed to provide a
          flexible lining where protection against wind and water erosion is
          required.
        </p>
        <p className={styles.text}>
          They are available in three different thicknesses and can be laid in a
          variety of configurations to suit most site conditions. This makes it
          the ideal product to help combat the rapid degradation of our rivers
          and streams, caused by unbridled urbanisation and poor farming
          practices all over South Africa and the world.
        </p>
        <p className={styles.text}>
          Terrafix can help prevent our soil being eroded away, while still
          being permeable enough to help preserve our precious ground water
          reserves and biodiversity. The system offers one of the most cost-
          effective and speedy erosion control methods and provides a perfect
          regime for establishing vegetation. Stability improves as vegetation
          takes root.
        </p>
        <Slider images={set2} />
        <h3 className={styles.titleFour}>
          Erosion Control sustainable concrete solution
        </h3>
        <p className={styles.text}>
          Rampant urbanization in many parts of the world leads to rapid
          degradation of rivers and streams.
        </p>
        <p className={styles.text}>
          Apart from our precious soil disappearing down to the beach, so are
          our undernourished ground water reserves, our biodiversity doing
          likewise.
        </p>
        <h3 className={styles.titleFour}>Urban areas</h3>
        <p className={styles.text}>
          The “Effects of urbanization on catchment water balance” have been
          thoroughly researched and documented to the Water Research Commission
          by Professor D. Stephenson and others of the Water
        </p>
        <p className={styles.text}>
          Systems Research Group at Wits University. In a nutshell their
          findings are summarized below:
        </p>
        <blockquote className={styles.blockquote}>
          “In nature a semi-equilibrium exists between precipitation, runoff and
          infiltration into the ground. Over years the water table fluctuates
          about a mean. The construction of impermeable barriers on the surface,
          such as roads and buildings, reduce the rate of ground water
          replenishment."
        </blockquote>
        <p className={styles.text}>
          The water runs off easier and the limited permeable areas restrict
          infiltration. The groundwater level will therefore drop and the zone
          above the water table will gradually dry out. Vegetation and the soil
          characteristics will change. If we are not to affect our environment
          adversely we should attempt to return some of the storm-water we
          channel off urban areas back to the ground.”
        </p>
        <h3 className={styles.titleFour}>Permeable surfaces</h3>
        <p className={styles.text}>
          This can be accomplished by ensuring adequate permeable surfaces and
          by directing storm-water into specially selected or constructed
          seepage areas. We will then not only maintain the regime but also
          minimize design flow rates downstream
        </p>
        <p className={styles.text}>
          Surface water runoff in urban areas has been found to be ± 4 times
          higher than in rural areas of similar geographical composition.
          Impermeable buildings, roadways, parking areas and even storm-water
          drains may cover ± 20% of the total area. Reduced infiltration,
          increased runoff velocity and erosion are the direct result.
        </p>
        <h3 className={styles.titleFour}>Awareness</h3>
        <p className={styles.text}>
          According to a survey conducted for the Water Research Commission by
          consultants Economics Project Evaluation, most South Africans
          undervalue their water supply and a large percentage don’t even know
          the origin of their Municipal water. Public/private partnerships in
          the form of maintenance contracts, awarded to local communities should
          help in correcting this deficit.
        </p>
        <h3 className={styles.titleFour}>Nature Conservation</h3>
        <p className={styles.text}>
          It is all well documented fact that surface water runoff is aggravated
          by alien vegetation. A lack of understanding by large portions of
          citizens, coupled presently by substantially reduced state funding for
          nature conservation, do not contribute much toward solving these
          problems. Again the co-operation with local communities is the route
          to follow for developing nations.
        </p>
        <h3 className={styles.titleFour}>Rural areas</h3>
        <p className={styles.text}>
          The effects of overgrazing, deforestation and veld burning resulting
          in increased water runoff and soil erosion, are enormous. Ways and
          means to counter them involve strictly applied and enforced
          environmentally compatible farming methods that have been well
          documented elsewhere.
        </p>
        <blockquote className={styles.blockquote}>
          “The essence of sustainable farming is the attempt to reconcile a
          short-term survival strategy with a long-term conservation one. The
          dramatic population growth in Sub Saharan Africa , easily tempts us to
          revert back to survival strategies at the cost of natural resources.
          Meanwhile, in the developed North, protectionist government policies
          contribute to agricultural unsustainability.”
          <cite className={styles.text}>
            ~ Dr. Izak Groenewald, Centre for Sustainable Agriculture,
            University of the Free State.
          </cite>
        </blockquote>
        <h3 className={styles.titleFour}>Solutions</h3>
        <p className={styles.text}>
          Most design professionals are presently discarding some of yesterday’s
          solutions such as impervious concrete lined storm water canals.
          Instead permeable catchment storage in the form of shallow channels,
          roadways or flood plains are recommend at the head of a system,
          whereas detention pond storage was found to be most economical at the
          outlet of the catchment. It has also been found that increasing the
          permeability in most urban situations is more beneficial than reducing
          roughness in storm-water canals. Research has shown that a well
          designed hard-lawn with 25% openings can infiltrate 500L/sec/ha.
        </p>
        <h3 className={styles.titleFour}>Water Research Commission</h3>
        <p className={styles.text}>
          The Water Research Commission has suggested various measures including
          changes to Town Planning regulations and practices to achieve the
          desired effects. Increased state funding for nature conservation
          projects, would also help in raising the level of understanding
          amongst citizens. Rain water harvesting in large format drums,
          encouraged with public subsidies, could have an enormous regulating
          effect. These measures will ultimately lead to a regeneration of
          dried-up springs. A heavy responsibility also rests on the shoulders
          of engineers, architect and environmental designs to ensure that their
          projects impact positively on the environment of future generations.
        </p>
        <h3 className={styles.titleFour}>Materials</h3>
        <p className={styles.text}>
          Of the various materials available to fight erosion, dense vegetation
          cover with deep rooted proven plant species should be considered. Many
          non-invasive types are known and catalogued, adapted to various
          climatic and soil condition. In combination with plastic or natural
          fibre mats, effectiveness for light erosion control measures can be
          improved considerably.
        </p>
        <Slider images={set3} />
      </div>
    </div>
  );
};

export default erosionControlBlocks;
