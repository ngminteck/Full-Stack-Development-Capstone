import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostsModule } from './pages/posts/posts.module';

import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    HttpClientModule,
    PostsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
