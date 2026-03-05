# SENSEI Presentation Deployment Guide

## ✅ Changes Pushed to GitHub

**Repository**: https://github.com/rwalkker/Project-Sensei  
**Branch**: FENIX  
**Date**: March 5, 2026

### Files Updated:
- ✅ `slides-data.js` - Updated with unified belt criteria
- ✅ `presentation.html` - Main presentation file
- ✅ `presentation-styles.css` - Styling
- ✅ `presentation-script.js` - Presentation logic
- ✅ `CHANGELOG.md` - Complete change documentation
- ✅ `PRESENTATION_README.md` - Updated documentation

---

## 🚀 Render Deployment Options

### Option 1: Auto-Deploy (If Already Connected)

If your Render service is already connected to this GitHub repository:

1. **Render will automatically detect the push**
2. **Build will start within 1-2 minutes**
3. **Deployment completes in ~3-5 minutes**
4. **Check your Render dashboard**: https://dashboard.render.com

Your presentation will be live at your Render URL (e.g., `https://project-sensei.onrender.com`)

---

### Option 2: Manual Render Setup (First Time)

If you haven't connected Render yet:

#### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub (free)

#### Step 2: Create New Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub repository: `rwalkker/Project-Sensei`
3. Select branch: **FENIX**

#### Step 3: Configure Build Settings
```
Name: project-sensei
Branch: FENIX
Build Command: (leave empty for static site)
Publish Directory: .
```

#### Step 4: Deploy
1. Click **"Create Static Site"**
2. Wait 2-3 minutes for deployment
3. Your site will be live at: `https://project-sensei.onrender.com`

---

### Option 3: GitHub Pages (Alternative)

If you prefer GitHub Pages:

1. Go to repository settings: https://github.com/rwalkker/Project-Sensei/settings/pages
2. Under "Source", select branch: **FENIX**
3. Select folder: **/ (root)**
4. Click **Save**
5. Your site will be live at: `https://rwalkker.github.io/Project-Sensei/`

---

## 📋 Accessing the Presentation

Once deployed, you can access:

### Main Presentation
- **File**: `presentation.html`
- **URL**: `https://your-render-url.onrender.com/presentation.html`

### Dashboard (if exists)
- **File**: `dashboard.html`
- **URL**: `https://your-render-url.onrender.com/dashboard.html`

### Main Index
- **File**: `index.html`
- **URL**: `https://your-render-url.onrender.com/`

---

## 🔍 Verify Deployment

### Check if changes are live:

1. **Open your Render URL**
2. **Navigate to the presentation**
3. **Look for these updates**:
   - Belt hours: 5, 20, 35, 50, 65, 75, 90, 100 (not 10, 40, 70, etc.)
   - Individual UPH criteria (not team UPH)
   - Quality yield: 90%-98% progression
   - New slides: "Core Program Rules", "Quality Yield Standards", "Individual UPH Measurement"

### If changes aren't showing:

1. **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear cache**: Browser settings → Clear browsing data
3. **Check Render logs**: Dashboard → Your service → Logs
4. **Verify branch**: Make sure Render is deploying from FENIX branch

---

## 🛠️ Troubleshooting

### Issue: Changes not appearing
**Solution**: 
- Check Render dashboard for deployment status
- Verify correct branch is selected (FENIX)
- Hard refresh browser (Ctrl+Shift+R)

### Issue: 404 Error
**Solution**:
- Make sure `presentation.html` exists in root directory
- Check Render "Publish Directory" is set to `.` (root)

### Issue: Styles not loading
**Solution**:
- Verify `presentation-styles.css` is in the same directory
- Check browser console for errors (F12)

---

## 📞 Next Steps

1. ✅ **Verify deployment** - Check your Render URL
2. ✅ **Test presentation** - Navigate through all 15 slides
3. ✅ **Share with team** - Send updated URL to stakeholders
4. ✅ **Update documentation** - Note the new URL in your docs

---

## 🎯 Quick Links

- **GitHub Repo**: https://github.com/rwalkker/Project-Sensei
- **Render Dashboard**: https://dashboard.render.com
- **Changelog**: See `CHANGELOG.md` for detailed changes
- **README**: See `PRESENTATION_README.md` for presentation guide

---

**Deployment completed**: March 5, 2026  
**Updated by**: Kiro AI Assistant  
**Changes**: Unified belt criteria (100 hours, individual UPH, 90-98% quality)
