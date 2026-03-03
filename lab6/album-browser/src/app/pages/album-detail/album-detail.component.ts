import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;

  loading = true;
  error = '';

  editedTitle = '';
  saving = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.error = 'Invalid album id';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) return;

    this.saving = true;
    this.error = '';

    const updated: Album = {
      ...this.album,
      title: this.editedTitle.trim(),
    };

    this.albumService.updateAlbum(updated).subscribe({
      next: (data) => {
        // JSONPlaceholder вернёт успех, обновляем UI локально
        this.album = data;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to save album';
        this.saving = false;
      },
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}