# Personal Information
- **Name**: Xiaofeng Zhang
- **Email**: wendellz524@gmail.com
- **Phone**: (+86) 15392924328

# Education
## The University of Melbourne
- **Degree**: Master of Information Technology
- **Period**: 2021 - 2022

## University California, Riverside
- **Degree**: Bachelor of Electronic & Computer Engineering
- **Period**: 2019 - 2020

## Wuhan University of Technology
- **Degree**: Bachelor of Electronic & Computer Engineering
- **Period**: 2019 - 2020

# Skills Stack
- **Algorithms & Models**: 3DGS, Diffusion Models (FLUX-fill, WAN2.1), VLA Models (Simlingo), Reinforcement Learning, BEVFusion, PersFormer, LaMa
- **Simulation & Frameworks**: Unreal Engine 5, Carla, **Carla-RL**, **Ray (Distributed Computing)**, Unity
- **Engineering & Infrastructure**: Nunchaku (SVD Quantization), Docker Registry, Ansible, Ceph (DFS), Prometheus, Grafana
- **Programming**: Python, C++, PyTorch

# Work Experience
## Bosch Innovation and Software Development (Wuxi) Co.
- **Position**: Video Perception Engineer
- **Period**: 2024.9 - Present
### **Responsibilities**:

#### High-Fidelity Closed-Loop Simulation & RL Training
- **3DGS & VLA Co-Simulation**: Established a high-performance co-simulation pipeline integrating **Simlingo** (Vision-Language-Action model) with **3DGS** environments, enabling high-fidelity visual feedback for embodied AI agents.
- **Distributed Reinforcement Learning**: Completed closed-loop RL testing within 3DGS-based AEB test track scenarios. Leveraged **Ray** for distributed computing and the **Carla-RL** framework to train and validate VLA models in complex environments.
- **Closed-Loop AEB Simulation**: Aligned 3DGS scenes to Unreal Engine 5 (UE5) and reconstructed the Carla simulation engine to enable end-to-end closed-loop testing for AEB systems.
- **Edge-Case Data Generation**: Generated approximately **1.4 hours** (1,000 clips) of high-quality AEB test track data, overcoming physical constraints of domestic tracks (e.g., 90km/h speed limits/collision tests) to support extreme scenario validation.

#### Cross-Domain Data Synthesis
- **Traffic Sign Pattern Synthesis**: Developed a reverse-integration pipeline to insert UE5 high-fidelity traffic sign assets into 3DGS-reconstructed domestic roads, generating datasets featuring overseas traffic sign patterns.
- **Image Harmonization**: Applied the Harmonizer framework to optimize lighting and background inconsistencies, enabling pixel-level fusion for perception validation.

#### Automated Generative Data Augmentation Pipeline
- **Rural Road Data Inpainting**: Utilized LaMa to erase falsely predicted lane lines in complex rural scenarios, generating over **83 hours** (10,000 clips) of augmented data for model fine-tuning.
- **Long-Tail Data Balancing via FLUX-fill**: Built an automated image retouching pipeline based on FLUX-fill to directionally augment low-frequency traffic signs.
- **Inference Optimization**: Integrated **Nunchaku SVD quantization**, optimizing large model inference to run efficiently on a single RTX 4090, significantly reducing the cost of generative data synthesis.

## Bosch Corporate Research - RIX
- **Position**: Research Scientist
- **Period**: 2022.2 - 2024.9
### **Responsibilities**:
#### Ground Truth System & Algorithms
- **Perception Model Development**: Developed a Monocular-3D Lane Detection model based on PersFormer and BEVFusion.
- **Active Learning & Data Selection**: Utilized Perceptre-hash and IMU information to mine hard/divergent data for human annotation.
- **Annotation Quality Assurance**: Deployed CLIP-IQA and Grounded-SAM to filter low-quality samples and verify lane line labeling quality.
 
#### IT Infrastructure & DevOps (AI Training Cluster)
- **Cluster Deployment**: Set up the department's local AI training cluster and built a local registry for Docker images.
- **DevOps & Monitoring**: Automated configurations using Ansible and built a monitoring system based on Grafana & Prometheus.
- **Distributed Storage**: Architected a high-concurrent Distributed File System (DFS) using **Ceph** optimized for massive CV datasets.

## Center for Environmental Research and Technology, UC Riverside
- **Position**: Research Assistant
- **Period**: 2019 - 2021
### **Responsibilities**:
- **Digital Twin Development**: Built a digital twin for Toyota Infotech based on Unity Engine, establishing communication among SUMO traffic flow, real-world vehicles, and LGSVL.
- **Performance Optimization**: Optimized PBR rendering to ensure VR environments (Oculus Rift 2) run stably at 45Hz on RTX2080.

# Other Projects
## Source-free semi-supervised domain adaptation for Image Segmentation (2022)
- Adapted a DeepLabV3 model trained on GTA5 to the Cityscapes dataset using labels from semantic-kitti. 

## Feature-based IR for indoor localization (2020)
- Extracted image vectors using VGG for image database search, using OANet to calculate query image orientation and position.
