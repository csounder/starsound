# 📱💻 Version Guide - Dr.C StarSound

Dr.C - StarSound comes in **3 optimized versions** to ensure the best experience on any device.

---

## 🌐 Version Comparison

| Feature                | Desktop            | Mobile               | Auto-Detect        |
| ---------------------- | ------------------ | -------------------- | ------------------ |
| **File**               | `app-desktop.html` | `app-mobile.html`    | `app.html`         |
| **Best for**           | Laptop/Desktop     | Phone/Tablet         | Any device         |
| **Control Panels**     | Always visible     | Collapsible          | Responsive         |
| **Keyboard Shortcuts** | ✅ All shortcuts   | ❌ Not available     | ✅ On desktop only |
| **Touch Gestures**     | ❌ Not needed      | ✅ Fully optimized   | ✅ On mobile only  |
| **Toggle Buttons**     | Hidden             | ⚙️ 🎛️ Always visible | Shows on mobile    |
| **Screen Usage**       | Panels + Canvas    | Full screen canvas   | Adapts             |
| **File Size**          | 685KB              | 685KB                | 685KB              |
| **Recommended**        | Mouse + Keyboard   | Touchscreen          | Not sure           |

---

## 💻 Desktop Version

### **What's Different**

- Both control panels visible by default (left and right)
- Full keyboard shortcuts work
- ESC key toggles panel visibility
- Optimized for mouse and keyboard navigation
- No touch gesture controls needed

### **Best Use Cases**

- Using a mouse and keyboard
- Large screen (laptop/desktop monitor)
- Want full control panel access
- Prefer keyboard shortcuts
- Recording/streaming sessions

### **Controls**

- **ESC** - Hide/show both panels
- **M, S, R** - Switch interaction modes
- **1, 2, 3** - Switch sonification modes
- **X** - Randomize all settings
- **Space** - Toggle scan
- **WASD/Arrows** - Navigate viewport

---

## 📱 Mobile Version

### **What's Different**

- Control panels hidden by default (full screen for stars)
- ⚙️ button (top-left) toggles audio/sonification controls
- 🎛️ button (top-right) toggles sound/instrument controls
- Touch gesture support (swipe, multi-touch)
- Help overlay on first visit
- Smaller fonts and touch-friendly buttons

### **Best Use Cases**

- Using a phone or tablet
- Touchscreen-only device
- Want maximum screen space for stars
- Prefer gesture controls
- On-the-go exploration

### **Touch Gestures**

#### **Show/Hide Controls**

- **Tap ⚙️ button** (top-left) - Open audio & sonification panel
- **Tap 🎛️ button** (top-right) - Open sound & instrument panel
- **Swipe from left edge** - Open left panel
- **Swipe from right edge** - Open right panel
- **3-finger tap anywhere** - Hide all controls (full screen)
- **Tap middle of screen** - Close any open panel

#### **Star Interaction**

- **Single finger tap/drag** - Trigger stars (Mouse mode)
- **Watch scan line** - Auto scan mode
- **Draw rectangle** - Region select mode

#### **Navigation**

- **Pinch/spread** - Zoom in/out (future feature)
- **Two-finger drag** - Pan viewport (future feature)

### **First-Time Experience**

A help overlay appears explaining all gestures. Shows:

- How to open control panels
- Touch gesture guide
- Quick tips for mobile use

---

## 🌐 Auto-Detect Version

### **What's Different**

- Automatically detects device type
- Shows toggle buttons on mobile screens
- Enables keyboard shortcuts on desktop
- Responsive layout adapts to screen size
- Best of both worlds

### **Best Use Cases**

- Not sure which device you'll use
- Want one version that works everywhere
- Switching between devices
- Sharing link with others (they get optimized experience)
- Testing on multiple devices

### **How It Works**

- Detects screen width (≤768px = mobile)
- Detects user agent (phone/tablet)
- Enables appropriate controls
- Adapts layout automatically
- No manual configuration needed

---

## 🚀 Which Version Should I Use?

### **I'm on a phone or tablet** → Use **Mobile Version** 📱

Best touch experience, maximizes screen space for stars

### **I'm on a laptop/desktop** → Use **Desktop Version** 💻

Full keyboard control, always-visible panels

### **I'll use different devices** → Use **Auto-Detect Version** 🌐

Automatically optimizes for your device

### **Not sure?** → Use **Auto-Detect Version** 🌐

Safe choice, works everywhere

---

## 📂 File Details

All versions are:

- **Self-contained** - Single HTML file, no dependencies
- **Offline-capable** - Work without internet (after first load)
- **Identical features** - Same 35 instruments, 23+9 presets, all modes
- **Same audio engine** - Csound 7 via WebAssembly
- **Cross-browser** - Chrome, Firefox, Safari, Edge

### **File Sizes**

- `app-desktop.html` - 685KB
- `app-mobile.html` - 685KB
- `app.html` - 685KB (auto-detect)
- `index.html` - 11KB (landing page)

---

## 🔄 Switching Between Versions

### **Online**

Visit: https://starsound.netlify.app

- Landing page shows all 3 versions
- Click your preferred version
- Device detection highlights recommended version

### **Local Files**

- Open `app-desktop.html` for desktop
- Open `app-mobile.html` for mobile
- Open `app.html` for auto-detect
- Open `index.html` for landing page

### **Your Settings**

⚠️ **Note**: Presets and settings are **NOT** shared between versions.

- Each version stores settings independently
- Use Export/Import presets to transfer settings
- Closing browser may lose settings (unless saved as preset)

---

## 💡 Pro Tips

### **Desktop Users**

1. Use keyboard shortcuts for fast workflow
2. Press ESC to hide panels when recording/screenshots
3. Keep both panels visible while learning
4. Use preset export to save favorite settings

### **Mobile Users**

1. Start with panels hidden (full screen)
2. Tap ⚙️ to access audio controls quickly
3. Learn 3-finger tap for instant full screen
4. Use landscape mode for more horizontal space
5. Close panels when interacting with stars

### **Performance**

- Mobile version uses same CPU as desktop
- If laggy, reduce reverb and voice limit
- Smaller scan radius = better performance
- Fewer simultaneous notes = smoother

---

## 🆘 Troubleshooting

### **Controls won't open on mobile**

- Look for ⚙️ and 🎛️ buttons in top corners
- Try swiping from left/right edges
- Refresh page if buttons missing

### **Keyboard shortcuts don't work**

- Make sure you're using desktop version (`app-desktop.html`)
- Click on canvas first (focus)
- Check you're not typing in an input field

### **Panels blocking view on mobile**

- Tap middle of screen to close
- Use 3-finger tap for instant close
- Swipe panel away (future feature)

### **Wrong version loading**

- Check filename: desktop, mobile, or auto-detect
- Clear browser cache
- Use landing page (index.html) to choose

---

## 📄 Related Documentation

- **README.md** - Complete feature documentation
- **QUICKSTART.md** - 2-minute getting started guide
- **CHANGELOG.md** - Version history
- **DEPLOYMENT.md** - How to deploy and host

---

**Choose the version that fits your device and enjoy exploring the cosmos! 🌟🎵**
