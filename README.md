# Xiaofeng Zhang
wendellz524@gmail.com | (+86) 15392924328 | [可在这里补充你的 LinkedIn 或 GitHub 链接]

## Education
- **The University of Melbourne** | Master of Information Technology | 2021 - 2022
- **University California, Riverside** | B.S. Electronic & Computer Engineering | 2019 - 2020
- **Wuhan University of Technology** | B.S. Electronic & Computer Engineering | 2019 - 2020


## Work Experience
**Bosch Innovation and Software Development (Wuxi) Co.** | Video Perception Engineer | 2024.9 - Present
*High-Fidelity Closed-Loop Simulation & RL Training*
- **3DGS & VLA Co-Simulation**: Established a pipeline integrating **Simlingo** with **3DGS** for embodied AI visual feedback, and completed closed-loop RL testing (via **Ray** & **Carla-RL**) in 3DGS-based AEB scenarios.
- **Closed-Loop AEB**: Aligned 3DGS scenes to UE5 and reconstructed the Carla engine, generating ~**1.4 hours** of AEB data to overcome physical test track constraints (e.g., 90km/h limits).
*Cross-Domain Data Synthesis & Augmentation*
- **Pattern Synthesis**: Inserted UE5 traffic sign assets into 3DGS domestic roads. Applied **Harmonizer** for pixel-level lighting fusion, enabling robust perception validation.
- **Generative Pipeline**: Engineered a **LaMa** pipeline to erase false lane lines (yielding **83+ hours** of data) and a **FLUX-fill** pipeline to balance long-tail traffic signs.
- **Inference Optimization**: Integrated **Nunchaku SVD quantization** to compress models, running efficiently on a single RTX 4090 and drastically reducing generative synthesis costs.

**Bosch Corporate Research - RIX** | Research Scientist | 2022.2 - 2024.9
- **Ground Truth System**: Developed a Monocular-3D Lane Detection model (PersFormer, BEVFusion). Mined divergent data via Perceptre-hash/IMU and verified annotation quality using CLIP-IQA & Grounded-SAM.
- **AI Infrastructure**: Deployed the AI training cluster and Docker registry. Automated network configs via Ansible and monitored pipelines with Grafana/Prometheus.
- **Distributed Storage**: Architected a high-concurrent Distributed File System (**Ceph**) optimized for massive CV datasets.

**CERT, UC Riverside** | Research Assistant | 2019 - 2021
- **Digital Twin Development**: Built a Unity client for Toyota Infotech, establishing communication among SUMO traffic, real-world vehicles, and LGSVL.
- **Performance Optimization**: Optimized PBR rendering for VR environments (Oculus Rift 2), running stably at 45Hz on RTX2080.

## Skills
- **Algorithms & Models**: 3DGS, Diffusion (FLUX-fill, WAN2.1), VLA (Simlingo), RL, BEVFusion, PersFormer, LaMa
- **Simulation & Infra**: Unreal Engine 5, Carla, Carla-RL, Ray, Nunchaku, Docker, Ceph (DFS), Ansible
- **Programming**: Python, C++, PyTorch


## Other Projects
- **Source-free Domain Adaptation** (2022): Adapted a GTA5-trained DeepLabV3 model to Cityscapes via semantic-kitti labels.
- **Feature-based IR Localization** (2020): Extracted multi-scale VGG vectors for database search; used OANet for query orientation/position calculation.
