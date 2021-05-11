import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
  tracks:TrackData[];
  
  artist:ArtistData[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id');
  	// Inject spotifyService and use it to get the album data and the tracks for the album

    this.spotifyService.getAlbum(this.albumId).then((data)=>{      
      this.album = data;
      this.artist = data.artists;
    });

    this.spotifyService.getTracksForAlbum(this.albumId).then((data)=>{
      this.tracks = data;
    });
  }

}