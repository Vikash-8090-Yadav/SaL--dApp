# This repository is created under  SWOC  OPENSOURCE EVENT HACKATHON 
<img src="https://user-images.githubusercontent.com/85225156/215915297-5e1222b1-0ea6-43e3-ae87-e95530726132.png" width="885" height="430">

<h1 align="center"> 

  <img src="https://user-images.githubusercontent.com/85225156/215914335-d9a35b88-99ae-4769-8b1d-3b7e8ca3f993.png" width="35" height="30">
  <span style="color: yellow">Sal-dApp</span>
</h1>
<p> <b>This Dapp allows an organization's admin to manage employee salaries by adding them as users and storing their info in IPFS /Filecoin  and making payments in Matic , Ethereum.</b> </p>
<br>

## 📋 Table of Contents

- [Introduction](#introduction)
- [Installation](#-setting-up-the-project-locally)
- [The problem it solves](#the-problem-it-solves)
- [Challenges we ran into](#-challenges-we-ran-into)
- [TRACK](#-how-our-project-aligns-with-the-following-hackathon-tracks)
  - [FILECOIN/IPFS](#-ipfsfilecoin)
  - [ETHEREUM + POLYGON](#%EF%B8%8F-ethereum--polygon)
  - [FOSS](#-foss)
  - [ETHEREUM](#%EF%B8%8F-ethereum)
  - [REPLIT](#%EF%B8%8F-replit)
- [Technologies we used](#%EF%B8%8Ftechnologies-we-used)
- [Proof](https://github.com/Vikash-8090-Yadav/SaL--dApp)
  - [Polygon](https://github.com/Vikash-8090-Yadav/SaL--dApp)
  - [Ethereum](https://github.com/Vikash-8090-Yadav/SaL--dApp)
  - [Ipfs](https://github.com/Vikash-8090-Yadav/SaL--dApp)
  - [Rep it](https://github.com/Vikash-8090-Yadav/SaL--dApp)
- [Video Demo](#-video-demo)
- [License](#-license)




 
## 💡Introduction
The Sal-dApp provides an efficient platform for organizational administrators to effectively oversee and manage their employees' salaries by adding them as users and securely storing their information on IPFS/Filecoin network. The platform enables the administrator to process payments conveniently and seamlessly on both Matic and Ethereum blockchain networks.

### 	▶️ Experience the Live Site by Clicking the Link Below
<br>
<div align="center">
  <table>
    <tr>
      <th>Deployed On</th>
      <th>URL</th>
    </tr>
    <tr>
      <td>Vercel</td>
      <td> https://sa-l-d-app.vercel.app/</td>
    </tr>
    <tr>
      <td>Repl it</td>
      <td>https://replit.com/@17Vikashyadav/SaL-DApp</td>
    </tr>
  </table>
</div>

<br><br>

## 🚀 Setting up the project locally

<br>

## 🔍The problem it solves
As startups and established companies continue to flourish, **a common problem that exists in the industry is the mode of payment for employees**. To address this issue, we have developed a decentralized application utilizing blockchain technology that streamlines the payment process for startups and companies. **With this application, an organization's admin can easily send payments and manage employee salaries** in one central location, **eliminating** the need for multiple individuals to handle the task.

Using Blockchain technology we want to improve this problem for the payment structure of these startups and companies **by allowing an organization's admin to send payments to their employees and manage it all in one place.** So we built a decentralized infrastructure tooling application that does this work for startups/companies by adding employees and paying them a salary in one click.
**Our decentralized application** aims to simplify the process of paying employees by allowing a single admin to manage and distribute salaries for all employees in the company. By streamlining this process and **removing the need for multiple individuals to handle it**, startups and companies can save valuable resources and streamline their workflow. Additionally, the application is designed to pay employees based on their position, ensuring fair and efficient compensation for all employees

We aim to leverage the advancements in blockchain technology to streamline the **traditional process of salary management for startups and companies, making it easily accessible with a single click**. Additionally, we plan to continue improving and expanding the application by incorporating features such as the ability for multiple startups and companies to register and manage their employee's additional details and try to make a blog section for this on the blockchain , ultimately making it a comprehensive tool for enhancing workflow and productivity.

<br>

## 💥 Challenges we ran into
During the development of this project, several obstacles were encountered and valuable lessons were learned. This was the team's first experience working with **Next.js, and they are pleased to have successfully created a functioning project.**

Working on a project with my team member, we encountered **some difficulties** with understanding certain technologies, specifically **Next.js and Tailwind.** My team member **was not as familiar** with these technologies and it was a hard task for him to understand. Additionally, I also faced some difficulties in understanding a specific aspect of the project, the **blockchain part**. However, we were determined to **overcome these obstacles and worked together** to tackle the problem. Through our combined efforts, we were able to understand the technology clearly and were ultimately successful in completing the project to our satisfaction. **Despite the initial difficulties, we were able to understand the technology together and achieve success as a team**.

Aesthetics were improved by utilizing Tailwind CSS. Initially, the team *struggled* with determining whether to **permit external access to the solidity functions, ultimately opting to restrict usage to the contract deployer.**

However, to allow for proper testing by **judges, the "onlyOwner" modifier was removed **to enable full access to the application's capabilities. **Difficulty** was also encountered when attempting to **integrate a "Connect Wallet" button** across all components in the Next.js framework, requiring duplication of the feature in each necessary component.

Efforts were made to minimize gas costs by simplifying the Solidity code and optimizing the contract.

<br>

## 🏁 How Our Project Aligns with the Following Hackathon Tracks 


### 📁 IPFS/FILECOIN
Storing images on a blockchain can be a costly endeavor due to the large amount of storage space required. To address this issue, one common solution is to utilize the InterPlanetary File System (IPFS). IPFS is a peer-to-peer network that allows for the storage and retrieval of large files, such as images, in a decentralized manner. By utilizing IPFS, we can store all past and present images on the network, rather than on the blockchain node itself.

When it comes to displaying images on a card along with other information such as a user's name, position, wallet address, and date and time, we can utilize the Content Identifier (CID) returned by IPFS. The CID acts as a unique identifier for each image stored on the IPFS network, allowing us to easily retrieve and display the image on a card. This approach is not only cost-effective but also allows for a more efficient and streamlined process of storing and displaying images on a blockchain.

### ⛓️ ETHEREUM + POLYGON
Our project has been successfully deployed on the Polygon Mumbai testnet blockchain and we are using the Matic (Mumbai) token to pay our employees' salaries according to their positions. We have implemented the Web3 model to establish a connection with the Polygon network and have deployed our smart contract on the network as well. This allows for seamless integration of the Polygon network into our project for deployment and salary distribution purposes.

### <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1024px-Tux.svg.png" width="20" height="20"> FOSS
We are proud to participate in the hackathon under the Free and Open-Source Software (FOSS) track with our project that is fully built using FOSS technologies such as Solidity for smart contract development, Next and Node.js for front-end and back-end development and Hardhat for testing and deployment. It is available for anyone to download, use, modify and distribute via Github, free of cost. We believe in the power of open-source software and are committed to making our project accessible and open to contributions from the community. We are excited to share our project and continue to improve it through collaboration and contributions in the FOSS spirit.

## ⚡️ ETHEREUM
We are thrilled to be participating in the hackathon under the Ethereum track with our innovative project that utilizes the power of blockchain technology to give salary to the employees. By utilizing the Georli testnet, which is a test network for the Ethereum blockchain, we are able to take advantage of the security and transparency provided by the Ethereum platform. We understand the importance of leveraging this technology to create new and efficient ways of conducting business. Our project is still in the development phase, but we are excited to have the opportunity to share it with the community and continue to build and improve it through collaboration and contributions in the Ethereum ecosystem

## ☁️ REPLIT
We are thrilled to be participating in the hackathon under the Repl.it track and utilizing the power of this free, open-source platform to seamlessly integrate the latest languages and technologies such as Node.js, JavaScript, MERN, Next.js, and React.js into our project. We have chosen to build our project using Next.js (Node.js) and have written all of our smart contract code in Solidity and JSX on Repl.it. While we faced some challenges, such as issues with replit.nix file integration and determining the proper entry point for our project, we were able to overcome these obstacles through utilizing the extensive documentation available on Repl.it. We are proud to announce that we have successfully deployed our project on Repl.it.

<br>

## 🛠️Technologies we used
| Technology | Description | URL |
|----------|----------|----------|
| Next Js | JavaScript framework for building server-rendered or statically-generated applications | https://nextjs.org/ |
| Tawlind Css | Utility-first CSS framework for rapidly building custom designs | https://tailwindcss.com/ |
| Hardhat | Ethereum development environment | https://hardhat.org/ |
| Etherjs | Ethereum JavaScript API | 	https://docs.ethers.org/v5/ |
| Polygon | Polygon (formerly known as Matic Network) is a Layer 2 scaling solution for Ethereum that enables faster and cheaper transactions on the blockchain. It leverages Ethereum as its main backbone while adding its own network of sidechains, allowing for efficient scaling and interoperability with other Ethereum-based systems. | https://polygon.technology/ |
| Ipfs/Filecoin | Decentralized file storage and content distribution | https://ipfs.io/ & https://filecoin.io/ |
| Repl it | Online code editor | https://repl.it/ |
| Ethereum | 	Decentralized blockchain platform for building decentralized applications | https://ethereum.org/ |
</h4>

<br>

## 🎥 Video Demo
https://youtu.be/74lFjQw34pI


<br >

## 🔖 License
MIT 



