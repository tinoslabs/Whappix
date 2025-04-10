<template>
    <AppLayout class="md:overflow-y-hidden capitalize">
        <div class="px-4 md:px-0 flex flex-col bg-white border-l py-4 text-[#000]">
            <div class="flex justify-between md:px-8 border-b py-4 pb-2">
                <div>
                    <h2 class="text-xl mb-1">{{ $t('Edit template') }}</h2>
                    <p class="flex items-center text-sm leading-6 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"/></svg>
                        <span class="ml-1 mt-1">{{ $t('Modify whatsapp template') }}</span>
                    </p>
                </div>
                <div class="space-x-2 flex items-center">
                    <Link href="/templates" class="rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ $t('Back') }}</Link>
                    <button @click="submitForm()" type="button" class="rounded-md px-3 py-2 float-right text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize" :class="isFormValid === true ? 'bg-indigo-600 hover:bg-indigo-500 shadow-sm' : 'bg-gray-200'" :disabled="!isFormValid || isLoading">
                        <span v-if="!isLoading">{{ $t('Update template') }}</span>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
                    </button>
                </div>
            </div>
            <div class="md:flex md:flex-grow-1">
                <div class="md:w-[50%] py-4 md:p-8 overflow-y-auto md:h-[90vh]">
                    <div class="grid gap-x-6 gap-y-4 sm:grid-cols-6 mb-8">
                        <FormInput v-model="form.name" :name="$t('Name')" :type="'text'" @input="handleNameInput" @keydown.space.prevent="addUnderscore" :class="'sm:col-span-6'"/>
                        <FormSelect v-model="form.category" :options="categoryOptions" :name="$t('Category')" :class="'sm:col-span-3'" :placeholder="'Select Category'"/>
                        <FormSelect v-model="form.language" :options="langOptions" :name="$t('Language')" :class="'sm:col-span-3'" :placeholder="'Select Language'"/>
                    </div>
                    <div v-if="form.category === 'UTILITY' || form.category === 'MARKETING'">
                        <h2 class="text-slate-600">{{ $t('Header') }} <span class="text-xs">({{ $t('Optional') }})</span></h2>
                        <span class="text-slate-600 text-xs">{{ $t('Add a title or choose which type of media you\'ll use for this header') }}</span>
                        <div class="grid grid-cols-4 mt-2 bg-[#f9f9fa] rounded-lg mb-4">
                            <button @click="changeHeaderType('TEXT')" class="text-center py-2 text-sm text-slate-800 m-1" :class="form.header.format === 'TEXT' ? 'bg-white shadow rounded-lg' : ''">{{ $t('Text') }}</button>
                            <button @click="changeHeaderType('IMAGE')" class="text-center py-2 text-sm text-slate-800 m-1" :class="form.header.format === 'IMAGE' ? 'bg-white shadow rounded-lg' : ''">{{ $t('Image') }}</button>
                            <button @click="changeHeaderType('VIDEO')" class="text-center py-2 text-sm text-slate-800 m-1" :class="form.header.format === 'VIDEO' ? 'bg-white shadow rounded-lg' : ''">{{ $t('Video') }}</button>
                            <button @click="changeHeaderType('DOCUMENT')" class="text-center py-2 text-sm text-slate-800 m-1" :class="form.header.format === 'DOCUMENT' ? 'bg-white shadow rounded-lg' : ''">{{ $t('Document') }}</button>
                        </div>
                        <div class="mb-8">
                            <div v-if="form.header.format === 'TEXT'">
                                <FormTextArea v-model="form.header.text" @input="characterCount('header')" :name="$t('Header text')" :showLabel="false" :type="'text'" :textAreaRows="2" :class="'sm:col-span-6'"/>
                                <div class="flex items-center justify-between mt-2">
                                    <span class="text-xs">{{ $t('Characters') }}: {{ headerCharacterCount }}/{{ headerCharacterLimit }}</span>
                                    <div class="flex items-center space-x-3">
                                        <button class="hover:bg-slate-100 rounded p-1 text-sm">{{ $t('Add variable') }}</button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="form.header.format === 'IMAGE'">
                                <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <input
                                        type="file"
                                        class="sr-only"
                                        accept=".jpg, .png"
                                        ref="fileInput"
                                        id="file-upload"
                                        @change="handleFileUpload($event)"
                                    />
                                    <div class="text-center">
                                        <div>
                                            <div v-if="form.header.format === 'IMAGE' && form.header.example" class="flex justify-center items-center">
                                                <div class="flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2">
                                                    <div>
                                                        <svg class="mx-auto h-6 w-6 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z" clip-rule="evenodd"/></svg>
                                                    </div>
                                                    <div class="flex items-center space-x-2">
                                                        <span class="text-sm">{{ form.header.example.name }}</span>
                                                        <button @click="removeFile()">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z" clip-rule="evenodd"/></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <label v-else for="file-upload">
                                                <svg class="mx-auto h-12 w-12 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/><path fill="currentColor" fill-rule="evenodd" d="M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z" clip-rule="evenodd"/></svg>
                                            </label>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>{{ $t('Provide examples of the variables or media in the header') }}</span>
                                                </label>
                                            </div>
                                            <p class="text-xs text-gray-500">{{ $t('PNG or JPG files only') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="form.header.format === 'VIDEO'">
                                <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <input
                                        type="file"
                                        class="sr-only"
                                        accept=".mp4"
                                        ref="fileInput"
                                        id="file-upload2"
                                        @change="handleFileUpload($event)"
                                    />
                                    <div class="text-center">
                                        <div>
                                            <div v-if="form.header.format === 'VIDEO' && form.header.example" class="flex justify-center items-center">
                                                <div class="flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2">
                                                    <div>
                                                        <svg class="mx-auto h-6 w-6 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"/></svg>
                                                    </div>
                                                    <div class="flex items-center space-x-2">
                                                        <span class="text-sm">{{ form.header.example.name }}</span>
                                                        <button @click="removeFile()">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z" clip-rule="evenodd"/></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <label v-else for="file-upload2">
                                                <svg class="mx-auto h-12 w-12 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"/></svg>
                                            </label>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload2" class="relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>{{ $t('Provide examples of the variables or media in the header') }}</span>
                                                </label>
                                            </div>
                                            <p class="text-xs text-gray-500">{{ $t('MP4 files only') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="form.header.format === 'DOCUMENT'">
                                <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <input
                                        type="file"
                                        class="sr-only"
                                        accept=".pdf"
                                        ref="fileInput"
                                        id="file-upload3"
                                        @change="handleFileUpload($event)"
                                    />
                                    <div class="text-center">
                                        <div>
                                            <div v-if="form.header.format === 'DOCUMENT' && form.header.example" class="flex justify-center items-center">
                                                <div class="flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2">
                                                    <div>
                                                        <svg class="mx-auto h-6 w-6 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"/><path fill="currentColor" d="M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"/></svg>
                                                    </div>
                                                    <div class="flex items-center space-x-2">
                                                        <span class="text-sm">{{ form.header.example.name }}</span>
                                                        <button @click="removeFile()">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z" clip-rule="evenodd"/></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <label v-else for="file-upload3">
                                                <svg class="mx-auto h-12 w-12 text-gray-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"/><path fill="currentColor" d="M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"/></svg>
                                            </label>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload3" class="relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>{{ $t('Provide examples of the variables or media in the header') }}</span>
                                                </label>
                                            </div>
                                            <p class="text-xs text-gray-500">{{ $t('PDF files only') }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-slate-600">{{ $t('Body') }} <span class="text-xs">({{ $t('Required') }})</span></h2>
                        <span class="text-slate-600 text-xs">{{ $t('Enter the text for your message in the language that you\'ve selected') }}</span>
                        <div class="mb-8">
                            <div>
                                <FormTemplateTextArea v-model="form.body.text" @input="characterCount('body')" :name="$t('Body text')" :showLabel="false" :type="'text'" :textAreaRows="5" :class="'sm:col-span-6'"/>
                            </div>
                        </div>

                        <h2 class="text-slate-600 capitalize">{{ $t('Footer description') }} <span class="text-xs">({{ $t('Optional') }})</span></h2>
                        <span class="text-slate-600 text-xs">{{ $t('Add a short line of text to the bottom of your message template') }}</span>
                        <div class="mb-8">
                            <div>
                                <FormTextArea v-model="form.footer.text" @input="characterCount('footer')" :name="$t('Footer text')" :showLabel="false" :type="'text'" :textAreaRows="2" :class="'sm:col-span-6'"/>
                                <span class="text-xs">{{ $t('Characters') }}: {{ footerCharacterCount }}/{{ footerCharacterLimit }}</span>
                            </div>
                        </div>

                        <h2 class="text-slate-600">{{ $t('Buttons') }} <span class="text-xs">({{ $t('Optional') }})</span></h2>
                        <span class="text-slate-600 text-xs">{{ $t('Create buttons that let customers respond to your message or take action') }}</span>
                        <div class="grid grid-cols-2 mt-3 mb-2">
                            <button @click="addButton('call')" class="flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2">
                                <span>{{ $t('Call phone number (1)') }}</span>
                            </button>
                            <button @click="addButton('website')" class="flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4">
                                <span>{{ $t('Visit website (2)') }}</span>
                            </button>
                        </div>
                        <div class="grid grid-cols-2 mt-3 mb-2">
                            <button @click="addButton('offer')" class="flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2">
                                <span>{{ $t('Copy offer code (1)') }}</span>
                            </button>
                            <button @click="addButton('custom')" class="flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4">
                                <span>{{ $t('Custom button (6)') }}</span>
                            </button>
                        </div>
                        <div v-if="form.buttons.length > 0" class="mt-3 mb-8">
                            <div v-for="(button, index) in form.buttons" :key="index" class="bg-[#f9f9fa] p-3 rounded-lg mb-3">
                                <div class="flex items-center justify-between pb-1">
                                    <span class="text-sm">{{ button.name }}</span>
                                    <button @click="removeButton(index)" class="bg-slate-200 hover:shadow rounded-full p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z" clip-rule="evenodd"/></svg>
                                    </button>
                                </div>
                                <div class="flex space-x-1 border-t pt-2">
                                    <FormInput v-model="button.text" :name="$t('Button text')" :type="'text'" :class="button.type === 'QUICK_REPLY' ? 'w-full' :'sm:col-span-2'" :labelClass="'mb-0'"/>
                                    <FormInput v-model="button.url" v-if="button.type === 'URL'" :name="$t('Website url')" :type="'text'" :class="'w-full'" :labelClass="'mb-0'"/>
                                    <FormInput v-model="button.country" v-if="button.type === 'PHONE_NUMBER'" :name="$t('Country')" :type="'text'" :class="'sm:col-span-2'" :labelClass="'mb-0'"/>
                                    <FormInput v-model="button.phone_number" v-if="button.type === 'PHONE_NUMBER'" :name="$t('Phone number')" :type="'text'" :class="'sm:col-span-2'" :labelClass="'mb-0'"/>
                                    <FormInput v-model="button.example" v-if="button.type === 'COPY_CODE'" :name="$t('Sample code')" :type="'text'" :class="'w-full'" :labelClass="'mb-0'"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-[50%] py-20 px-20 overflow-y-auto" style="background-image: url('/images/whatsapp-bg-02.png');">
                    <div class="mr-auto rounded-lg rounded-tl-none my-1 p-1 text-sm bg-white flex flex-col relative speech-bubble-left w-[25em]">
                        <div v-if="form.header.format != 'TEXT'" class="mb-4 bg-[#ccd0d5] flex justify-center py-8 rounded">
                            <img v-if="form.header.format === 'IMAGE'" :src="'/images/image-placeholder.png'">
                            <img v-if="form.header.format === 'VIDEO'" :src="'/images/video-placeholder.png'">
                            <img v-if="form.header.format === 'DOCUMENT'" :src="'/images/document-placeholder.png'">
                        </div>
                        <h2 v-else class="text-gray-700 text-[16px] mb-1 px-2">{{ form.header.text }}</h2>
                        <p class="px-2">{{ form.body.text }}</p>
                        <div class="text-[#8c8c8c] mt-1 px-2">
                            <span class="text-[13px]">{{ form.footer.text }}</span>
                            <span class="text-right text-xs leading-none float-right" :class="form.footer.text ? 'mt-2' : ''">9:15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :label="''" :isOpen=isModalOpen>
            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-4">
                <div class="text-center">
                    <div v-if="error != null" class="bg-[#fae6e6] text-[darkred] rounded text-sm p-2 mb-4">
                        <div>{{ $t('Error') }}: </div>
                        <div>{{ error }}</div>
                        <button type="button" @click="closeModal" class="mt-4 inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4">Close</button>
                    </div>
                    <div v-else>
                        <h2 class="text-xl capitalize">{{ $t('Your template is being uploaded!') }}</h2>
                        <div class="flex justify-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round" stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </AppLayout>
</template>
<script setup>
    import axios from "axios";
    import AppLayout from "./../Layout/App.vue";
    import FormInput from '@/Components/FormInput.vue';
    import FormSelect from '@/Components/FormSelect.vue';
    import FormTextArea from '@/Components/FormTextArea.vue';
    import FormTemplateTextArea from '@/Components/FormTemplateTextArea.vue';
    import { ref, computed, watch } from 'vue';
    import { Link } from "@inertiajs/vue3";
    import Modal from '@/Components/Modal.vue';
    import 'vue3-toastify/dist/index.css';
    import { router } from '@inertiajs/vue3';

    

    const props = defineProps(['languages', 'template']);
    const headerCharacterLimit = ref('60');
    const headerCharacterCount = ref('0');
    const bodyCharacterLimit = ref('1098');
    const bodyCharacterCount = ref('0');
    const footerCharacterLimit = ref('60');
    const footerCharacterCount = ref('0');
    const isLoading = ref(false);
    const imageUrl = ref(null);
    const isModalOpen = ref(false);
    const error = ref(null);
    const metadata = ref(JSON.parse(props.template.metadata));
    const extractComponent = (type, customProperty) => {
        const component = metadata.value.components.find(
            (c) => c.type === type
        );

        return component ? component[customProperty] : '';
    };
    const form = ref({
        'name' : props.template.name,
        'category' : props.template.category,
        'language' : props.template.language,
        'header' : {
            'format' : extractComponent('HEADER', 'format'),
            'text' : extractComponent('HEADER', 'text'),
            'example' : extractComponent('HEADER', 'example'),
        },
        'body' : {
            'text' : extractComponent('BODY', 'text'),
            'variables' : null,
        },
        'footer' : {
            'text' : extractComponent('FOOTER', 'text'),
        },
        'buttons' : []
    });

    const headerType = ref('text');
    const langOptions = ref(props.languages);
    const categoryOptions = ref([
        { value: 'UTILITY', label: 'Utility' },
        { value: 'MARKETING', label: 'Marketing' },
    ])

    const changeHeaderType = (value) => {
        form.value.header.format = value;
        form.value.header.example = '';
    }

    const handleNameInput = (event) => {
        const value = event.target.value.toLowerCase();
        form.value.name = value.replace(/[^a-zA-Z0-9_]/g, '');
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl.value = e.target.result;
            form.value.header.example = file; // Update header example with the uploaded image
        };
        reader.readAsDataURL(file);
    };

    const removeFile = () => {
        form.value.header.example = '';
    };

    const addUnderscore = (event) => {
        event.preventDefault();
        form.value.name += '_';
    };

    const characterCount = (type) => {
        let limit = 0;
        let count = 0;
        switch (type) {
            case 'header':
            limit = headerCharacterLimit.value;
            count = form.value.header.text.length;
            if (count <= limit) {
                headerCharacterCount.value = count;
            } else {
                form.value.header.text = form.value.header.text.slice(0, limit);
                headerCharacterCount.value = limit;
            }
            break;

            case 'body':
            limit = bodyCharacterLimit.value;
            count = form.value.body.text.length;
            if (count <= limit) {
                bodyCharacterCount.value = count;
            } else {
                form.value.body.text = form.value.body.text.slice(0, limit);
                bodyCharacterCount.value = limit;
            }
            break;

            case 'footer':
            limit = footerCharacterLimit.value;
            count = form.value.footer.text.length;
            if (count <= limit) {
                footerCharacterCount.value = count;
            } else {
                form.value.footer.text = form.value.footer.text.slice(0, limit);
                footerCharacterCount.value = limit;
            }
            break;
        }
    };

    const addButton = ($type) => {
        if($type === 'call'){
            form.value.buttons.push({
                'name' : 'Call Phone Number',
                'type' : 'PHONE_NUMBER',
                'country' : null,
                'text' : null,
                'phone_number' : null,
            });
        } else if($type === 'website'){
            form.value.buttons.push({
                'name' : 'Website URL',
                'type' : 'URL',
                'text' : null,
                'url' : null,
            });
        } else if($type === 'custom'){
            form.value.buttons.push({
                'name' : 'Custom Button',
                'type' : 'QUICK_REPLY',
                'text' : null,
            });
        } else if($type === 'offer'){
            form.value.buttons.push({
                'name' : 'Offer Code',
                'type' : 'COPY_CODE',
                'example' : null,
            });
        }
    }

    const removeButton = (index) => {
        if (index >= 0 && index < form.value.buttons.length) {
            form.value.buttons.splice(index, 1);
        }
    };

    const isFormValid = computed(() => {
        if (
            form.value.name === null ||
            form.value.name.trim() === "" ||
            form.value.language === null ||
            form.value.language.trim() === "" ||
            form.value.category === null ||
            form.value.category.trim() === "" ||
            form.value.buttons.some(button => {
                return (
                    (button.name === null || button.name === '') ||
                    (button.type === null || button.type === '') ||
                    (button.country === null || button.country === '') ||
                    (button.text === null || button.text === '') ||
                    (button.phone_number === null || button.phone_number === '')
                );
            })
        ) {
            return false;
        } else {
            if (form.value.body.text === null || form.value.body.text.trim() === "") {
                return false;
            }
        }

        return true;
    });

    const submitForm = () => {
        isLoading.value = true;
        isModalOpen.value = true;
        axios.post('/templates/' + props.template.uuid, form.value, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            if(response.data.success === false){
                isLoading.value = false;
                error.value = response.data.message;
            } else {
                router.visit('/templates', {
                    method: 'get',
                });
            }
        })
        .catch(error => {
            // Handle any errors that occur during the request
            //console.error('An error occurred:', error);
        });
    }

    const closeModal = () => {
        isModalOpen.value = false; 

        setTimeout(() => {
            error.value = null;
        }, 500);
    }

    watch(form, () => {
        isFormValid.value;
    });
</script>