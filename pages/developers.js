import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaDiscord,
  FaEthereum,
  FaHome,
  FaGithub
} from "react-icons/fa";
import { P, Flex, Box, Image, H2, H3 } from "@ui";
import Header from "@ui/organisms/Header";
import loot from "../public/community.png";

const IconButton = ({ icon, ...props }) => (
  <Box
    p={3}
    borderRadius="default"
    borderColor="borderColorAlt"
    borderWidth={1}
    {...props}
  >
    {icon}
  </Box>
);

const Button = props => (
  <Box
    px={3}
    py={3}
    fontSize={18}
    textAlign="center"
    fontFamily="Source Code Pro"
    fontWeight="600"
    borderRadius="default"
    bg="#5C5C5C"
    sx={{
      cursor: "pointer"
    }}
    {...props}
  />
);

const Tag = ({ tag, color, ...props }) => (
  <Box
    py={1}
    px={3}
    bg={color}
    borderRadius="100px"
    fontFamily="times"
    {...props}
  />
);

const CardGrid = props => (
  <Box
    p={3}
    width={1}
    sx={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: 18,

      "@media screen and (max-width: 1200px)": {
        gridTemplateColumns: "1fr 1fr"
      },

      "@media screen and (max-width: 600px)": {
        gridTemplateColumns: "1fr"
      }
    }}
    maxWidth={1200}
    my={5}
    {...props}
  />
);

const Card = ({ title, description, action, image, cost, lootOnly }) => (
  <Flex
    flex={1}
    flexDirection="column"
    borderRadius="default"
    bg="backgroundSecondary"
    overflow="hidden"
    sx={{
      height: "100%"
    }}
  >
    <Box flex={1}>
      <Box p={3} m={1}>
        <H3 fontWeight={400} fontSize={28} fontFamily="times">
          {title}
        </H3>
        <P fontWeight={400} color="rgba(255,255,255,0.8)">
          {description}
        </P>
        {lootOnly && (
          <Flex mt={3}>
            <Tag color="#ffffff1f">Loot</Tag>
          </Flex>
        )}
      </Box>
    </Box>

    <Box p={3} m={1}>
      <Flex mb={3}>
        <IconButton mr={2} icon={<FaGithub />} />
        <IconButton icon={<FaHome />} />
      </Flex>
      <Button>{action}</Button>
    </Box>
  </Flex>
);

const Home = () => {
  return (
    <Flex flex={1} flexDirection="column" bg="background">
      <Header />

      <Box p={0} position="relative">
        <Box
          width={1}
          borderColor="borderColorAlt"
          position="relative"
          //borderWidth={2}
          //borderRadius="default"
          height={450}
          overflow="auto"
          sx={{
            filter: "brightness(0.2)",
            backgroundImage: "url(/public/loot.png)",
            backgroundSize: "cover"
          }}
        >
          <Image
            src={loot}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </Box>

        <Flex
          flexDirection="column"
          px={3}
          alignItems="center"
          position="absolute"
          width={1}
          maxWidth={640}
          top={50}
          left="50%"
          sx={{
            transform: "translateX(-50%)"
          }}
        >
          <div style={{ fontFamily: "times", fontSize: 60 }}>
            Build with Loot
          </div>
          <P
            fontSize={20}
            mt={3}
            fontWeight={400}
            color={"rgba(255,255,255,0.8)"}
            textAlign="center"
          >
            The lootverse is growing every day and a lot of the projects,
            libraries, and assets are open source. Come join the fun! WAGMI!
          </P>

          <Box sx={{ visibility: ["hidden", "hidden", "unset", "unset"] }}>
            <Flex mt={4}>
              <a
                target="_blank"
                href="https://discord.com/invite/NXEntTSHgy"
                rel="noreferrer"
              >
                <IconButton mr={2} icon={<FaDiscord size={20} />} />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/lootproject"
                rel="noreferrer"
              >
                <IconButton mr={2} icon={<FaTwitter size={20} />} />
              </a>
              <a
                target="_blank"
                href="https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7#code"
                rel="noreferrer"
              >
                <IconButton mr={2} icon={<FaEthereum size={20} />} />
              </a>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Flex flexDirection="column" alignItems="center" mb={4} width={1}>
        <P mt={5}>Community Libraries</P>

        <H2 mt={2}>Get the Data</H2>

        <CardGrid mt={4}>
          <Card
            title="Loot Rarity"
            description="Loot attributes and rarities sheet by @AustinGreen"
            action="view on github"
            image="https://picsum.photos/200/300"
          />
          <Card
            title="dhof-loot"
            description="All bags, item occurrences, bag rarity, and images by @anish-agnihotri and @ktasbas"
            action="view on github"
            image="https://picsum.photos/200/300"
          />
          <Card
            title="Loot subgraph"
            description="Loot bag, owner, and transfer subgraph by @shahruz"
            action="view on github"
            image="https://picsum.photos/200/300"
          />
          <Card
            title="Loot Rarity"
            description="hi"
            action="view on github"
            image="https://picsum.photos/200/300"
          />
        </CardGrid>
        <img src="/footer.png" />
      </Flex>
    </Flex>
  );
};

export default Home;
