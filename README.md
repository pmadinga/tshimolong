# Tshimolong
I am tasked to deliver a web application as my assignment to prove my skills as both a web developer and a software developer. For context I will call my web app **Tshimolong surverys**

### Important notes  
`dark navy - #1F4863`  
`orange - #FFAA2C`  
Font - Arial  

## Table of contents
1. [ Project overview ](#overview)
2. [ Tech Stack ](#tech-stack)  
   - [ Design ](#design)  
   - [ Frontend development ](#frontend)  
   - [ Backend development ](#backend)  

<a name="overview"></a>
## What is due
A three page web app to collect survey data that can be presented.

-  [x]  The web app must collect personal details, food preferences and time spending preferences
-  [x] Submit the survey data a database
-  [x] Query the stored data and manipulate it to the defined specifications of the results page

## Deliverables

- **Landing Page**    
  The landing page must contain two navigationak links. A link to **Fill out the survey** and a link to **View the results**
  
- **Survey page**    
  Here a user will be able to 
  1. Input their personal information, 
  2. Select food(s) of their choice
  3. Select their time spending preferences on a scale of 1 - **strongly agree** to 5 - **strongly disagree** (rating formatted)

- **Results page**  
  The results from the survey will be available on the **results** page. From the submitted wireframes I think I can segment the results into 3 data views
  
  1. Statistical numbers in **plain text**
  2. Percentages of food preferences in a **plain text**
  3. Averages of time spending in a **plain text**

<a name="tech-stack"></a>
## Solution stack and why?

<a name="design"></a>
## Design

The design does form a part of the tech stack I believe, none of the code delivered will be possible without the **DESIGN**. Breaking it down I will have the UI mockup design, thereafter I will have the archetecture design.  

**I must mention  that the proposed mockup designs from AdobeXD may differ from the final web app, that is the advangage of beign a designer and developer😉**

### Softwares to be used for the design
- AdobeXD - Since the assignment already resembles wireframes, I will jump straight to the UI mockups
- diagrams.net - a free wireframing tool with expanded tools to design software logic

### Here are my front end UI designs
**Landing page**  

<img src="https://user-images.githubusercontent.com/42032229/138350197-c028ed43-07a1-48f0-838f-2e43a40ad4b6.jpg" alt="drawing" width="800"/>  

**Survey page**  

<img src="https://user-images.githubusercontent.com/42032229/138361364-3f2dc54e-e07c-43ec-883f-2da51d4f690a.jpg" alt="drawing" width="800"/>  

**Results page**  

<img src="https://user-images.githubusercontent.com/42032229/138574602-4203b3ca-8d19-4923-b344-3e9bf339c780.png" alt="drawing" width="800"/>  

### A look at the overall architecture (in a nutshell)  

<img src="https://user-images.githubusercontent.com/42032229/138550948-f3461526-376c-44f4-907a-b6913786a4bf.jpg" alt="drawing" width="800"/>

<a name="frontend"></a>
## Frontend development  
For Tshimolong Surveys, I will use the plain old `create-react-app`. My reason is to not over-engineer the application beyond my control. I support this decision because if it was a production platform and I had to scale the app, I can easily slap on Next.JS or even Nest.JS. I know it would be easy to scale up rather than down. 

### Libraries used
For the purpose of saving data, I will not commit the node modules. If you would clone this repo, you would have to install the packages/libraries I used  

To install the project dependencies. Run  

`$ npm install --save` - This command will install all of the packages in the package.json  

  
For transparency purposes I will also explicitly list the packages I used from the open-source [ npmjs.com ](http://npmjs.com)

  
`$ npm install --save react-router-dom`

react-router-dom handles our DOM bindings - in english, it handle our page routing😉  

  
`$ npm install react-bootstrap bootstrap@5.1.3`  

react-bootstrap offers out of the box styling. I intend to make Tshimolong Survey to be responsive and bootstap offers a great layout design. Otherwise all of the styling will be overidden  

  
`$ npm install react-hook-form`    

react-hook-form will handle the form data. The project's workflow will be React Hooks (...kind of) rather than the not so easy to understand Redux.  

`$ npm i react-google-charts`  

react-google-charts is a charts library that I intend to use for my data presentaton on the Results page

<a name="backend"></a>
## Backend  

My backend is hosted on **Firebase**. Essentially it is a Backend-as-a-Service, Slightly similar to a PaaS but with a numbered service it provides, it is enough to get a proof of concept into market. Also this is influenced by scaling. As mentioned above with using `create-react-app` then use NestJS if Tshimolong Surveys scaled up. I would apply the same approach with my backend and migrate it to **GCP** which already powers Firebase should my app scale up user volume.
