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
- **Algorithms & Models**: 3DGS, Diffusion Models (FLUX-fill, WAN2.1), BEVFusion, PersFormer, LaMa, Harmonizer, CLIP-IQA
- **Simulation & Engines**: Unreal Engine 5 (Lumen), Carla, Unity
- **Engineering & Infrastructure**: Nunchaku (SVD Quantization), Docker Registry, Ansible, Ceph (DFS), Prometheus, Grafana
- **Programming**: Python, C++, PyTorch

# Work Experience
## Bosch Innovation and Software Development (Wuxi) Co.
- **Position**: Video Perception Engineer
- **Period**: 2024.9 - Present
### **Responsibilities**:

#### High-Fidelity Closed-Loop Simulation (3DGS & UE5 & Carla)
- **Closed-Loop AEB Simulation**: Aligned 3DGS scenes to Unreal Engine 5 (UE5) and reconstructed the Carla simulation engine to enable closed-loop simulation for Autonomous Emergency Braking (AEB) test tracks. 
- **Dynamic Lighting & Rendering**: Integrated UE5's Lumen global illumination system to achieve dynamic lighting interactions with static 3DGS scenes.
- **Edge-Case Data Generation**: Generated 1,000 high-quality clips of AEB test track data, overcoming the physical constraints of domestic test tracks (e.g., inability to support 90km/h speed limits and crash tests), providing crucial synthetic data for extreme driving scenarios.

#### Cross-Domain Data Synthesis
- **Traffic Sign Pattern Synthesis**: Developed a reverse-integration pipeline to insert UE5 high-fidelity traffic sign assets into 3DGS-reconstructed domestic roads, generating datasets featuring overseas traffic sign patterns.
- **Image Harmonization**: Applied the Harmonizer framework to optimize lighting and background inconsistencies between the inserted assets and original scenes, enabling highly realistic pixel-level fusion for perception validation.

#### Automated Generative Data Augmentation Pipeline
- **Rural Road Data Inpainting**: Utilized LaMa (Resolution-robust Inpainting) to erase falsely predicted lane lines in complex rural road scenarios. Engineered a pipeline to generate 2,000 clips of high-quality augmented data for perception model fine-tuning and robustness enhancement.
- **Long-Tail Data Balancing via FLUX-fill**: Built an automated image retouching pipeline based on FLUX-fill to directionally augment low-frequency traffic signs, addressing dataset distribution imbalance.
- **Inference Optimization**: Integrated Nunchaku SVD quantization into the pipeline, compressing the model to run highly efficiently on a single RTX 4090 GPU, significantly reducing the cost of generative data synthesis.

## Bosch Corporate Research - RIX
- **Position**: Research Scientist
- **Period**: 2022.2 - 2024.9
### **Responsibilities**:
#### Ground Truth System & Algorithms
- **Perception Model Development**: Developed a Monocular-3D Lane Detection model based on PersFormer and BEVFusion for the Ground Truth System.
- **Active Learning & Data Selection**: Utilized Perceptre-hash, Timestamps, and IMU information to mine hard/divergent data for human annotation.
- **Annotation Quality Assurance**: Deployed CLIP-IQA to filter blurred and low-quality samples. Designed rule-based functions integrated with Grounded-SAM to verify lane line labeling quality.
 
#### IT Infrastructure & DevOps (AI Training Cluster)
- **Cluster Deployment**: Set up and maintained the department's local AI training cluster and built a local registry for Docker images.
- **DevOps**: Fulfilled IT Lab network requirements and automated configurations using Ansible and playbooks. Built a monitoring system based on Grafana & Prometheus.
- **Distributed Storage**: Architected a high-concurrent Distributed File System (DFS) using Ceph optimized for massive computer vision datasets.

## Center for Environmental Research and Technology, UC Riverside
- **Position**: Research Assistant
- **Period**: 2019 - 2021
### **Responsibilities**:
- **Digital Twin Development**: Built a digital twin client for Toyota Infotech based on the Unity Engine. Adapted LGSVL to the original project, and established communication among SUMO's traffic flow, real-world vehicles, and the Unity Engine.
- **Tech Art & Optimization**: Optimized graphic performance for PBR rendering to ensure Oculus Rift 2 VR environments run stably at a minimum of 45Hz on an RTX2080 GPU.

# Other Projects
## Source-free semi-supervised domain adaptation for Image Segmentation (2022)
- Adapted a DeepLabV3 model trained on GTA5 to the Cityscapes dataset using labels from semantic-kitti to bridge the domain gap. 

## Feature-based IR for indoor localization (2020)
- Extracted multi-scale contrast image vectors using VGG as keys for the image database. Utilized cosine distance for similarity search and OANet to calculate the query image's orientation and position.
