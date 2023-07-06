import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';
import { RijksmuseumWorkspaceComponent } from './rijksmuseum-workspace.component';
import { RijksmuseumService } from '../services/rijksmuseum-service.service';

describe('RijksmuseumWorkspaceComponent', () => {
  let component: RijksmuseumWorkspaceComponent;
  let fixture: ComponentFixture<RijksmuseumWorkspaceComponent>;
  let mockRijksmuseumService: jasmine.SpyObj<RijksmuseumService>;

  beforeEach(async () => {
    const rijksmuseumServiceSpy = jasmine.createSpyObj('RijksmuseumService', [
      'getData',
    ]);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RijksmuseumWorkspaceComponent],
      providers: [
        { provide: RijksmuseumService, useValue: rijksmuseumServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RijksmuseumWorkspaceComponent);
    component = fixture.componentInstance;
    mockRijksmuseumService = TestBed.inject(
      RijksmuseumService
    ) as jasmine.SpyObj<RijksmuseumService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading to true during search', () => {
    const searchKeyword = 'test';
    component.searchArtwork(searchKeyword);
    expect(component.loading).toBe(true);
  });

  it('should handle error when getting data from RijksmuseumService', () => {
    const searchKeyword = 'test';
    const errorMessage = 'API error';

    mockRijksmuseumService.getData.and.returnValue(throwError(errorMessage));
    component.searchArtwork(searchKeyword);

    expect(mockRijksmuseumService.getData).toHaveBeenCalledWith(searchKeyword);
    expect(component.collections$).toBeTruthy();

    component.collections$.subscribe(
      () => {},
      (error) => {
        expect(error).toBe(errorMessage);
        expect(component.loading).toBe(false);
        expect(component.ErrorMsg).toBe(true);
      }
    );
  });

  it('should navigate to details with correct query param', () => {
    const id = '123';
    const routerSpy = spyOn(component.router, 'navigate');

    component.goToDetails(id);

    expect(routerSpy).toHaveBeenCalledWith(['/details'], {
      queryParams: { id: id },
    });
  });
});
