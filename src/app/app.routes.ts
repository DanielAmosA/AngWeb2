import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [

  // {
  //   path: '',
  //   loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  //   canActivate: [() => import('./guards/auth.guard').then((m) => m.AuthGuard)],
  // },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  //   canActivate: [() => import('./guards/auth.guard').then((m) => m.AuthGuard)],
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  // },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/posts/posts.component').then((m) => m.PostsComponent),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then((m) => m.TermsComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'create-post',
    loadComponent: () =>
      import('./pages/create-post/create-post.component').then(
        (m) => m.CreatePostComponent
      ),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts.component').then(
        (m) => m.PostsComponent
      ),
  },
  {
    path: 'posts-so-ta',
    loadComponent: () =>
      import('./pages/posts-so-ta/posts-so-ta.component').then(
        (m) => m.PostsSoTaComponent
      ),
  },
  {
    path: 'post/:id',
    loadComponent: () =>
      import('./pages/post-detail/post-detail.component').then((m) => m.PostDetailComponent),
  },
  {
    path: 'post-binding-demo',
    loadComponent: () =>
      import('./pages/post-binding-demo/post-binding-demo.component').then((m) => m.PostBindingDemoComponent),
  },
  {
    path: 'manager-data',
    loadComponent: () =>
      import('./pages/manager-data/manager-data.component').then((m) => m.ManagerDataComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },

];
