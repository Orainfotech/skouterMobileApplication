import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'findpeople',
    loadChildren: () => import('./pages/findpeople/findpeople.module').then( m => m.FindpeoplePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'createprofile',
    loadChildren: () => import('./pages/createprofile/createprofile.module').then( m => m.CreateprofilePageModule)
  },
  {
    path: 'createnewprofile1',
    loadChildren: () => import('./pages/createnewprofile1/createnewprofile1.module').then( m => m.Createnewprofile1PageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'eventsdetails',
    loadChildren: () => import('./pages/eventsdetails/eventsdetails.module').then( m => m.EventsdetailsPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'profilemedia',
    loadChildren: () => import('./pages/profilemedia/profilemedia.module').then( m => m.ProfilemediaPageModule)
  },
  {
    path: 'profilemediamore',
    loadChildren: () => import('./pages/profilemediamore/profilemediamore.module').then( m => m.ProfilemediamorePageModule)
  },
  {
    path: 'profilemediaactivity',
    loadChildren: () => import('./pages/profilemediaactivity/profilemediaactivity.module').then( m => m.ProfilemediaactivityPageModule)
  },
  {
    path: 'profileinsight',
    loadChildren: () => import('./pages/profileinsight/profileinsight.module').then( m => m.ProfileinsightPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./pages/profile1/profile1.module').then( m => m.Profile1PageModule)
  },
  {
    path: 'studios',
    loadChildren: () => import('./pages/studios/studios.module').then( m => m.StudiosPageModule)
  },
  {
    path: 'uploads',
    loadChildren: () => import('./pages/uploads/uploads.module').then( m => m.UploadsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
