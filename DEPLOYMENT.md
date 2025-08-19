# DeepIQ Website Deployment Guide

## 🚀 Quick Start - Deploy to Vercel

### Prerequisites
- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free at https://vercel.com)

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Select your Git provider
   - Import the `deepiq-web-new` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., deepiq.com)
   - Update DNS records as instructed

## Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Development preview
   vercel

   # Production deployment
   vercel --prod
   ```

## Option 3: Deploy to Netlify (Alternative)

1. **Build Settings for Netlify**
   ```toml
   # Create netlify.toml in root directory
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm i -g netlify-cli
   netlify init
   netlify deploy --prod
   ```

## 📋 Pre-Deployment Checklist

- [x] Test production build locally: `npm run build && npm start`
- [x] Verify all routes work correctly
- [x] Check dark mode functionality
- [x] Test responsive design on mobile
- [x] Verify images load correctly
- [x] Check sitemap generation
- [ ] Set environment variables in Vercel/Netlify
- [ ] Configure custom domain
- [ ] Set up monitoring/analytics

## 🔧 Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://deepiq.com

# Optional (for future features)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
HUBSPOT_API_KEY=your-hubspot-key
```

## 📊 Build Output

Expected build statistics:
- Bundle Size: ~110KB First Load JS
- Static Pages: 10 pages pre-rendered
- Build Time: ~30-60 seconds
- Image Optimization: Automatic via Vercel

## 🚨 Troubleshooting

### Build Errors
1. **TypeScript errors**: Run `npm run build` locally first
2. **Missing dependencies**: Ensure `package-lock.json` is committed
3. **Environment variables**: Check they're set in production

### Performance Issues
1. Enable Vercel Analytics (free tier available)
2. Use Vercel Speed Insights
3. Check Core Web Vitals in Vercel Dashboard

### Domain Configuration
1. **DNS Settings**:
   - A Record: 76.76.21.21 (Vercel IP)
   - CNAME: cname.vercel-dns.com
2. **SSL**: Automatic via Vercel
3. **WWW Redirect**: Configure in Vercel Dashboard

## 🔄 Continuous Deployment

### GitHub Integration
- Automatic deployments on push to `main`
- Preview deployments for pull requests
- Rollback via Vercel Dashboard

### Deployment Hooks
```bash
# Create deployment hook in Vercel Dashboard
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_xxx/xxx
```

## 📈 Post-Deployment

### 1. Monitor Performance
- Check Vercel Analytics Dashboard
- Monitor Core Web Vitals
- Set up alerts for errors

### 2. SEO Verification
- Submit sitemap to Google Search Console
- Verify meta tags and OpenGraph
- Test with Google PageSpeed Insights

### 3. Security Headers
Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

## 🎯 Production URLs

After deployment, your site will be available at:
- **Vercel URL**: https://deepiq-web-new.vercel.app
- **Custom Domain**: https://deepiq.com (after configuration)

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)

## 💡 Tips

1. **Use Preview Deployments**: Test changes before merging to main
2. **Enable Caching**: Vercel handles this automatically
3. **Monitor Usage**: Free tier includes 100GB bandwidth
4. **Set Up Alerts**: Configure email alerts for deployment failures

## 🆘 Support

- Vercel Support: https://vercel.com/support
- GitHub Issues: Report bugs in your repository
- Community: https://github.com/vercel/next.js/discussions

---

**Ready to deploy?** Run `vercel --prod` or push to your Git repository!