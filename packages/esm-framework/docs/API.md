[Back to README.md](../README.md)

# @openmrs/esm-framework

## Table of contents

### Enumerations

- [Type](enums/type.md)

### Classes

- [OpenmrsFetchError](classes/openmrsfetcherror.md)

### Interfaces

- [AppState](interfaces/appstate.md)
- [BreadcrumbRegistration](interfaces/breadcrumbregistration.md)
- [BreadcrumbSettings](interfaces/breadcrumbsettings.md)
- [CancelLoading](interfaces/cancelloading.md)
- [ComponentConfig](interfaces/componentconfig.md)
- [ComponentDecoratorOptions](interfaces/componentdecoratoroptions.md)
- [Config](interfaces/config.md)
- [ConfigObject](interfaces/configobject.md)
- [ConfigSchema](interfaces/configschema.md)
- [ConfigStore](interfaces/configstore.md)
- [ConfigurableLinkProps](interfaces/configurablelinkprops.md)
- [CurrentUserOptions](interfaces/currentuseroptions.md)
- [CurrentUserWithResponseOption](interfaces/currentuserwithresponseoption.md)
- [CurrentUserWithoutResponseOption](interfaces/currentuserwithoutresponseoption.md)
- [ExtensionData](interfaces/extensiondata.md)
- [ExtensionDefinition](interfaces/extensiondefinition.md)
- [ExtensionInfo](interfaces/extensioninfo.md)
- [ExtensionInstance](interfaces/extensioninstance.md)
- [ExtensionProps](interfaces/extensionprops.md)
- [ExtensionRegistration](interfaces/extensionregistration.md)
- [ExtensionSlotBaseProps](interfaces/extensionslotbaseprops.md)
- [ExtensionSlotConfig](interfaces/extensionslotconfig.md)
- [ExtensionSlotConfigObject](interfaces/extensionslotconfigobject.md)
- [ExtensionSlotConfigsStore](interfaces/extensionslotconfigsstore.md)
- [ExtensionSlotConfigureValueObject](interfaces/extensionslotconfigurevalueobject.md)
- [ExtensionSlotInfo](interfaces/extensionslotinfo.md)
- [ExtensionSlotInstance](interfaces/extensionslotinstance.md)
- [ExtensionStore](interfaces/extensionstore.md)
- [FHIRRequestObj](interfaces/fhirrequestobj.md)
- [FetchHeaders](interfaces/fetchheaders.md)
- [FetchResponse](interfaces/fetchresponse.md)
- [ImplementerToolsConfigStore](interfaces/implementertoolsconfigstore.md)
- [ImportMap](interfaces/importmap.md)
- [Lifecycle](interfaces/lifecycle.md)
- [LoggedInUser](interfaces/loggedinuser.md)
- [LoggedInUserFetchResponse](interfaces/loggedinuserfetchresponse.md)
- [NavigateOptions](interfaces/navigateoptions.md)
- [NavigationContext](interfaces/navigationcontext.md)
- [OpenmrsReactComponentProps](interfaces/openmrsreactcomponentprops.md)
- [OpenmrsReactComponentState](interfaces/openmrsreactcomponentstate.md)
- [PageDefinition](interfaces/pagedefinition.md)
- [Person](interfaces/person.md)
- [Privilege](interfaces/privilege.md)
- [Role](interfaces/role.md)
- [UnauthenticatedUser](interfaces/unauthenticateduser.md)
- [UserHasAccessProps](interfaces/userhasaccessprops.md)
- [WorkspaceItem](interfaces/workspaceitem.md)

### Type aliases

