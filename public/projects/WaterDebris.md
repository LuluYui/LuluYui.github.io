# Water Debris Detection

## Overview
This project focuses on detecting water debris using computer vision. Below are the results from our prediction model.

Location: Aberdeen Reservoirs

## Prediction Results

### Debris Detection
Here are some examples of the model detecting debris in water bodies.

![Debris Detection 1](/projects/WaterDebris/DJI_20250721174213_0004_1_1.jpg "Detection Confidence: High")

![Debris Detection 2](/projects/WaterDebris/DJI_20250721175501_0042_1_0.jpg "Detection Confidence: Medium")

### False Positives & Analysis
We also analyze false positives (FP) to improve the model.

![False Positive Example](/projects/WaterDebris/FP/DJI_20250715145328_0020_1_2.jpg "False Positive Analysis")

## Technical Details
- **Model:** [Model Name/Type]
- **Framework:** [PyTorch/TensorFlow]
- **Dataset:** DJI Mavic 3 Pro Aerial Imagery, 

## Future Work
- Improve accuracy on small objects.
- Expand dataset to include more diverse water conditions.

___

## Data Source & Acknowledgements
###### The model was trained using the **FloW-Img** dataset. We utilized the training set available at FigShare, which was originally collected and annotated by **Guangchao Qiao, Mingxiang Yang, and Hao Wang**.


###### [ Qiao, G., Yang, M. & Wang, H. An annotated Dataset and Benchmark for Detecting Floating Debris in Inland Waters. *Sci Data* **12**, 385 (2025). ](https://doi.org/10.1038/s41597-025-04594-9)
