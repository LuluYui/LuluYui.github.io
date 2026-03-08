---
id: 'BIMDigitalTwin'
title: 'BIM Digital Twin with DMA/PMA Analytics'
description: 'A 3D Building Information Modeling digital twin for water network visualization with real-time IoT sensor analytics.'
coverImage: '/projects/scada-screenshot.png'
tags: ['TypeScript', 'Three.js', 'ThatOpen', 'IoT', 'BIM']
category: '3D Visualization & IoT'
date: '2025-03-07'
---



# 3D Water Utility Management Platform 
#### Built with ifc.js by thatopen company

March 7, 2025
___

## Overview

This project transforms traditional water network management from boring spreadsheets into an interactive 3D experience that would enable faster, enjoyable and fun analytics experience for engineers and professionals. 

![BIM Digital Twin Dashboard](/src/projects/BIMDigitalTwin/viewer.png "3D & IoT Analytics Dashboard")
[![View Live Demo](https://img.shields.io/badge/🚀_View_Live_Demo-25D366?style=for-the-badge&logo=vercel)](https://waterleakgisplatform.vercel.app/#Viewer)


## The Problem (Why This Matters)

Water distribution network management has traditionally relied on expensive proprietary software from major vendors such as **Supermaps** and **ESRI**. These solutions impose significant licensing costs and restrict customization, limiting organizations' ability to adapt the technology to their specific operational requirements.

This project presents an alternative approach: a digital twin built entirely on **open-source technology** using **ifc.js** - a framework dedicated to providing accessible BIM tools without vendor lock-in. The solution enables organizations to view, analyze, and manage water network infrastructure in 3D without the constraints of proprietary licensing.

## Key Features

### 🗺️ Interactive 3D BIM Model Viewer
Powered by **ThatOpen**, this viewer enables users to:
- Rotate, pan, and zoom through complex water network models
- Select and inspect individual pipe segments and infrastructure
- Visualize the entire DMA (District Metered Area) and PMA (Pressure Management Area) layout

### 📊 Real-Time IoT Analytics Dashboard
Because seeing is believing, and data is king:
- **Live Flow Rates**: Monitor water flow in liters per minute across all meters
- **Pressure Monitoring**: Keep tabs on pressure levels in BAR
- **Leak Detection**: Automated anomaly detection using Min Night Flow analysis
- **Historical Trends**: Track patterns over time with beautiful Chart.js visualizations

### 📏 Measurement Tools
Need to know how long that pipe segment is? No problem! The app includes:
- **Length Measurement**: Click and drag to measure distances on the model
- **Area Calculation**: Calculate surface areas for planning and maintenance

### ✂️ Section & Clipping Views
Sometimes you need to see inside things (without actually cutting into them):
- Create cross-section views of the water network
- Clip parts of the model to reveal hidden infrastructure

### 🎮 Simulation Mode
Want to test how the system handles different scenarios? The simulation mode lets you:
- Configure IoT data refresh intervals
- Simulate various flow and pressure scenarios
- Test your response strategies without affecting real infrastructure

## Technology Stack

Here's the recipe for this digital twin:

| Layer | Technology |
|-------|------------|
| **Frontend** | TypeScript, Vite |
| **3D Engine** | Three.js |
| **BIM Framework** | ThatOpen (@thatopen/components, @thatopen/ui) |
| **Visualization** | Chart.js |
| **Backend Simulation** | Node.js |
| **Deployment** | Vercel |

## Practical Applications

This isn't just a cool tech demo - this technology has real-world impact:

1. **Water Loss Reduction**: By monitoring flow rates and detecting anomalies, water utilities can identify and fix leaks faster than ever. In Hong Kong's water network, even a 1% reduction in unaccounted water loss saves millions annually.

2. **Predictive Maintenance**: By analyzing historical pressure and flow data, engineers can predict when infrastructure needs attention before it becomes a crisis.

3. **Emergency Response**: When something goes wrong (burst pipe, anyone?), the digital twin helps crews locate the exact problem area and plan the most efficient response.

4. **Infrastructure Planning**: Want to add a new housing development? The digital twin helps planners understand how new connections will affect the existing network.

5. **Regulatory Compliance**: Many water utilities must report on network performance - this system makes generating those reports a breeze.

## Architecture Highlights

### IFC.js Integration
The project leverages `web-ifc` for reading Industry Foundation Classes (IFC) files - the universal language of BIM. This means the system can handle models from virtually any CAD software.

### Real-Time Data Pipeline
```
Flow Meters & Pressure Sensors 
        ↓
   Node.js Simulation Server
        ↓
   WebSocket / REST API
        ↓
   Frontend Dashboard
```

### Responsive Design
The interface adapts to different devices, with intelligent defaults based on device capabilities (because not everyone has a gaming rig to render complex 3D models).

## Future Enhancements

The project is built with extensibility in mind. Potential future features include:
- **AR Integration**: View the digital twin overlaid on real infrastructure using augmented reality
- **Machine Learning**: Predictive leak detection using historical patterns
- **Multi-User Collaboration**: Multiple engineers working on the same model simultaneously
- **Mobile App**: Field technicians accessing the system on tablets

## Lessons Learned

Building this digital twin taught us:
1. **Performance matters**: Rendering large IFC files requires clever optimization (fragments, progressive loading)
2. **Data quality is crucial**: IoT analytics are only as good as the underlying data
3. **User experience wins**: Even the most powerful tool is useless if nobody can figure out how to use it
4. **Open source rocks**: The ThatOpen community provided incredible support and resources

---

## Technical Specifications

- **IFC Model Support**: Full IFC2x3 and IFC4 read support via web-ifc
- **Coordinate Systems**: HK80 coordinate transformation for local mapping
- **Browser Support**: Chrome, Firefox, Edge, Safari (with WebGL support)
- **Performance Target**: 60fps on mid-range hardware, progressive loading for large models

---

*This project was built with ❤️ for making infrastructure management more accessible and a lot more cool.*