- [Actions](API.md#actions)
- [BoundActions](API.md#boundactions)
- [ConfigValue](API.md#configvalue)
- [CurrentPatient](API.md#currentpatient)
- [DateInput](API.md#dateinput)
- [ExtensionSlotProps](API.md#extensionslotprops)
- [MaybeAsync](API.md#maybeasync)
- [NavigationContextType](API.md#navigationcontexttype)
- [PatientUuid](API.md#patientuuid)
- [ProvidedConfig](API.md#providedconfig)
- [SpaEnvironment](API.md#spaenvironment)
- [Validator](API.md#validator)
- [ValidatorFunction](API.md#validatorfunction)

### API Variables

- [fhir](API.md#fhir)

### Navigation Variables

- [ConfigurableLink](API.md#configurablelink)

### Other Variables

- [ComponentContext](API.md#componentcontext)
- [Extension](API.md#extension)
- [ExtensionSlot](API.md#extensionslot)
- [UserHasAccess](API.md#userhasaccess)
- [backendDependencies](API.md#backenddependencies)
- [extensionStore](API.md#extensionstore)
- [fhirBaseUrl](API.md#fhirbaseurl)
- [implementerToolsConfigStore](API.md#implementertoolsconfigstore)
- [sessionEndpoint](API.md#sessionendpoint)
- [temporaryConfigStore](API.md#temporaryconfigstore)
- [toastsSubject](API.md#toastssubject)
- [validators](API.md#validators)

### API Functions

- [openmrsFetch](API.md#openmrsfetch)
- [openmrsObservableFetch](API.md#openmrsobservablefetch)

### API Object Functions

- [getCurrentPatient](API.md#getcurrentpatient)
- [getCurrentPatientUuid](API.md#getcurrentpatientuuid)
- [getCurrentUser](API.md#getcurrentuser)
- [refetchCurrentPatient](API.md#refetchcurrentpatient)
- [refetchCurrentUser](API.md#refetchcurrentuser)

### Breadcrumb Functions

- [filterBreadcrumbs](API.md#filterbreadcrumbs)
- [getBreadcrumbs](API.md#getbreadcrumbs)
- [getBreadcrumbsFor](API.md#getbreadcrumbsfor)
- [registerBreadcrumb](API.md#registerbreadcrumb)
- [registerBreadcrumbs](API.md#registerbreadcrumbs)

### Navigation Functions

- [interpolateString](API.md#interpolatestring)
- [isUrl](API.md#isurl)
- [isUrlWithTemplateParameters](API.md#isurlwithtemplateparameters)
- [navigate](API.md#navigate)

### Other Functions

- [attach](API.md#attach)
- [createAppState](API.md#createappstate)
- [createErrorHandler](API.md#createerrorhandler)
- [createGlobalStore](API.md#createglobalstore)
- [createUseStore](API.md#createusestore)
- [defineConfigSchema](API.md#defineconfigschema)
- [detach](API.md#detach)
- [getActualRouteProps](API.md#getactualrouteprops)
- [getAppState](API.md#getappstate)
- [getAsyncExtensionLifecycle](API.md#getasyncextensionlifecycle)
- [getAsyncLifecycle](API.md#getasynclifecycle)
- [getConfig](API.md#getconfig)
- [getConfigStore](API.md#getconfigstore)
- [getExtensionConfigStore](API.md#getextensionconfigstore)
- [getExtensionRegistration](API.md#getextensionregistration)
- [getExtensionSlotsConfigStore](API.md#getextensionslotsconfigstore)
- [getExtensionSlotsForModule](API.md#getextensionslotsformodule)
- [getGlobalStore](API.md#getglobalstore)
- [getLifecycle](API.md#getlifecycle)
- [getUpdatedExtensionSlotInfo](API.md#getupdatedextensionslotinfo)
- [handleApiError](API.md#handleapierror)
- [inRange](API.md#inrange)
- [isOmrsDateStrict](API.md#isomrsdatestrict)
- [isOmrsDateToday](API.md#isomrsdatetoday)
- [makeUrl](API.md#makeurl)
- [openmrsComponentDecorator](API.md#openmrscomponentdecorator)
- [processConfig](API.md#processconfig)
- [provide](API.md#provide)
- [pushNavigationContext](API.md#pushnavigationcontext)
- [registerExtension](API.md#registerextension)
- [registerExtensionSlot](API.md#registerextensionslot)
- [renderExtension](API.md#renderextension)
- [reportError](API.md#reporterror)
- [showToast](API.md#showtoast)
- [switchTo](API.md#switchto)
- [toDateObjectStrict](API.md#todateobjectstrict)
- [toOmrsDateFormat](API.md#toomrsdateformat)
- [toOmrsDayDateFormat](API.md#toomrsdaydateformat)
- [toOmrsIsoString](API.md#toomrsisostring)
- [toOmrsTimeString](API.md#toomrstimestring)
- [toOmrsTimeString24](API.md#toomrstimestring24)
- [toOmrsYearlessDateFormat](API.md#toomrsyearlessdateformat)
- [unregisterExtensionSlot](API.md#unregisterextensionslot)
- [updateExtensionStore](API.md#updateextensionstore)
- [useConfig](API.md#useconfig)
- [useCurrentPatient](API.md#usecurrentpatient)
- [useExtensionStore](API.md#useextensionstore)
- [useForceUpdate](API.md#useforceupdate)
- [useNavigationContext](API.md#usenavigationcontext)
- [useStore](API.md#usestore)
- [userHasAccess](API.md#userhasaccess)
- [validator](API.md#validator)

### Workspace Functions

- [getNewWorkspaceItem](API.md#getnewworkspaceitem)
- [newWorkspaceItem](API.md#newworkspaceitem)

## Type aliases

### Actions

Ƭ **Actions**: Function \| { [key: string]: Function;  }

Defined in: [packages/esm-react-utils/src/createUseStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/createUseStore.ts#L4)

___

### BoundActions

Ƭ **BoundActions**: *object*

#### Type declaration:

Defined in: [packages/esm-react-utils/src/createUseStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/createUseStore.ts#L5)

___

### ConfigValue

Ƭ **ConfigValue**: *string* \| *number* \| *boolean* \| *void* \| *any*[] \| *object*

Defined in: [packages/esm-config/src/types.ts:30](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/types.ts#L30)

___

### CurrentPatient

Ƭ **CurrentPatient**: fhir.Patient \| [*FetchResponse*](interfaces/fetchresponse.md)<fhir.Patient\>

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:72](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L72)

___

### DateInput

Ƭ **DateInput**: *string* \| *number* \| Date

Defined in: [packages/esm-utils/src/omrs-dates.ts:8](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L8)

___

### ExtensionSlotProps

Ƭ **ExtensionSlotProps**<T\>: [*ExtensionSlotBaseProps*](interfaces/extensionslotbaseprops.md) & T

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | {} |

Defined in: [packages/esm-react-utils/src/ExtensionSlot.tsx:15](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/ExtensionSlot.tsx#L15)

___

### MaybeAsync

Ƭ **MaybeAsync**<T\>: T \| *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

Defined in: [packages/esm-extensions/src/store.ts:102](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/store.ts#L102)

___

### NavigationContextType

Ƭ **NavigationContextType**: *workspace* \| *dialog* \| *link*

Defined in: [packages/esm-extensions/src/contexts.ts:14](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/contexts.ts#L14)

___

### PatientUuid

Ƭ **PatientUuid**: *string* \| *null*

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:84](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L84)

___

### ProvidedConfig

Ƭ **ProvidedConfig**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`config` | [*Config*](interfaces/config.md) |
`source` | *string* |

Defined in: [packages/esm-config/src/types.ts:55](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/types.ts#L55)

___

### SpaEnvironment

Ƭ **SpaEnvironment**: *production* \| *development* \| *test*

Defined in: [packages/esm-framework/src/types.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-framework/src/types.ts#L15)

___

### Validator

Ƭ **Validator**: (`value`: *any*) => *void* \| *string*

#### Type declaration:

▸ (`value`: *any*): *void* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *void* \| *string*

Defined in: [packages/esm-config/src/types.ts:62](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/types.ts#L62)

___

### ValidatorFunction

Ƭ **ValidatorFunction**: (`value`: *any*) => *boolean*

#### Type declaration:

▸ (`value`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *boolean*

Defined in: [packages/esm-config/src/types.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/types.ts#L60)

## API Variables

### fhir

• `Const` **fhir**: FhirClient

The `fhir` object is [an instance of fhir.js](https://github.com/FHIR/fhir.js)
that can be used to call FHIR-compliant OpenMRS APIs. See
[the docs for fhir.js](https://github.com/FHIR/fhir.js) for more info
and example usage.

Defined in: [packages/esm-api/src/fhir.ts:41](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/fhir.ts#L41)

___

## Navigation Variables

### ConfigurableLink

• `Const` **ConfigurableLink**: *React.FC*<[*ConfigurableLinkProps*](interfaces/configurablelinkprops.md)\>

A React link component which calls [navigate](API.md#navigate) when clicked

**`param`** The target path or URL. Supports interpolation. See [navigate](API.md#navigate)

**`param`** Inline elements within the link

**`param`** Any other valid props for an <a> tag except `href` and `onClick`

Defined in: [packages/esm-react-utils/src/ConfigurableLink.tsx:29](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/ConfigurableLink.tsx#L29)

___

## Other Variables

### ComponentContext

• `Const` **ComponentContext**: *Context*<[*ComponentConfig*](interfaces/componentconfig.md)\>

Available to all components. Provided by `openmrsComponentDecorator`.

Defined in: [packages/esm-react-utils/src/ComponentContext.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/ComponentContext.ts#L18)

___

### Extension

• `Const` **Extension**: *React.FC*<[*ExtensionProps*](interfaces/extensionprops.md)\>

Represents the position in the DOM where each extension within
an extension slot is rendered.

Renders once for each extension attached to that extension slot.

Usage of this component *must* have an ancestor `<ExtensionSlot>`.

Defined in: [packages/esm-react-utils/src/Extension.tsx:17](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/Extension.tsx#L17)

___

### ExtensionSlot

• `Const` **ExtensionSlot**: *React.FC*<[*ExtensionSlotProps*](API.md#extensionslotprops)\>

Defined in: [packages/esm-react-utils/src/ExtensionSlot.tsx:17](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/ExtensionSlot.tsx#L17)

___

### UserHasAccess

• `Const` **UserHasAccess**: *React.FC*<[*UserHasAccessProps*](interfaces/userhasaccessprops.md)\>

Defined in: [packages/esm-react-utils/src/UserHasAccess.tsx:8](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/UserHasAccess.tsx#L8)

___

### backendDependencies

• `Const` **backendDependencies**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`fhir2` | *string* |
`webservices.rest` | *string* |

Defined in: [packages/esm-api/src/openmrs-backend-dependencies.ts:1](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/openmrs-backend-dependencies.ts#L1)

___

### extensionStore

• `Const` **extensionStore**: *Store*<[*ExtensionStore*](interfaces/extensionstore.md)\>

Defined in: [packages/esm-extensions/src/store.ts:97](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/store.ts#L97)

___

### fhirBaseUrl

• `Const` **fhirBaseUrl**: */ws/fhir2/R4*

Defined in: [packages/esm-api/src/fhir.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/fhir.ts#L4)

___

### implementerToolsConfigStore

• `Const` **implementerToolsConfigStore**: *Store*<[*ImplementerToolsConfigStore*](interfaces/implementertoolsconfigstore.md)\>

Defined in: [packages/esm-config/src/module-config/state.ts:188](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/state.ts#L188)

___

### sessionEndpoint

• `Const` **sessionEndpoint**: */ws/rest/v1/session*= "/ws/rest/v1/session"

Defined in: [packages/esm-api/src/openmrs-fetch.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/openmrs-fetch.ts#L6)

___

### temporaryConfigStore

• `Const` **temporaryConfigStore**: *Store*<TemporaryConfigStore\>

Defined in: [packages/esm-config/src/module-config/state.ts:75](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/state.ts#L75)

___

### toastsSubject

• `Const` **toastsSubject**: *Subject*<unknown\>

Defined in: [packages/esm-styleguide/src/toasts/index.tsx:8](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-styleguide/src/toasts/index.tsx#L8)

___

### validators

• `Const` **validators**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`inRange` | (`min`: *number*, `max`: *number*) => [*Validator*](API.md#validator) |
`isUrl` | [*Validator*](API.md#validator) |
`isUrlWithTemplateParameters` | (`allowedTemplateParameters`: *string*[]) => [*Validator*](API.md#validator) |

Defined in: [packages/esm-config/src/validators/validators.ts:57](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/validators/validators.ts#L57)

## API Functions

### openmrsFetch

▸ **openmrsFetch**<T\>(`path`: *string*, `fetchInit?`: FetchConfig): *Promise*<[*FetchResponse*](interfaces/fetchresponse.md)<T\>\>

The openmrsFetch function is a wrapper around the
[browser's built-in fetch function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch),
with extra handling for OpenMRS-specific API behaviors, such as
request headers, authentication, authorization, and the API urls.

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`path` | *string* | A string url to make the request to. Note that the   openmrs base url (by default `/openmrs`) will be automatically   prepended to the URL, so there is no need to include it.   |
`fetchInit` | FetchConfig | A [fetch init object](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax).   Note that the `body` property does not need to be `JSON.stringify()`ed   because openmrsFetch will do that for you.   |

**Returns:** *Promise*<[*FetchResponse*](interfaces/fetchresponse.md)<T\>\>

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  that resolves with a [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response).
  Note that the openmrs version of the Response object has already
  downloaded the HTTP response body as json, and has an additional
  `data` property with the HTTP response json as a javascript object.

#### Example
```js
import { openmrsFetch } from '@openmrs/esm-api'
const abortController = new AbortController();
openmrsFetch('/ws/rest/v1/session', {signal: abortController.signal})
  .then(response => {
    console.log(response.data.authenticated)
  })
  .catch(err => {
    console.error(err.status);
  })
abortController.abort();
openmrsFetch('/ws/rest/v1/session', {
  method: 'POST',
  body: {
    username: 'hi',
    password: 'there',
  }
})
```

#### Cancellation

To cancel a network request, use an
[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort).
It is best practice to cancel your network requests when the user
navigates away from a page while the request is pending request, to
free up memory and network resources and to prevent race conditions.

Defined in: [packages/esm-api/src/openmrs-fetch.ts:61](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/openmrs-fetch.ts#L61)

___

### openmrsObservableFetch

▸ **openmrsObservableFetch**<T\>(`url`: *string*, `fetchInit?`: FetchConfig): *Observable*<[*FetchResponse*](interfaces/fetchresponse.md)<T\>\>

The openmrsObservableFetch function is a wrapper around openmrsFetch
that returns an [Observable](https://rxjs-dev.firebaseapp.com/guide/observable)
instead of a promise. It exists in case using an Observable is
preferred or more convenient than a promise.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | See [openmrsFetch](API.md#openmrsfetch)   |
`fetchInit` | FetchConfig | See [openmrsFetch](API.md#openmrsfetch)   |

**Returns:** *Observable*<[*FetchResponse*](interfaces/fetchresponse.md)<T\>\>

An Observable that produces exactly one Response object.
The response object is exactly the same as for [openmrsFetch](API.md#openmrsfetch).

#### Example

```js
import { openmrsObservableFetch } from '@openmrs/esm-api'
const subscription = openmrsObservableFetch('/ws/rest/v1/session').subscribe(
  response => console.log(response.data),
  err => {throw err},
  () => console.log('finished')
)
subscription.unsubscribe()
```

#### Cancellation

To cancel the network request, simply call `subscription.unsubscribe();`

Defined in: [packages/esm-api/src/openmrs-fetch.ts:226](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/openmrs-fetch.ts#L226)

___

## API Object Functions

### getCurrentPatient

▸ **getCurrentPatient**(): *Observable*<fhir.Patient\>

**Returns:** *Observable*<fhir.Patient\>

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:38](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L38)

▸ **getCurrentPatient**(`opts`: PatientWithFullResponse): *Observable*<[*FetchResponse*](interfaces/fetchresponse.md)<fhir.Patient\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`opts` | PatientWithFullResponse |

**Returns:** *Observable*<[*FetchResponse*](interfaces/fetchresponse.md)<fhir.Patient\>\>

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:39](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L39)

▸ **getCurrentPatient**(`opts`: OnlyThePatient): *Observable*<fhir.Patient\>

#### Parameters:

Name | Type |
:------ | :------ |
`opts` | OnlyThePatient |

**Returns:** *Observable*<fhir.Patient\>

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:42](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L42)

___

### getCurrentPatientUuid

▸ **getCurrentPatientUuid**(): *Observable*<[*PatientUuid*](API.md#patientuuid)\>

**Returns:** *Observable*<[*PatientUuid*](API.md#patientuuid)\>

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:68](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L68)

___

### getCurrentUser

▸ **getCurrentUser**(): *Observable*<[*LoggedInUser*](interfaces/loggedinuser.md)\>

The getCurrentUser function returns an observable that produces
**zero or more values, over time**. It will produce zero values
by default if the user is not logged in. And it will provide a
first value when the logged in user is fetched from the server.
Subsequent values will be produced whenever the user object is
updated.

**Returns:** *Observable*<[*LoggedInUser*](interfaces/loggedinuser.md)\>

An Observable that produces zero or more values (as
  described above). The values produced will be a user object (if
  `includeAuthStatus` is set to `false`) or an object with a session
  and authenticated property (if `includeAuthStatus` is set to `true`).

#### Example

```js
import { getCurrentUser } from '@openmrs/esm-api'
const subscription = getCurrentUser().subscribe(
  user => console.log(user)
)
subscription.unsubscribe()
getCurrentUser({includeAuthStatus: true}).subscribe(
  data => console.log(data.authenticated)
)
```

#### Be sure to unsubscribe when your component unmounts

Otherwise your code will continue getting updates to the user object
even after the UI component is gone from the screen. This is a memory
leak and source of bugs.

Defined in: [packages/esm-api/src/shared-api-objects/current-user.ts:56](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-user.ts#L56)

▸ **getCurrentUser**(`opts`: [*CurrentUserWithResponseOption*](interfaces/currentuserwithresponseoption.md)): *Observable*<[*UnauthenticatedUser*](interfaces/unauthenticateduser.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`opts` | [*CurrentUserWithResponseOption*](interfaces/currentuserwithresponseoption.md) |

**Returns:** *Observable*<[*UnauthenticatedUser*](interfaces/unauthenticateduser.md)\>

Defined in: [packages/esm-api/src/shared-api-objects/current-user.ts:57](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-user.ts#L57)

▸ **getCurrentUser**(`opts`: [*CurrentUserWithoutResponseOption*](interfaces/currentuserwithoutresponseoption.md)): *Observable*<[*LoggedInUser*](interfaces/loggedinuser.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`opts` | [*CurrentUserWithoutResponseOption*](interfaces/currentuserwithoutresponseoption.md) |

**Returns:** *Observable*<[*LoggedInUser*](interfaces/loggedinuser.md)\>

Defined in: [packages/esm-api/src/shared-api-objects/current-user.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-user.ts#L60)

___

### refetchCurrentPatient

▸ **refetchCurrentPatient**(): *void*

**Returns:** *void*

Defined in: [packages/esm-api/src/shared-api-objects/current-patient.ts:59](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-patient.ts#L59)

___

### refetchCurrentUser

▸ **refetchCurrentUser**(): *void*

The `refetchCurrentUser` function causes a network request to redownload
the user. All subscribers to the current user will be notified of the
new users once the new version of the user object is downloaded.

**Returns:** *void*

The same observable as returned by [getCurrentUser](API.md#getcurrentuser).

#### Example
```js
import { refetchCurrentUser } from '@openmrs/esm-api'
refetchCurrentUser()
```

Defined in: [packages/esm-api/src/shared-api-objects/current-user.ts:116](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-user.ts#L116)

___

## Breadcrumb Functions

### filterBreadcrumbs

▸ **filterBreadcrumbs**(`list`: [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[], `path`: *string*): [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`list` | [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[] |
`path` | *string* |

**Returns:** [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[]

Defined in: [packages/esm-breadcrumbs/src/filter.ts:49](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-breadcrumbs/src/filter.ts#L49)

___

### getBreadcrumbs

▸ **getBreadcrumbs**(): [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[]

**Returns:** [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[]

Defined in: [packages/esm-breadcrumbs/src/db.ts:50](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-breadcrumbs/src/db.ts#L50)

___

### getBreadcrumbsFor

▸ **getBreadcrumbsFor**(`path`: *string*): [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*BreadcrumbRegistration*](interfaces/breadcrumbregistration.md)[]

Defined in: [packages/esm-breadcrumbs/src/filter.ts:78](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-breadcrumbs/src/filter.ts#L78)

___

### registerBreadcrumb

▸ **registerBreadcrumb**(`breadcrumb`: [*BreadcrumbSettings*](interfaces/breadcrumbsettings.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`breadcrumb` | [*BreadcrumbSettings*](interfaces/breadcrumbsettings.md) |

**Returns:** *void*

Defined in: [packages/esm-breadcrumbs/src/db.ts:26](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-breadcrumbs/src/db.ts#L26)

___

### registerBreadcrumbs

▸ **registerBreadcrumbs**(`breadcrumbs`: [*BreadcrumbSettings*](interfaces/breadcrumbsettings.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`breadcrumbs` | [*BreadcrumbSettings*](interfaces/breadcrumbsettings.md)[] |

**Returns:** *void*

Defined in: [packages/esm-breadcrumbs/src/db.ts:35](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-breadcrumbs/src/db.ts#L35)

___

## Navigation Functions

### interpolateString

▸ **interpolateString**(`template`: *string*, `params`: *object*): *string*

Interpolates values of `params` into the `template` string.

Useful for additional template parameters in URLs.

Example usage:
```js
navigate({
 to: interpolateString(
   config.links.patientChart,
   { patientUuid: patient.uuid }
 )
});
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`template` | *string* | With optional params wrapped in `${ }`   |
`params` | *object* | Values to interpolate into the string template   |

**Returns:** *string*

Defined in: [packages/esm-config/src/navigation/interpolate-string.ts:38](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/navigation/interpolate-string.ts#L38)

___

### isUrl

▸ `Const`**isUrl**(`value`: *any*): *string* \| *void*

Verifies that a string contains only the default URL template parameters.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *string* \| *void*

Defined in: [packages/esm-config/src/validators/validators.ts:55](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/validators/validators.ts#L55)

___

### isUrlWithTemplateParameters

▸ `Const`**isUrlWithTemplateParameters**(`allowedTemplateParameters`: *string*[]): [*Validator*](API.md#validator)

Verifies that a string contains only the default URL template
parameters, plus any specified in `allowedTemplateParameters`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`allowedTemplateParameters` | *string*[] | To be added to `openmrsBase` and `openmrsSpaBase`   |

**Returns:** [*Validator*](API.md#validator)

Defined in: [packages/esm-config/src/validators/validators.ts:23](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/validators/validators.ts#L23)

___

### navigate

▸ **navigate**(`__namedParameters`: [*NavigateOptions*](interfaces/navigateoptions.md)): *void*

Calls `location.assign` for non-SPA paths and [navigateToUrl](https://single-spa.js.org/docs/api/#navigatetourl) for SPA paths

Example usage:
```js
const config = getConfig();
const submitHandler = () => {
  navigate({ to: config.links.submitSuccess });
};
```

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | [*NavigateOptions*](interfaces/navigateoptions.md) |

**Returns:** *void*

Defined in: [packages/esm-config/src/navigation/navigate.ts:29](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/navigation/navigate.ts#L29)

___

## Other Functions

### attach

▸ **attach**(`extensionSlotName`: *string*, `extensionId`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`extensionSlotName` | *string* |
`extensionId` | *string* |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/extensions.ts:57](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L57)

___

### createAppState

▸ **createAppState**(`initialState`: [*AppState*](interfaces/appstate.md)): *Store*<[*AppState*](interfaces/appstate.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`initialState` | [*AppState*](interfaces/appstate.md) |

**Returns:** *Store*<[*AppState*](interfaces/appstate.md)\>

Defined in: [packages/esm-state/src/state.ts:59](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-state/src/state.ts#L59)

___

### createErrorHandler

▸ **createErrorHandler**(): *function*

**Returns:** (`incomingErr`: *any*) => *void*

Defined in: [packages/esm-error-handling/src/index.ts:30](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-error-handling/src/index.ts#L30)

___

### createGlobalStore

▸ **createGlobalStore**<TState\>(`name`: *string*, `initialState`: TState): *Store*<TState\>

#### Type parameters:

Name |
:------ |
`TState` |

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`initialState` | TState |

**Returns:** *Store*<TState\>

Defined in: [packages/esm-state/src/state.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-state/src/state.ts#L10)

___

### createUseStore

▸ **createUseStore**<T\>(`store`: *Store*<T\>): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`store` | *Store*<T\> |

**Returns:** () => T(`actions`: [*Actions*](API.md#actions)) => T & [*BoundActions*](API.md#boundactions)(`actions?`: [*Actions*](API.md#actions)) => T & [*BoundActions*](API.md#boundactions)

Defined in: [packages/esm-react-utils/src/createUseStore.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/createUseStore.ts#L21)

___

### defineConfigSchema

▸ **defineConfigSchema**(`moduleName`: *string*, `schema`: [*ConfigSchema*](interfaces/configschema.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`moduleName` | *string* |
`schema` | [*ConfigSchema*](interfaces/configschema.md) |

**Returns:** *void*

Defined in: [packages/esm-config/src/module-config/module-config.ts:215](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/module-config.ts#L215)

___

### detach

▸ **detach**(`extensionSlotName`: *string*, `extensionId`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`extensionSlotName` | *string* |
`extensionId` | *string* |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/extensions.ts:87](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L87)

___

### getActualRouteProps

▸ **getActualRouteProps**(`pathTemplate`: *string*, `url`: *string*): *object* \| *undefined*

#### Parameters:

Name | Type |
:------ | :------ |
`pathTemplate` | *string* |
`url` | *string* |

**Returns:** *object* \| *undefined*

Defined in: [packages/esm-extensions/src/route.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/route.ts#L3)

___

### getAppState

▸ **getAppState**(): *Store*<[*AppState*](interfaces/appstate.md)\>

**Returns:** *Store*<[*AppState*](interfaces/appstate.md)\>

Defined in: [packages/esm-state/src/state.ts:63](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-state/src/state.ts#L63)

___

### getAsyncExtensionLifecycle

▸ `Const`**getAsyncExtensionLifecycle**<T\>(`lazy`: () => *Promise*<{ `default`: *React.ComponentType*<T\>  }\>, `options`: [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md)): *function*

**`deprecated`** Use getAsyncLifecycle instead.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`lazy` | () => *Promise*<{ `default`: *React.ComponentType*<T\>  }\> |
`options` | [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md) |

**Returns:** () => *Promise*<Lifecycles\>

Defined in: [packages/esm-react-utils/src/getLifecycle.ts:31](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/getLifecycle.ts#L31)

___

### getAsyncLifecycle

▸ **getAsyncLifecycle**<T\>(`lazy`: () => *Promise*<{ `default`: *React.ComponentType*<T\>  }\>, `options`: [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md)): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`lazy` | () => *Promise*<{ `default`: *React.ComponentType*<T\>  }\> |
`options` | [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md) |

**Returns:** () => *Promise*<Lifecycles\>

Defined in: [packages/esm-react-utils/src/getLifecycle.ts:20](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/getLifecycle.ts#L20)

___

### getConfig

▸ **getConfig**(`moduleName`: *string*): *Promise*<[*Config*](interfaces/config.md)\>

A promise-based way to access the config as soon as it is fully loaded
from the import-map. If it is already loaded, resolves the config in its
present state.

In general you should use the Unistore-based API provided by
`getConfigStore`, which allows creating a subscription so that you always
have the latest config. If using React, just use `useConfig`.

This is a useful function if you need to get the config in the course
of the execution of a function.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`moduleName` | *string* | The name of the module for which to look up the config    |

**Returns:** *Promise*<[*Config*](interfaces/config.md)\>

Defined in: [packages/esm-config/src/module-config/module-config.ts:244](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/module-config.ts#L244)

___

### getConfigStore

▸ **getConfigStore**(`moduleName`: *string*): *Store*<[*ConfigStore*](interfaces/configstore.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`moduleName` | *string* |

**Returns:** *Store*<[*ConfigStore*](interfaces/configstore.md)\>

Defined in: [packages/esm-config/src/module-config/state.ts:142](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/state.ts#L142)

___

### getExtensionConfigStore

▸ **getExtensionConfigStore**(`extensionSlotModuleName`: *string*, `attachedExtensionSlotName`: *string*, `extensionId`: *string*): *Store*<[*ConfigStore*](interfaces/configstore.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`extensionSlotModuleName` | *string* |
`attachedExtensionSlotName` | *string* |
`extensionId` | *string* |

**Returns:** *Store*<[*ConfigStore*](interfaces/configstore.md)\>

Defined in: [packages/esm-config/src/module-config/state.ts:172](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/state.ts#L172)

___

### getExtensionRegistration

▸ **getExtensionRegistration**(`extensionId`: *string*): [*ExtensionRegistration*](interfaces/extensionregistration.md) \| *undefined*

#### Parameters:

Name | Type |
:------ | :------ |
`extensionId` | *string* |

**Returns:** [*ExtensionRegistration*](interfaces/extensionregistration.md) \| *undefined*

Defined in: [packages/esm-extensions/src/extensions.ts:34](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L34)

___

### getExtensionSlotsConfigStore

▸ **getExtensionSlotsConfigStore**(`moduleName`: *string*): *Store*<[*ExtensionSlotConfigsStore*](interfaces/extensionslotconfigsstore.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`moduleName` | *string* |

**Returns:** *Store*<[*ExtensionSlotConfigsStore*](interfaces/extensionslotconfigsstore.md)\>

Defined in: [packages/esm-config/src/module-config/state.ts:163](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/state.ts#L163)

___

### getExtensionSlotsForModule

▸ **getExtensionSlotsForModule**(`moduleName`: *string*): *string*[]

#### Parameters:

Name | Type |
:------ | :------ |
`moduleName` | *string* |

**Returns:** *string*[]

Defined in: [packages/esm-extensions/src/extensions.ts:274](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L274)

___

### getGlobalStore

▸ **getGlobalStore**<TState\>(`name`: *string*, `fallbackState?`: TState): *Store*<TState\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TState` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`fallbackState?` | TState |

**Returns:** *Store*<TState\>

Defined in: [packages/esm-state/src/state.ts:39](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-state/src/state.ts#L39)

___

### getLifecycle

▸ **getLifecycle**<T\>(`Component`: *React.ComponentType*<T\>, `options`: [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md)): Lifecycles

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`Component` | *React.ComponentType*<T\> |
`options` | [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md) |

**Returns:** Lifecycles

Defined in: [packages/esm-react-utils/src/getLifecycle.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/getLifecycle.ts#L9)

___

### getUpdatedExtensionSlotInfo

▸ **getUpdatedExtensionSlotInfo**(`actualExtensionSlotName`: *string*, `moduleName`: *string*, `extensionSlot`: [*ExtensionSlotInfo*](interfaces/extensionslotinfo.md)): *Promise*<[*ExtensionSlotInfo*](interfaces/extensionslotinfo.md)\>

Returns information describing all extensions which can be rendered into an extension slot with
the specified name.
The returned information describe the extension itself, as well as the extension slot name(s)
with which it has been attached.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`actualExtensionSlotName` | *string* | The extension slot name for which matching extension info should be returned. For URL like extension slots, this should be the name where parameters have been replaced with actual values (e.g. `/mySlot/213da954-87a2-432d-91f6-a3c441851726`).   |
`moduleName` | *string* | The module name. Used for applying extension-specific config values to the result.   |
`extensionSlot` | [*ExtensionSlotInfo*](interfaces/extensionslotinfo.md) | The extension slot information object.    |

**Returns:** *Promise*<[*ExtensionSlotInfo*](interfaces/extensionslotinfo.md)\>

Defined in: [packages/esm-extensions/src/extensions.ts:303](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L303)

___

### handleApiError

▸ **handleApiError**(): *function*

**Returns:** (`incomingResponseErr`: *any*) => *void*

Defined in: [packages/esm-error-handling/src/index.ts:1](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-error-handling/src/index.ts#L1)

___

### inRange

▸ `Const`**inRange**(`min`: *number*, `max`: *number*): [*Validator*](API.md#validator)

Verifies that the value is between the provided minimum and maximum

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`min` | *number* | Minimum acceptable value   |
`max` | *number* | Maximum acceptable value    |

**Returns:** [*Validator*](API.md#validator)

Defined in: [packages/esm-config/src/validators/validators.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/validators/validators.ts#L9)

___

### isOmrsDateStrict

▸ **isOmrsDateStrict**(`omrsPayloadString`: *string*): *boolean*

This function is STRICT on checking whether a date string is the openmrs format.
The format should be YYYY-MM-DDTHH:mm:ss.SSSZZ

#### Parameters:

Name | Type |
:------ | :------ |
`omrsPayloadString` | *string* |

**Returns:** *boolean*

Defined in: [packages/esm-utils/src/omrs-dates.ts:16](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L16)

___

### isOmrsDateToday

▸ **isOmrsDateToday**(`date`: [*DateInput*](API.md#dateinput)): *boolean*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`date` | [*DateInput*](API.md#dateinput) | Checks if the provided date is today.    |

**Returns:** *boolean*

Defined in: [packages/esm-utils/src/omrs-dates.ts:53](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L53)

___

### makeUrl

▸ **makeUrl**(`path`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *string*

Defined in: [packages/esm-api/src/openmrs-fetch.ts:8](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/openmrs-fetch.ts#L8)

___

### openmrsComponentDecorator

▸ **openmrsComponentDecorator**(`userOpts`: [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md)): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`userOpts` | [*ComponentDecoratorOptions*](interfaces/componentdecoratoroptions.md) |

**Returns:** (`Comp`: *ComponentType*<{}\>) => *typeof* OpenmrsReactComponent

Defined in: [packages/esm-react-utils/src/openmrsComponentDecorator.tsx:71](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/openmrsComponentDecorator.tsx#L71)

___

### processConfig

▸ **processConfig**(`schema`: [*ConfigSchema*](interfaces/configschema.md), `providedConfig`: [*ConfigObject*](interfaces/configobject.md), `keyPathContext`: *string*): [*Config*](interfaces/config.md)

Validate and interpolate defaults for `providedConfig` according to `schema`

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`schema` | [*ConfigSchema*](interfaces/configschema.md) | a configuration schema   |
`providedConfig` | [*ConfigObject*](interfaces/configobject.md) | an object of config values (without the top-level module name)   |
`keyPathContext` | *string* | a dot-deparated string which helps the user figure out where     the provided config came from    |

**Returns:** [*Config*](interfaces/config.md)

Defined in: [packages/esm-config/src/module-config/module-config.ts:266](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/module-config.ts#L266)

___

### provide

▸ **provide**(`config`: [*Config*](interfaces/config.md), `sourceName?`: *string*): *void*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`config` | [*Config*](interfaces/config.md) | - |
`sourceName` | *string* | "provided" |

**Returns:** *void*

Defined in: [packages/esm-config/src/module-config/module-config.ts:223](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/module-config/module-config.ts#L223)

___

### pushNavigationContext

▸ **pushNavigationContext**(`context`: [*NavigationContext*](interfaces/navigationcontext.md)): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`context` | [*NavigationContext*](interfaces/navigationcontext.md) |

**Returns:** () => *void*

Defined in: [packages/esm-extensions/src/contexts.ts:37](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/contexts.ts#L37)

___

### registerExtension

▸ `Const`**registerExtension**(`moduleName`: *string*, `name`: *string*, `load`: () => *Promise*<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`moduleName` | *string* |
`name` | *string* |
`load` | () => *Promise*<any\> |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/extensions.ts:42](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L42)

___

### registerExtensionSlot

▸ **registerExtensionSlot**(`moduleName`: *string*, `actualExtensionSlotName`: *string*, `domElement`: HTMLElement): *void*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`moduleName` | *string* | The name of the module that contains the extension slot   |
`actualExtensionSlotName` | *string* | The extension slot name that is actually used   |
`domElement` | HTMLElement | The HTML element of the extension slot    |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/extensions.ts:208](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L208)

___

### renderExtension

▸ **renderExtension**(`domElement`: HTMLElement, `actualExtensionSlotName`: *string*, `attachedExtensionSlotName`: *string*, `extensionSlotModuleName`: *string*, `extensionId`: *string*, `renderFunction?`: (`lifecycle`: [*Lifecycle*](interfaces/lifecycle.md)) => [*Lifecycle*](interfaces/lifecycle.md), `additionalProps?`: *Record*<string, any\>): [*CancelLoading*](interfaces/cancelloading.md)

Mounts into a DOM node (representing an extension slot)
a lazy-loaded component from *any* microfrontend
that registered an extension component for this slot.

#### Parameters:

Name | Type |
:------ | :------ |
`domElement` | HTMLElement |
`actualExtensionSlotName` | *string* |
`attachedExtensionSlotName` | *string* |
`extensionSlotModuleName` | *string* |
`extensionId` | *string* |
`renderFunction` | (`lifecycle`: [*Lifecycle*](interfaces/lifecycle.md)) => [*Lifecycle*](interfaces/lifecycle.md) |
`additionalProps` | *Record*<string, any\> |

**Returns:** [*CancelLoading*](interfaces/cancelloading.md)

Defined in: [packages/esm-extensions/src/render.ts:24](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/render.ts#L24)

___

### reportError

▸ **reportError**(`err`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | *any* |

**Returns:** *void*

Defined in: [packages/esm-error-handling/src/index.ts:23](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-error-handling/src/index.ts#L23)

___

### showToast

▸ **showToast**(`toast`: ToastDescriptor): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`toast` | ToastDescriptor |

**Returns:** *void*

Defined in: [packages/esm-styleguide/src/toasts/index.tsx:27](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-styleguide/src/toasts/index.tsx#L27)

___

### switchTo

▸ **switchTo**<T\>(`type`: [*NavigationContextType*](API.md#navigationcontexttype), `link`: *string*, `state?`: T): *void*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | [*NavigationContextType*](API.md#navigationcontexttype) |
`link` | *string* |
`state?` | T |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/contexts.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/contexts.ts#L21)

___

### toDateObjectStrict

▸ **toDateObjectStrict**(`omrsDateString`: *string*): Date \| *null*

Converts the object to a date object if it is a valid ISO date time string.

#### Parameters:

Name | Type |
:------ | :------ |
`omrsDateString` | *string* |

**Returns:** Date \| *null*

Defined in: [packages/esm-utils/src/omrs-dates.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L60)

___

### toOmrsDateFormat

▸ **toOmrsDateFormat**(`date`: [*DateInput*](API.md#dateinput), `format?`: *string*): *string*

Formats the input as a date string. By default the format "YYYY-MMM-DD" is used.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`date` | [*DateInput*](API.md#dateinput) | - |
`format` | *string* | "YYYY-MMM-DD" |

**Returns:** *string*

Defined in: [packages/esm-utils/src/omrs-dates.ts:112](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L112)

___

### toOmrsDayDateFormat

▸ **toOmrsDayDateFormat**(`date`: [*DateInput*](API.md#dateinput)): *string*

Formats the input as a date string using the format "DD - MMM - YYYY".

#### Parameters:

Name | Type |
:------ | :------ |
`date` | [*DateInput*](API.md#dateinput) |

**Returns:** *string*

Defined in: [packages/esm-utils/src/omrs-dates.ts:98](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L98)

___

### toOmrsIsoString

▸ **toOmrsIsoString**(`date`: [*DateInput*](API.md#dateinput), `toUTC?`: *boolean*): *string*

Formats the input as a date time string using the format "YYYY-MM-DDTHH:mm:ss.SSSZZ".

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`date` | [*DateInput*](API.md#dateinput) | - |
`toUTC` | *boolean* | false |

**Returns:** *string*

Defined in: [packages/esm-utils/src/omrs-dates.ts:71](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L71)

___

### toOmrsTimeString

▸ **toOmrsTimeString**(`date`: [*DateInput*](API.md#dateinput)): *string*

Formats the input as a time string using the format "HH:mm A".

#### Parameters:

Name | Type |
:------ | :------ |
`date` | [*DateInput*](API.md#dateinput) |

**Returns:** *string*

Defined in: [packages/esm-utils/src/omrs-dates.ts:91](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L91)

___

### toOmrsTimeString24

▸ **toOmrsTimeString24**(`date`: [*DateInput*](API.md#dateinput)): *string*

Formats the input as a time string using the format "HH:mm".

#### Parameters:

Name | Type |
:------ | :------ |
`date` | [*DateInput*](API.md#dateinput) |

**Returns:** *string*

Defined in: [packages/esm-utils/src/omrs-dates.ts:84](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L84)

___

### toOmrsYearlessDateFormat

▸ **toOmrsYearlessDateFormat**(`date`: [*DateInput*](API.md#dateinput)): *string*

Formats the input as a date string using the format "DD-MMM".

#### Parameters:

Name | Type |
:------ | :------ |
`date` | [*DateInput*](API.md#dateinput) |

**Returns:** *string*

Defined in: [packages/esm-utils/src/omrs-dates.ts:105](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-utils/src/omrs-dates.ts#L105)

___

### unregisterExtensionSlot

▸ **unregisterExtensionSlot**(`moduleName`: *string*, `actualExtensionSlotName`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`moduleName` | *string* |
`actualExtensionSlotName` | *string* |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/extensions.ts:243](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/extensions.ts#L243)

___

### updateExtensionStore

▸ **updateExtensionStore**<U\>(`updater`: (`state`: [*ExtensionStore*](interfaces/extensionstore.md)) => [*MaybeAsync*](API.md#maybeasync)<Pick<[*ExtensionStore*](interfaces/extensionstore.md), U\>\>): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`U` | *extensions* \| *slots* |

#### Parameters:

Name | Type |
:------ | :------ |
`updater` | (`state`: [*ExtensionStore*](interfaces/extensionstore.md)) => [*MaybeAsync*](API.md#maybeasync)<Pick<[*ExtensionStore*](interfaces/extensionstore.md), U\>\> |

**Returns:** *void*

Defined in: [packages/esm-extensions/src/store.ts:106](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-extensions/src/store.ts#L106)

___

### useConfig

▸ **useConfig**(): [*ConfigObject*](interfaces/configobject.md)

Use this React Hook to obtain your module's configuration.

**Returns:** [*ConfigObject*](interfaces/configobject.md)

Defined in: [packages/esm-react-utils/src/useConfig.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useConfig.ts#L22)

___

### useCurrentPatient

▸ **useCurrentPatient**(): [*boolean*, NullablePatient, [*PatientUuid*](API.md#patientuuid), Error \| *null*]

**Returns:** [*boolean*, NullablePatient, [*PatientUuid*](API.md#patientuuid), Error \| *null*]

Defined in: [packages/esm-react-utils/src/useCurrentPatient.ts:12](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useCurrentPatient.ts#L12)

___

### useExtensionStore

▸ `Const`**useExtensionStore**(): T

**Returns:** T

Defined in: [packages/esm-react-utils/src/useExtensionStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useExtensionStore.ts#L4)

▸ `Const`**useExtensionStore**(`actions`: [*Actions*](API.md#actions)): T & [*BoundActions*](API.md#boundactions)

#### Parameters:

Name | Type |
:------ | :------ |
`actions` | [*Actions*](API.md#actions) |

**Returns:** T & [*BoundActions*](API.md#boundactions)

Defined in: [packages/esm-react-utils/src/useExtensionStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useExtensionStore.ts#L4)

▸ `Const`**useExtensionStore**(`actions?`: [*Actions*](API.md#actions)): T & [*BoundActions*](API.md#boundactions)

#### Parameters:

Name | Type |
:------ | :------ |
`actions?` | [*Actions*](API.md#actions) |

**Returns:** T & [*BoundActions*](API.md#boundactions)

Defined in: [packages/esm-react-utils/src/useExtensionStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useExtensionStore.ts#L4)

___

### useForceUpdate

▸ **useForceUpdate**(): *function*

**Returns:** () => *void*

Defined in: [packages/esm-react-utils/src/useForceUpdate.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useForceUpdate.ts#L3)

___

### useNavigationContext

▸ **useNavigationContext**(`context`: [*NavigationContext*](interfaces/navigationcontext.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`context` | [*NavigationContext*](interfaces/navigationcontext.md) |

**Returns:** *void*

Defined in: [packages/esm-react-utils/src/useNavigationContext.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useNavigationContext.ts#L7)

___

### useStore

▸ **useStore**<T\>(`store`: *Store*<T\>): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`store` | *Store*<T\> |

**Returns:** T

Defined in: [packages/esm-react-utils/src/useStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useStore.ts#L4)

▸ **useStore**<T\>(`store`: *Store*<T\>, `actions`: [*Actions*](API.md#actions)): T & [*BoundActions*](API.md#boundactions)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`store` | *Store*<T\> |
`actions` | [*Actions*](API.md#actions) |

**Returns:** T & [*BoundActions*](API.md#boundactions)

Defined in: [packages/esm-react-utils/src/useStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-react-utils/src/useStore.ts#L5)

___

### userHasAccess

▸ **userHasAccess**(`requiredPrivilege`: *string*, `user`: [*LoggedInUser*](interfaces/loggedinuser.md)): *undefined* \| [*Privilege*](interfaces/privilege.md)

#### Parameters:

Name | Type |
:------ | :------ |
`requiredPrivilege` | *string* |
`user` | [*LoggedInUser*](interfaces/loggedinuser.md) |

**Returns:** *undefined* \| [*Privilege*](interfaces/privilege.md)

Defined in: [packages/esm-api/src/shared-api-objects/current-user.ts:121](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/shared-api-objects/current-user.ts#L121)

___

### validator

▸ **validator**(`validationFunction`: [*ValidatorFunction*](API.md#validatorfunction), `message`: *string*): [*Validator*](API.md#validator)

#### Parameters:

Name | Type |
:------ | :------ |
`validationFunction` | [*ValidatorFunction*](API.md#validatorfunction) |
`message` | *string* |

**Returns:** [*Validator*](API.md#validator)

Defined in: [packages/esm-config/src/validators/validator.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-config/src/validators/validator.ts#L3)

___

## Workspace Functions

### getNewWorkspaceItem

▸ **getNewWorkspaceItem**(): *Observable*<[*WorkspaceItem*](interfaces/workspaceitem.md)\>

**Returns:** *Observable*<[*WorkspaceItem*](interfaces/workspaceitem.md)\>

Defined in: [packages/esm-api/src/workspace/workspace.resource.tsx:19](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/workspace/workspace.resource.tsx#L19)

___

### newWorkspaceItem

▸ **newWorkspaceItem**(`item`: [*WorkspaceItem*](interfaces/workspaceitem.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`item` | [*WorkspaceItem*](interfaces/workspaceitem.md) |

**Returns:** *void*

Defined in: [packages/esm-api/src/workspace/workspace.resource.tsx:10](https://github.com/openmrs/openmrs-esm-core/blob/master/packages/esm-api/src/workspace/workspace.resource.tsx#L10)
