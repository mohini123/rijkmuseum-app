import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RijksmuseumService } from './rijksmuseum-service.service';
import { Collection } from '../rijksmuseum-workspace/collection';

describe('RijksmuseumService', () => {
  let service: RijksmuseumService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RijksmuseumService],
    });
    service = TestBed.inject(RijksmuseumService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data successfully', () => {
    const mockCollections: Collection = {
      elapsedMilliseconds: 100,
      count: 2,
      countFacets: {
        hasimage: 594134,
        ondisplay: 8509,
      },
      facets: [],
      artObjects: [
        {
          links: {
            self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-1368',
            web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-1368',
          },
          id: 'nl-SK-C-1368',
          objectNumber: 'SK-C-1368',
          title: 'Portretten van Giuliano en Francesco Giamberti da Sangallo',
          hasImage: true,
          principalOrFirstMaker: 'Piero di Cosimo',
          longTitle:
            'Portretten van Giuliano en Francesco Giamberti da Sangallo, Piero di Cosimo, 1482 - 1485',
          showImage: true,
          permitDownload: true,
          webImage: {
            guid: '15563bd2-2fde-4b91-9984-ba6c6b166277',
            offsetPercentageX: 0,
            offsetPercentageY: 0,
            width: 2143,
            height: 1520,
            url: 'https://lh3.googleusercontent.com/N2m90mImdcoLacUybb_rxcktTwtr0LFhtuzxbSE9elIhElF6jpWngx96_uZ0L1TGNof5pNt4n_Ygb4KYlPTpA9o6788=s0',
          },
          headerImage: {
            guid: '76249f29-b230-41ac-aa38-1dcb8476b614',
            offsetPercentageX: 0,
            offsetPercentageY: 0,
            width: 1920,
            height: 460,
            url: 'https://lh3.googleusercontent.com/F0vBT6rGd8T1kb6oMdGZKHaGIZCHg3-CbL24iyZodWm55-GKptRyXg4BB-cf3FvS634hwjR30RwoHdQZ9YuSexM8QxA=s0',
          },
          productionPlaces: ['Florence'],
        },
        {
          links: {
            self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-217',
            web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-217',
          },
          id: 'nl-SK-C-217',
          objectNumber: 'SK-C-217',
          title: 'Interieur van de Sint-Odulphuskerk in Assendelft',
          hasImage: true,
          principalOrFirstMaker: 'Pieter Jansz. Saenredam',
          longTitle:
            'Interieur van de Sint-Odulphuskerk in Assendelft, Pieter Jansz. Saenredam, 1649',
          showImage: true,
          permitDownload: true,
          webImage: {
            guid: 'f79764d2-9c38-4cc2-a181-db68b6e10806',
            offsetPercentageX: 0,
            offsetPercentageY: 0,
            width: 2500,
            height: 1645,
            url: 'https://lh3.googleusercontent.com/m_IGl3fefTuaP0r83Yt9yPJR47_LCZfKLlVaMg0jHYwzJCfioMVE5SD8utgPvH_p2SADgqnAprLVEjBueJL8bZznfcp0n6AgCNPwZUPUjA=s0',
          },
          headerImage: {
            guid: 'f4f3220c-9803-4d7d-8877-90c5c7eca187',
            offsetPercentageX: 0,
            offsetPercentageY: 0,
            width: 1920,
            height: 460,
            url: 'https://lh3.googleusercontent.com/mCKwAEomRIRsAVTbtssHq2_GFnOawmO_mNyzlDU8cfbQRQ6Lc7-pDEstXzIrq_taCLfYNU6ND-KG_BG17vkFQfTYw-vT0VOKZ4h0nQIy=s0',
          },
          productionPlaces: [],
        },
      ],
    };
    const searchTerm = 'test';

    service.getData(searchTerm).subscribe((data) => {
      expect(data).toEqual(mockCollections);
    });

    const req = httpTestingController.expectOne(
      `https://www.rijksmuseum.nl/api/nl/collection?key=mskpm3VW&q=${searchTerm}&ps=21`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockCollections);
  });

  it('should fetch details successfully', () => {
    const mockDetails = { id: '1', title: 'Artwork 1' };
    const objectId = '1';

    service.getDetails(objectId).subscribe((details) => {
      expect(details).toEqual(mockDetails);
    });

    const req = httpTestingController.expectOne(
      `https://www.rijksmuseum.nl/api/nl/collection/1?key=mskpm3VW`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockDetails);
  });
});
