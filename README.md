# Xiaofeng Zhang
wendellz524@gmail.com · (+86) 15392924328

---

## Education

| Degree | Institution | Period |
|---|---|---|
| M.S. Information Technology | The University of Melbourne | 2021 – 2022 |
| B.S. Electronic & Computer Engineering | University of California, Riverside | 2019 – 2020 |
| B.S. Electronic & Computer Engineering | Wuhan University of Technology | 2019 – 2020 |

---

## Work Experience

### Bosch Innovation and Software Development (Wuxi) Co. — Video Perception Engineer
`2024.9 – Present`

**Closed-Loop Simulation & Reinforcement Learning**
- **3DGS × VLA Co-Simulation**: Designed a production-grade co-simulation pipeline coupling Simlingo (VLA model) with 3DGS-rendered environments, enabling photorealistic visual feedback for embodied-AI closed-loop training.
- **Distributed RL Training**: Orchestrated distributed closed-loop RL experiments inside 3DGS AEB tracks using Ray for multi-node scheduling and Carla-RL as the training backbone; validated policy convergence under NCAP-equivalent scenarios.
- **AEB Closed-Loop Reconstruction**: Aligned 3DGS reconstructions to UE5 coordinate frames and re-engineered the Carla simulation engine, enabling deterministic end-to-end AEB evaluation without physical track dependency.
- **Edge-Case Data Generation**: Synthesized ~1.4 hrs (1,000 clips) of high-speed AEB footage (>90 km/h, collision events) that are physically infeasible on domestic test tracks, expanding coverage for safety-critical validation.

**Cross-Domain Data Synthesis & Generative Augmentation**
- **Traffic Sign Domain Transfer**: Engineered a reverse-integration pipeline embedding UE5 photorealistic traffic sign assets into 3DGS-reconstructed domestic road scenes, generating geographically diverse perception datasets.
- **Image Harmonization**: Applied the Harmonizer framework for lighting-consistent compositing, achieving pixel-level color and luminance coherence between inserted assets and background scenes.
- **Lane-Line Inpainting at Scale**: Deployed LaMa to systematically erase false-positive lane predictions in complex rural scenarios, producing 83+ hrs (10,000 clips) of clean ground-truth data for model fine-tuning.
- **Long-Tail Augmentation via FLUX-fill**: Built a fully automated retouching pipeline using FLUX-fill to directionally over-sample rare traffic sign categories, reducing class imbalance without manual collection.
- **Inference Optimization**: Integrated Nunchaku SVD quantization to compress multi-billion-parameter generative models onto a single RTX 4090, cutting synthesis cost by over 60% while preserving output fidelity.

---

### Bosch Corporate Research – RIX — Research Scientist
`2022.2 – 2024.9`

**Perception Research & Ground Truth**
- **Monocular 3D Lane Detection**: Developed a unified detection model combining PersFormer's perspective transformer with BEVFusion's cross-modal fusion, achieving robust lane geometry estimation from monocular RGB input.
- **Active Learning & Hard-Sample Mining**: Applied perceptual hashing and IMU-derived motion signatures to identify divergent, annotation-worthy frames, reducing labeling cost while increasing model coverage on edge cases.
- **Annotation Quality Assurance**: Deployed CLIP-IQA for image quality filtering and Grounded-SAM for semantic verification of lane-line labels, reducing annotation error rate across large-scale datasets.

**AI Infrastructure & DevOps**
- **Cluster Deployment**: Stood up the department's on-premise GPU training cluster from bare-metal, including a self-hosted Docker registry for image version management.
- **Automation & Monitoring**: Automated node configuration and provisioning via Ansible playbooks; built a Grafana + Prometheus observability stack covering GPU utilization, job queues, and storage health.
- **Distributed File System**: Architected a high-throughput Ceph DFS tuned for random-read CV workloads, supporting concurrent access from the full training cluster without I/O bottlenecks.

---

### Center for Environmental Research and Technology, UC Riverside — Research Assistant
`2019 – 2021`

- **Digital Twin for Connected Vehicles**: Built a Unity-based digital twin for Toyota Infotech integrating SUMO traffic simulation, physical vehicle telemetry, and LGSVL autonomous driving simulator via a unified middleware bridge.
- **VR Rendering Optimization**: Profiled and optimized PBR material pipelines to sustain a stable 45 Hz frame rate in Oculus Rift 2 on RTX 2080 hardware, meeting comfort thresholds for extended VR use.



---



## Skills

- **Algorithms & Models**: 3DGS, Diffusion Models (FLUX-fill, WAN2.1), VLA (Simlingo), Reinforcement Learning, BEVFusion, PersFormer, LaMa
- **Simulation & Infra**: Unreal Engine 5, Carla, Carla-RL, Ray, Nunchaku (SVD Quant), Docker, Ceph (DFS), Ansible, Prometheus, Grafana
- **Programming**: Python, C++, PyTorch

---

## Selected Projects

- **Source-Free Semi-Supervised Domain Adaptation (2022)**: Adapted a GTA5-pretrained DeepLabV3 segmentation model to the Cityscapes domain using pseudo-labels derived from semantic-kitti, without access to source-domain data during adaptation.
- **Feature-Based Indoor Localization (2020)**: Constructed a multi-scale VGG feature index for image-retrieval-based localization; integrated OANet for robust homography estimation to recover 6-DoF query pose.
