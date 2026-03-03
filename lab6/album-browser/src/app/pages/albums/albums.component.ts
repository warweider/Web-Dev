import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('ALBUMS LOADED', data.length);
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.log('ALBUMS ERROR FULL:', err);
        console.log('ALBUMS ERROR STATUS:', err?.status);
        console.log('ALBUMS ERROR MESSAGE:', err?.message);
        this.error = `Failed to load albums (status: ${err?.status ?? 'unknown'})`;
        this.loading = false;
      },
    });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    // чтобы клик по кнопке Delete не открывал страницу альбома
    event.stopPropagation();
    event.preventDefault();

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a) => a.id !== id);
      },
      error: () => {
        this.error = 'Failed to delete album';
      },
    });
  }
}